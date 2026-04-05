class MyPromise {
  static PENDING = 'pending';
  static FULFILLED = 'fulfilled';
  static REJECTED = 'rejected';

  PromiseResult;
  #PromiseState;
  #onFulfilledCallbacks;
  #onRejectedCallbacks;

  // 初始化
  constructor(executor) {
    this.#PromiseState = MyPromise.PENDING;
    this.PromiseResult = null;
    this.#onFulfilledCallbacks = [];
    this.#onRejectedCallbacks = [];

    const resolve = (value) => {
      if (this.#PromiseState === MyPromise.PENDING) {
        this.#PromiseState = MyPromise.FULFILLED;
        this.value = value;
        // 执行回调
        this.#onFulfilledCallbacks.forEach(resolveCallback => resolveCallback(value));
      }
    };

    const reject = (reason) => {
      if (this.#PromiseState === MyPromise.PENDING) {
        this.#PromiseState = MyPromise.REJECTED;
        this.reason = reason;
        // 执行回调
        this.#onRejectedCallbacks.forEach(rejectCallback => rejectCallback(reason));
      }
    };

    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }

  }

  then(onFulfilled, onRejected) {
    const _this = this;

    // 值穿透
    if (typeof onFulfilled !== 'function') {
      onFulfilled = value => value;
    }
    if (typeof onRejected !== 'function') {
      onRejected = reason => { 
        throw reason; 
      }
    }

    let nextPromise = new MyPromise((resolve, reject) => {
      const returnCallback = (callbackFn, res, resolve, reject) => {
        setTimeout(() => {
          try {
            const thisRes = callbackFn(res);

            resolvePromise(thisRes, resolve, reject);
          } catch (err) {
            reject(err);
          }
        }, 0)
      }
      
      switch (_this.#PromiseState) {
        case MyPromise.FULFILLED:
          returnCallback(onFulfilled, this.value, resolve, reject);
          break;
        
        case MyPromise.REJECTED:
          returnCallback(onRejected, this.reason, resolve, reject);
          break;
        
        case MyPromise.PENDING:
          this.#onFulfilledCallbacks.push(() => {
            returnCallback(onFulfilled, this.value, resolve, reject);
          })
          this.#onRejectedCallbacks.push(() => {
            returnCallback(onRejected, this.reason, resolve, reject);
          })
          break;
      }
    });

    return nextPromise;
  }

  // catch
  catch(onRejected) {
    return this.then(null, onRejected);
  }

  // finally
  finally(onFinally) {
    if (typeof onFinally !== 'function') {
      return this.then();
    }
    return this.then(
      value => MyPromise.resolve(onFinally()).then(() => value),
      reason => MyPromise.resolve(onFinally()).then(() => {
        throw(reason);
      })
    )
  }

  // 静态方法 resolve
  static resolve(value) {
    if (value instanceof MyPromise) {
      return value;
    }
    return new MyPromise((resolve) => {
      resolve(value);
    })
  }

  // 静态方法 reject
  static reject(reason) {
    return new MyPromise((_, reject) => {
      reject(reason);
    })
  }

  // 静态方法 all
  static all(iterable) {
    return new MyPromise((resolve, reject) => {
      const res = [];
      let completedCount = 0;
      let index = 0;
      let isSettled = false;
      for (const i of iterable) {
        const currentIndex = index++;
        MyPromise.resolve(i).then(
          value => {
            if (isSettled) {
              return;
            }
            res[currentIndex] = value; // 按顺序存储
            completedCount++;
            if (completedCount === index) {
              resolve(res);
            }
          },
          reason => {
            if (isSettled) {
              return;
            }
            reject(reason);
            isSettled = true;
          }
        )
      }
      if (index === 0) {
        resolve(res);
      }
    })
  }

  // 静态方法 allSettled
  static allSettled(iterable) {
    return new MyPromise((resolve, reject) => {
      const res = [];
      let completedCount = 0;
      let index = 0;
      for (const i of iterable) {
        const currentIndex = index++;
        MyPromise.resolve(i).then(
          value => {
            res[currentIndex] = {status: 'fulfilled', value};
            completedCount++;
            if (completedCount === index) {
              resolve(res);
            }
          },
          reason => {
            res[currentIndex] = {status: 'rejected', reason};
            completedCount++;
            if (completedCount === index) {
              resolve(res);
            }
          }
        )
      }
      if (index === 0) {
        resolve(res);
      }
    })
  }

  // 静态方法 any
  static any(iterable) {
    return new MyPromise((resolve, reject) => {
      const errors = [];
      let completedCount = 0;
      let index = 0;
      let isSettled = false;
      for (const i of iterable) {
        const currentIndex = index++;
        MyPromise.resolve(i).then(
          value => {
            if (isSettled) {
              return;
            }
            isSettled = true;
            resolve(value);
          },
          reason => {
            if (isSettled) {
              return;
            }
            errors[currentIndex] = reason;
            completedCount++;
            if (completedCount === index) {
              reject(new AggregateError(errors, 'All promises were rejected'));
            }
          }
        )
      }
      if (index === 0) {
        reject(new AggregateError(errors, 'All promises were rejected'));
      }
    })
  }

  // 静态方法 race
  static race(iterable) {
    return new MyPromise((resolve, reject) => {
      let isSettled = false;
      for (const i of iterable) {
        MyPromise.resolve(i).then(
          value => {
            if (isSettled) {
              return;
            }
            isSettled = true;
            resolve(value);
          },
          reason => {
            if (isSettled) {
              return;
            }
            isSettled = true;
            reject(reason);
          }
        )
      }

    })
  }
}

const resolvePromise = (res, resolve, reject) => {
  if (res instanceof MyPromise) {
    res.then(resolve, reject);
  } else {
    resolve(res);
  }
}





const p = MyPromise.resolve(42);
p.finally(() => {
  throw new Error('清理出错');
}).catch(err => console.log(err));

// 测试
const set = new Set();
set.add(new MyPromise((resolve) => {
  setTimeout(() => {
    resolve(1);
  }, 2000);
}));
set.add(new MyPromise((resolve, reject) => {
  setTimeout(() => {
    // reject(4)
    resolve(4);
  }, 2500);
}));
set.add(new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve(3);
  }, 1000);
}));
MyPromise.race(set).then((res) => {
  console.log(res);
}, (reason) => {
  console.log(reason);
});
