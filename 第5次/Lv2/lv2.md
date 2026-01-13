# 分析哦Ciallo ~ (<・ω<)~★

> 第一次写md哎，还不怎么会写呢

---

## 那么，下面的代码……

```javascript {.line-numbers}
  var name = 'window'  //定义变量name（赋值为window？）
  function Person(name) {
    this.name = name
    this.foo1 = function () {
      console.log(this.name)
    }  
    this.foo2 = () => console.log(this.name)
    this.foo3 = function () {
      return function () {
        console.log(this.name)
      }
    }
    this.foo4 = function () {
      return () => {
        console.log(this.name)
      }
    }
  }  //构造函数哦
  
  //关键字创建？
  var person1 = new Person('person1')
  var person2 = new Person('person2')
  
  person1.foo1()  //调用foo1，指向person1（哈哈哈，我第一次看成了fool）
  person1.foo1.call(person2)  //调用foo1，指向person2
  
  //同上？
  person1.foo2() 
  person1.foo2.call(person2) 
  
  person1.foo3()()  //调用foo3，指向person1？（但是返回的函数的this.name没有指向的？所以会用window替代？）
  person1.foo3.call(person2)()  //调用foo3，指向person1？（返回的函数的this.name又没有指向的？）
  person1.foo3().call(person2)  //调用foo3，指向person2？
  
  //同上？
  person1.foo4()() 
  person1.foo4.call(person2)() 
  person1.foo4().call(person2) 

  //后面两组感觉怪怪的？不会有输出undefined的吧？
  //哎呀我在写什么，我自己都有些看不懂了……
```
  
### 所以，输出会是……

```markdown
person1
person2
person1
person2
window
window
person2
window
window
person2
```

? 是这样嘛

---

### 真正的结果是……

哎呀，那么现在我已经跑完一遍啦，最后结果是……

 ```markdown
 person1
 person2
 person1
 person1
 window
 window
 person2
 person1
 person2
 person1
 ```
  
 哎呀，错了好多，好尴尬……
  
> 怎么感觉我在说鲜花……（好吧其实全是鲜花……这不是日记这是作业啊啊啊）

那么，直接丢给大模型(≧∇≦)ﾉ

---

### 分析……（AI太好用了你们知道吗）

让我们逐步分析每个调用的输出：

```javascript
var name = 'window'
function Person(name) {
  this.name = name
  this.foo1 = function () {
    console.log(this.name)
  }
  this.foo2 = () => console.log(this.name)
  this.foo3 = function () {
    return function () {
      console.log(this.name)
    }
  }
  this.foo4 = function () {
    return () => {
      console.log(this.name)
    }
  }
}

var person1 = new Person('person1')
var person2 = new Person('person2')
```

**1. `person1.foo1()`**

- 普通函数调用，`this` 指向 `person1`
- 输出：`person1`

**2. `person1.foo1.call(person2)`**

- 通过 `call` 显式绑定 `this` 为 `person2`
- 输出：`person2`

**3. `person1.foo2()`**

- 箭头函数，`this` 继承自外层作用域（Person构造函数）
- 箭头函数定义时，外层 `this` 指向当前实例 `person1`
- 输出：`person1`

**4. `person1.foo2.call(person2)`**

- 箭头函数的 `this` 无法被 `call` 改变，依然指向定义时的 `person1`
- 输出：`person1`

**5. `person1.foo3()()`**

- `foo3()` 返回一个普通函数
- 返回的函数独立调用，`this` 指向全局（window）
- 输出：`window`

**6. `person1.foo3.call(person2)()`**

- `foo3.call(person2)` 将 `foo3` 的 `this` 绑定为 `person2`
- 但 `foo3` 返回的函数仍然是独立调用，`this` 指向 window
- 输出：`window`

**7. `person1.foo3().call(person2)`**

- `person1.foo3()` 返回普通函数
- 对返回的函数用 `call(person2)` 绑定 `this` 为 `person2`
- 输出：`person2`

**8. `person1.foo4()()`**

- `foo4()` 返回箭头函数
- 箭头函数继承 `foo4` 的 `this`（即 `person1`）
- 输出：`person1`

**9. `person1.foo4.call(person2)()`**

- `foo4.call(person2)` 将 `foo4` 的 `this` 绑定为 `person2`
- 返回的箭头函数继承 `foo4` 调用时的 `this`（即 `person2`）
- 输出：`person2`

**10. `person1.foo4().call(person2)`**

- `person1.foo4()` 返回箭头函数
- 箭头函数的 `this` 无法被 `call` 改变，依然指向定义时的 `this`（即 `person1`）
- 输出：`person1`

**最终输出：**

```markdown
person1
person2
person1
person1
window
window
person2
person1
person2
person1
```

---

### 小小的总结……

- 普通函数有自己的 `this`，这个 `this` 的值取决于函数如何被调用（动态绑定）。但箭头函数没有自己的 `this` 值，它会捕获其所在上下文的 `this` 值作为自己的 `this` ，任何试图改变其 `this` 的操作都会失败。

- 独立调用的函数的 `this` 指向 `window`。

> 啊啊啊上课的时候学长学姐一定讲过这些东西:cry::cry::cry:对不起学长学姐我没有认真听讲😭😭😭

那么，就是这样了吧。

以上（不会结尾555）
