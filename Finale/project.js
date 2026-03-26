// 更多
const moreBox = document.getElementById('side-more');
const sideMoreFont = document.getElementById('more-font');
const sideMoreArrow = document.getElementById('more-obj');

moreBox.addEventListener('mouseenter', () => {
  sideMoreFont.style.color = '#3E4557';
})

sideMoreArrow.addEventListener('load', () => {
  const svgDoc = sideMoreArrow.contentDocument;
  if (!svgDoc)
    return;

  moreBox.addEventListener('mouseenter', () => {
    const path = svgDoc.querySelector('path');
    if (path) {
      path.setAttribute('fill', '#3E4557');
    }
  })
})

moreBox.addEventListener('mouseleave', () => {
  sideMoreFont.style.color = '#A1A6B0';
})

sideMoreArrow.addEventListener('load', () => {
  const svgDoc = sideMoreArrow.contentDocument;
  if (!svgDoc)
    return;

  moreBox.addEventListener('mouseleave', () => {
    const path = svgDoc.querySelector('path');
    if (path) {
      path.setAttribute('fill', '#A1A6B0');
    }
  })
})


// 我的（编辑）
const sideMidBox = document.querySelector('.side-mid');
const hidenEdit = document.querySelector('.mid-edit');
const sideContentBox2 = document.querySelector('.sideContent2');

sideMidBox.addEventListener('mouseenter', () => {
  hidenEdit.style.opacity = '1';
})

sideMidBox.addEventListener('mouseleave', () => {
  hidenEdit.style.opacity = '0';
})

hidenEdit.addEventListener('load', () => {
  const svgDoc = hidenEdit.contentDocument;
  if (!svgDoc)
    return;

  hidenEdit.addEventListener('mouseenter', () => {
    const path = svgDoc.querySelector('path');
    const g = svgDoc.querySelector('g');
    if (path && g) {
      path.setAttribute('stroke', '#555964');
      g.setAttribute('stroke', '#555964');
    }
  })
})

hidenEdit.addEventListener('load', () => {
  const svgDoc = hidenEdit.contentDocument;
  if (!svgDoc)
    return;

  hidenEdit.addEventListener('mouseleave', () => {
    const path = svgDoc.querySelector('path');
    const g = svgDoc.querySelector('g');
    if (path && g) {
      path.setAttribute('stroke', '#A1A6B0');
      g.setAttribute('stroke', '#A1A6B0');
    }
  })
})

//点击事件
let sideMore = true;
const sideMoreBox = document.querySelector('.side-more');
const sideHiddenBox1 = document.querySelectorAll('.side-hidden1');

// const remainingBoxes = `
//   <div>
//     <object data="/icons/my-collection.svg" type="image/svg+xml"></object>
//     <span>我的收藏</span>
//   </div>
//   <div>
//     <object data="/icons/download-management.svg" type="image/svg+xml"></object>
//     <span>下载管理</span>
//   </div>
//   <div>
//     <object data="/icons/local-music.svg" type="image/svg+xml"></object>
//     <span>本地音乐</span>
//   </div>
//   <div>
//     <object data="/icons/my-music-cloud-drive.svg" type="image/svg+xml"></object>
//     <span>我的音乐网盘</span>
//   </div>
// `;

//隐藏
const sideContent2Divs = sideContentBox2.querySelectorAll('div');
const sideContent2Array = [...sideContent2Divs];

for (let i = 3; i <= 6; i++) {
  sideContent2Array[i].style.display = 'none';
}

sideMoreBox.addEventListener('click', () => {
  if (sideMore) {
    sideMidBox.style.height = '356px';
    sideContentBox2.style.height = '283.5px';
    sideMoreFont.textContent = '收起';
    sideMoreArrow.data = '/icons/less_up-arrow.svg';
    // sideContentBox2.insertAdjacentHTML('beforeend', remainingBoxes);
    // sideHiddenBox1.forEach(temp => {
    //   temp.style.display = 'flex';
    // })
    
    for (let i = 3; i <= 6; i++) {
      sideContent2Array[i].style.display = 'block';
    }

    // console.log(typeof sideHiddenBox1);

    sideMore = false;
  } else {
    sideMidBox.style.height = '194px';
    sideContentBox2.style.height = '121.5px';
    sideMoreFont.textContent = '更多';
    sideMoreArrow.data = '/icons/more_down-arrow.svg';
    // sideHiddenBox1.style.display = 'none';
    // sideHiddenBox1.forEach(temp => {
    //   temp.style.display = 'none';
    // })

    for (let i = 3; i <= 6; i++) {
      sideContent2Array[i].style.display = 'none';
    }

    sideMore = true;
  }
})





//歌单
const createdPlaylists = document.querySelector('.my-playlist');
const playlistSpan1 = document.querySelector('.playlist-span1');
const playlistSpan2 = document.querySelector('.playlist-span2');
const playlistObj = document.querySelector('.playlist-downarrow');

createdPlaylists.addEventListener('mouseenter', () => {
  playlistSpan1.style.color = '#3E4557';
  playlistSpan2.style.color = '#3E4557';
})

createdPlaylists.addEventListener('mouseleave', () => {
  playlistSpan1.style.color = '#797F8C';
  playlistSpan2.style.color = '#797F8C';
})

playlistObj.addEventListener('load', () => {
  const svgDoc = playlistObj.contentDocument;
  if (!svgDoc) 
    return;

  const path = svgDoc.querySelector('path');
  if (!path)
    return;

  const changeColor = (color) => {
    path.setAttribute('fill', color);
  }

  createdPlaylists.addEventListener('mouseenter', () => changeColor('#3E4557'));
  createdPlaylists.addEventListener('mouseleave', () => changeColor('#797F8C'));

})

  //点击
let playlistObjBool = true;

createdPlaylists.addEventListener('click', () => {
  if (playlistObjBool) {
    playlistObj.data = '/icons/less_up-arrow.svg';

    playlistObjBool = false;
  } else {
    playlistObj.data = '/icons/more_down-arrow.svg';

    playlistObjBool = true;
  }

  playlistObj.addEventListener('load', () => {
    const svgDoc = playlistObj.contentDocument;
    const path = svgDoc.querySelector('path');
  
    path.setAttribute('fill', '#3E4557');
  })
})
//点击图标？


//aside div元素点击效果
const asideDivsArray1 = [
  document.getElementById('aside1'),
  document.getElementById('aside2'),
  document.getElementById('aside3'),
  document.getElementById('aside4'),
  document.getElementById('aside5'),
  document.getElementById('aside6'),
  document.getElementById('aside7'),
  document.getElementById('aside8'),
  document.getElementById('aside9'),
  document.getElementById('aside10'),
  document.getElementById('aside11'),
  document.getElementById('aside12'),
];

let lastActive = null;
let lastIndex = null;

asideDivsArray1.forEach((i, index) => {
  i.addEventListener('click', () => {
    if (i === lastActive) {
      return;
    }

    const font = i.querySelector('span');
    

    const obj = i.querySelector('object');
    // const svgDoc = obj.contentDocument;

    // if (svgDoc) {
    //   const fill = svgDoc.querySelector('[fill]');
    //   const stroke = svgDoc.querySelectorAll('[stroke]');
      
    //   fill.setAttribute('fill', '#ffffff');
      
    //   stroke.forEach(j => {
    //     j.setAttribute('stroke', '#ffffff');
    //   })
    // } else {
    //   console.log('failed');
    // }

    // obj.data = '/icons/recommended-white.svg';


    if (lastActive != null && lastIndex != null) {
      const lastFont = lastActive.querySelector('span');
      const lastObj = lastActive.querySelector('object');
      lastActive.style.backgroundColor = '#F0F3F6';
      lastFont.style.color = '#525069';

      lastObj.classList.remove('object-white');
      // if (lastIndex == 0) {
      //   lastObj.data = '/icons/recommended.svg';
      // } else if (lastIndex == 1) {
      //   lastObj.data = '/icons/selected.svg';
      // } else if (lastIndex == 2) {
      //   lastObj.data = '/icons/podcast.svg';
      // } else if (lastIndex == 3) {
      //   lastObj.data = '/icons/roaming.svg';
      // } else if (lastIndex == 4) {
      //   lastObj.data = '/icons/subscribed.svg';
      // } else if (lastIndex == 5) {
      //   lastObj.data = '/icons/my-favorite.svg';
      // } else if (lastIndex == 6) {
      //   lastObj.data = '/icons/recently.svg';
      // } else if (lastIndex == 7) {
      //   lastObj.data = '/icons/my-podcast.svg';
      // } else if (lastIndex == 8) {
      //   lastObj.data = '/icons/my-collection.svg';
      // } else if (lastIndex == 9) {
      //   lastObj.data = '/icons/download-management.svg';
      // } else if (lastIndex == 10) {
      //   lastObj.data = '/icons/local-music.svg';
      // } else if (lastIndex == 11) {
      //   lastObj.data = '/icons/my-music-cloud-drive.svg';
      // }
    }
    

    // i.style.backgroundColor = '#E84E51';
    i.style.setProperty('background-color', '#e84f50', 'important');
    font.style.color = '#ffffff';

    obj.classList.add('object-white');
    // if (index == 0) {
    //   obj.data = '/icons/recommended-white.svg';
    // } else if (index == 1) {
    //   obj.data = '/icons/selected-white.svg';
    // } else if (index == 2) {
    //   obj.data = '/icons/podcast.svg';
    // } else if (index == 3) {
    //   obj.data = '/icons/roaming.svg';
    // } else if (index == 4) {
    //   obj.data = '/icons/subscribed.svg';
    // } else if (index == 5) {
    //   obj.data = '/icons/my-favorite.svg';
    // } else if (index == 6) {
    //   obj.data = '/icons/recently.svg';
    // } else if (index == 7) {
    //   obj.data = '/icons/my-podcast.svg';
    // } else if (index == 8) {
    //   obj.data = '/icons/my-collection.svg';
    // } else if (index == 9) {
    //   obj.data = '/icons/download-management.svg';
    // } else if (index == 10) {
    //   obj.data = '/icons/local-music.svg';
    // } else if (index == 11) {
    //   obj.data = '/icons/my-music-cloud-drive.svg';
    // }
    

    // if (lastActive != null) {
    //   i.classList.add('active');
    // }

    lastActive = i;
    lastIndex = index;
  })

})

// asideDivsArray1[0].addEventListener('click', () => {
//   const obj = asideDivsArray1[0].querySelector('object');

//   obj.data = '/icons/recommended-white.svg';

//   if (lastActive != asideDivsArray1[0]) {
//     obj.data = '/icons/recommended.svg';
//   }
// })

//登录
let isLoggedIn = false;

const avatar = document.querySelector('.avatar-box');
const myName = document.querySelector('.my-name');
const topMore = document.querySelector('.top-more');
const topMoreSvg = document.querySelector('.more-down-arrow-top');
const login = document.querySelector('.login');
const loginClose = document.querySelector('.close-box');

myName.addEventListener('mouseenter', () => {
  myName.style.color = '#2A3246';
  
  const svgDoc = topMoreSvg.contentDocument;
  const path = svgDoc.querySelector('path');

  path.setAttribute('fill', '#2A3246');
})

myName.addEventListener('mouseleave', () => {
  myName.style.color = '#858B98';
  
  const svgDoc = topMoreSvg.contentDocument;
  const path = svgDoc.querySelector('path');

  path.setAttribute('fill', '#7C828F');
})

topMoreSvg.addEventListener('load', () => {
  const svgDoc = topMoreSvg.contentDocument;

  const changeColor = color => {
    const path = svgDoc.querySelector('path');

    path.setAttribute('fill', color);
  }

  topMore.addEventListener('mouseenter', () => changeColor('#2A3246'));
  topMore.addEventListener('mouseleave', () => changeColor('#7C828F'));
})

let loginInterface = false;

[avatar, myName, topMore].forEach(i => {
  i.addEventListener('click', () => {
    if (loginInterface) {
      return;
    }

    if (!isLoggedIn) {
      login.style.display = 'block';
      loginInterface = true;

      if (QRcodeInterface) {
        loadQRCode();
      }
      
    }
  })
})

loginClose.addEventListener('click', () => {
  login.style.display = 'none';
  loginInterface = false;
  //恢复登录界面
  document.querySelector('.confirm-login').style.display = 'none';
  document.querySelector('.QR-code').style.display = 'flex';
  document.querySelector('.other-login-methods').style.margin = '72px 0 0 0';
  document.querySelector('.scan-code-span2').style.display = 'block';
  //停止获取二维码
  if (pollTimer) {
    clearInterval(pollTimer);
    pollTimer = null;
  }

  currentKey = '';
  document.getElementById('QRimg').src = '';
})

//手机号登录
//切换
const otherLoginMethod = document.querySelector('.other-login-methods');
const phoneNumberLoginInterface = document.querySelector('.phone-number');
const scanCodeInterface = document.querySelector('.scan-code');
const switchToQRcodeLogin = document.querySelector('.to-scan-QRcode');
let QRcodeInterface = true;

otherLoginMethod.addEventListener('click', () => {
  scanCodeInterface.style.display = 'none';
  phoneNumberLoginInterface.style.display = 'flex';
  QRcodeInterface = false;
})

switchToQRcodeLogin.addEventListener('click', () => {
  scanCodeInterface.style.display = 'flex';
  phoneNumberLoginInterface.style.display = 'none';
  QRcodeInterface = true;
})

//手机号登录界面
//清空
const clearPhoneNumberButton = document.querySelector('.clear-phone-number-box');
const clearPhoneNumberObj = document.querySelector('.clear-phone-number-obj');
const enterPhoneNumberInput = document.querySelector('.please-enter-your-phone-number');

clearPhoneNumberButton.addEventListener('click', () => {
  enterPhoneNumberInput.value = '';
  enterPhoneNumberInput.focus();
  document.querySelector('.automatic-login-label').style.display = 'inline-flex';
  document.querySelector('.enter-valid-number').style.display = 'none';
})

clearPhoneNumberObj.addEventListener('load', () => {
  const changeColor = color => {
    const svgDoc = clearPhoneNumberObj.contentDocument;
    const circle = svgDoc.querySelectorAll('circle');

    circle[1].setAttribute('fill', color);
  }

  clearPhoneNumberButton.addEventListener('mouseenter', () => changeColor('#686D79'));
  clearPhoneNumberButton.addEventListener('mouseleave', () => changeColor('#A6A9B1'));
})

clearPhoneNumberButton.style.display = 'none';
clearPhoneNumberObj.style.display = 'none';

function updateClearButtonVisibility() {
  if (enterPhoneNumberInput.value !== '') {
    clearPhoneNumberButton.style.display = 'block';
    clearPhoneNumberObj.style.display = 'block';
  } else {
    clearPhoneNumberButton.style.display = 'none';
    clearPhoneNumberObj.style.display = 'none';
  }
}

// enterPhoneNumberInput.addEventListener('focus', () => {
//   if (enterPhoneNumberInput.value != '') {
//     clearPhoneNumberButton.style.display = 'block';
//     clearPhoneNumberObj.style.display = 'block';
//   } else {
//     clearPhoneNumberButton.style.display = 'none';
//     clearPhoneNumberObj.style.display = 'none';
//   }
// })

enterPhoneNumberInput.addEventListener('focus', updateClearButtonVisibility);
enterPhoneNumberInput.addEventListener('input', updateClearButtonVisibility);

// enterPhoneNumberInput.addEventListener('blur', () => {
//   clearPhoneNumberButton.style.display = 'none';
//   clearPhoneNumberObj.style.display = 'none';
// });

//检查手机号
function isValidPhone(phoneNumber) {
  return /^1\d{10}$/.test(phoneNumber);
}

//填写验证码界面
//清空
const clearVerificationCodeButton = document.querySelector('.clear-verification-code-box');
const clearVerificationCoderObj = document.querySelector('.clear-verification-code-obj');
const enterVerificationCodeInput = document.querySelector('.please-enter-verification-code');

clearVerificationCodeButton.addEventListener('click', () => {
  enterVerificationCodeInput.value = '';
  enterVerificationCodeInput.focus();
})

clearVerificationCoderObj.addEventListener('load', () => {
  const changeColor = color => {
    const svgDoc = clearVerificationCoderObj.contentDocument;
    const circle = svgDoc.querySelectorAll('circle');

    circle[1].setAttribute('fill', color);
  }

  clearVerificationCodeButton.addEventListener('mouseenter', () => changeColor('#686D79'));
  clearVerificationCodeButton.addEventListener('mouseleave', () => changeColor('#A6A9B1'));
})

clearVerificationCodeButton.style.display = 'none';
clearVerificationCoderObj.style.display = 'none';

function updateClearButtonVisibilityVerificationCode() {
  if (enterVerificationCodeInput.value !== '') {
    clearVerificationCodeButton.style.display = 'block';
    clearVerificationCoderObj.style.display = 'block';
    document.querySelector('.hr-verification-code').style.margin = '0 0 0 14px';
  } else {
    clearVerificationCodeButton.style.display = 'none';
    clearVerificationCoderObj.style.display = 'none';
    document.querySelector('.hr-verification-code').style.margin = '0 0 0 48px';
  }
}

document.querySelector('.hr-verification-code').style.margin = '0 0 0 48px';

enterVerificationCodeInput.addEventListener('focus', updateClearButtonVisibilityVerificationCode);
enterVerificationCodeInput.addEventListener('input', updateClearButtonVisibilityVerificationCode);






//验证码登录按钮变量
const confirmVerificationCode = document.querySelector('.confirm-verification-code');
let phoneNum = null;
let timer = null;
let verifyCodeInterface = false;

confirmVerificationCode.addEventListener('click', () => {
  const phoneNumberInput = enterPhoneNumberInput.value.trim();
  phoneNum = phoneNumberInput;
  if (!isValidPhone(phoneNumberInput)) {
    document.querySelector('.automatic-login-label').style.display = 'none';
    document.querySelector('.enter-valid-number').style.display = 'block';
    // console.log('请输入11位数字的手机号');
  } else {
    document.querySelector('.automatic-login-label').style.display = 'inline-flex';
    document.querySelector('.enter-valid-number').style.display = 'none';

    //填写验证码界面
    if (document.querySelector('.accepted-hidden').checked) {
      document.querySelector('.enter-phone-number').style.display = 'none';
      document.querySelector('.enter-verification-code').style.display = 'flex';
      document.querySelector('.automatic-login-label').style.display = 'none';
      document.querySelector('.have-sended-verification-code').style.display = 'block';
      
      //更改按钮
      confirmVerificationCode.style.display = 'none';
      document.querySelector('.verify-verification-code').style.display = 'flex';

      document.querySelector('.accepted-hidden').disabled = true;

      //发送验证码，并且实时更新画面
      sendVerificationCode(phoneNumberInput);
      verifyCodeInterface = true;

      let seconds = 60;

      timer = setInterval(() => {
        if (seconds <= 1) {
          clearInterval(timer);
          // document.querySelector('.countdown-recend').textContent = '重新获取';
          document.querySelector('.recend-verification-code').style.display = 'block';
          document.querySelector('.please-enter-verification-code').style.width = '154px';
          document.querySelector('.countdown-recend').style.display = 'none';
          document.querySelector('.clear-verification-code-box').style.left = '229px';
        } else {
          seconds--;
          document.querySelector('.countdown-recend').textContent = seconds;
        }
      }, 1000)

    } else {
      console.log('先勾选');
      alert('先勾选');
    }
    


  }
})


//重新获取验证码
document.querySelector('.recend-verification-code').addEventListener('click', () => {
  sendVerificationCode(phoneNum);
  document.querySelector('.recend-verification-code').style.display = 'none';
  document.querySelector('.please-enter-verification-code').style.width = '184px';
  document.querySelector('.countdown-recend').style.display = 'block';
  document.querySelector('.clear-verification-code-box').style.left = '259px';

  let seconds = 60;
  document.querySelector('.countdown-recend').textContent = seconds;

  timer = setInterval(() => {
    if (seconds <= 1) {
      clearInterval(timer);
      // document.querySelector('.countdown-recend').textContent = '重新获取';
      document.querySelector('.recend-verification-code').style.display = 'block';
      document.querySelector('.please-enter-verification-code').style.width = '154px';
      document.querySelector('.countdown-recend').style.display = 'none';
      document.querySelector('.clear-verification-code-box').style.left = '229px';
    } else {
      seconds--;
      document.querySelector('.countdown-recend').textContent = seconds;
    }
  }, 1000)
})

//获取验证码后手机号登录
document.querySelector('.verify-verification-code').addEventListener('click', async () => {
  const verificationCode = document.querySelector('.please-enter-verification-code').value.trim();
  const isValid = await verifyVerificationCode(phoneNum, verificationCode);

   if (isValid) {
    console.log('验证成功');
    login.style.display = 'none';
    isLoggedIn = true;
    loginInterface = false;
    updateUserInformation();
    updatePlaylistCount();
    updateLikelist();

  } else {
    console.log('验证码错误');
  }
  
})

//关闭
document.getElementById('phone-number-close').addEventListener('click', () => {
  login.style.display = 'none';
  loginInterface = false;
})







//登录操作
// const baseURL = 'http://localhost:3000';
const baseURL = '/api';

//用户信息变量
let userData = null;
let userProfile = null;
let userAccount = null;

const cookie = '0064DB69EC17D97CF650E216BFD83CCA1E6E0E2C510A76AC701834246FDAF9BBEFFF8D3CE6CA0502A4D96130BD5D67F0E331614817D543BB38AD96094A623C183DCEAB4928E65C2E43C02CFDC5271976DC35D3BB4A8E44BA6AD9E5F033221778245186FA7222EBCCE42BD65F6C1EB77B82BB659801B3C244DE4D7F13A45E40F4DA5FD5674DA8658DCC5DDA3E947BED45257FF9D13F65EF4034DD6C296733AA3BDEF8890151E4F35804310903C75EF4241677B9750DB6E8794C7AD07C28C09F3EBFEF8C8BF5911BDF4010DA9EACADA963C067A28F9F18838987B1C3A8AD173330DFE67529447D11297D8853D2C6817C5E6905B3318E8F1366B4F41C6D78F3C2B8989DE4FA5E7FDCF254F9872D960AC4655C372B37A5E2DBC7DC84F68EAB6111E9EFFC6CAC09E21CB1246618C28602C6163AF91BAE69E1837D89C26ED309226B1E005889BB09928A96F3F03E87B321661A3B68F343D6AB8E2608A983888E0406578C0D61270B62FCB2FE43F2FB750D1B84CB6EC5D52CDD501CB7DBE7BEF5DD63D47F47568D72FCE40EAED874466E189C3ECC';

//二维码登录
let pollTimer = null;
let currentKey = '';

async function loadQRCode() {
  if (pollTimer) {
    clearInterval(pollTimer);
    pollTimer = null;
  }

  document.getElementById('QRimg').src = '';

  try {
    const keyRes = await fetch(`${baseURL}/login/qr/key?timestamp=${Date.now()}`);
    const keyData = await keyRes.json();
    if (keyData.code !== 200) {
      throw new Error('获取key失败');
    }
    currentKey = keyData.data.unikey;

    const qrRes = await fetch(`${baseURL}/login/qr/create?key=${currentKey}&qrimg=1&timestamp=${Date.now()}`);
    const qrData = await qrRes.json();
    if (qrData.code !== 200) {
      throw new Error('生成二维码失败');
    }

    document.getElementById('QRimg').src = qrData.data.qrimg;

    startPolling(currentKey);
  } catch (err) {
    console.error(err);
  }
}

function startPolling(key) {
  if (pollTimer) {
    clearInterval(pollTimer);
  }
  pollTimer = setInterval(async () => {
    try {
      const checkRes = await fetch(`${baseURL}/login/qr/check?key=${key}&timestamp=${Date.now()}`);
      const checkData = await checkRes.json();
      const code = checkData.code;

      switch (code) {
        case 801: //等待扫码

          break;
        case 802: //待确认
          document.querySelector('.scan-code-span2').style.display = 'none';
          document.querySelector('.confirm-login').style.display = 'flex';
          document.querySelector('.other-login-methods').style.margin = '356px 0 0 0';
          document.querySelector('.QR-code').style.display = 'none';
          break;
        case 803: //登录成功
          document.querySelector('.scan-code-span2').style.display = 'block';
          document.querySelector('.confirm-login').style.display = 'none';
          document.querySelector('.other-login-methods').style.margin = '72px 0 0 0';
          document.querySelector('.QR-code').style.display = 'flex';
          isLoggedIn = true;

          //关闭
          login.style.display = 'none';
          loginInterface = false;
          if (pollTimer) {
            clearInterval(pollTimer);
            pollTimer = null;
          }
          currentKey = '';
          document.getElementById('QRimg').src = '';

          //更新用户信息
          updateUserInformation();

          // 获取用户信息并更新全局变量和界面
          updatePlaylistCount();

          // 加载登录后需要的数据（如每日推荐、歌单等）
          updateLikelist();
          
          break;
        case 800: //二维码过期
          document.querySelector('.refresh-QRcode').style.display = 'flex';
          break;
        default:
          console.log('未知状态', code);
      }
    } catch (err) {
      console.error('轮询出错', err);
    }
  }, 2000);
}

//重新获取二维码
const reobtainQRcode = document.querySelector('.re-obtain-QRcode');
reobtainQRcode.addEventListener('click', () => {
  document.querySelector('.refresh-QRcode').style.display = 'none';
  document.getElementById('QRimg').src = '';
  loadQRCode();
})

//获取登录信息(所有登录操作)
async function checkLoginStatus() {
  try {
    const response = await fetch(`${baseURL}/login/status?cookie=${cookie}&_t=${Date.now()}`, {
      credentials: 'include'
    });
    const data = await response.json();

    if (data.data && data.data.code === 200) {
      console.log('用户已登录', data.data.account);
      return data.data.account;
    } else {
      console.log('未登录');
      console.log(data.code);
    }
  } catch (err) {
    console.error('请求失败', err);
  }
  return null;
}

//用户详情
async function detailedInformation(uid) {
  try {
    const response = await fetch(`${baseURL}/user/detail?uid=${uid}&cookie=${cookie}&_t=${Date.now()}`, {
      credentials: 'include'
    });
    const data = await response.json();

    if (data.code === 200) {
      console.log('获取详细信息成功', data);
      return data.profile;
    } else {
      console.log('获取详细信息失败', data.code);
    }
  } catch (err) {
    console.error('获取详细信息失败', err);
  }
  return null;
}

//账号信息 profile
async function accountInformation() {
  try {
    const response = await fetch(`${baseURL}/user/account?_t=${Date.now()}`, {
      credentials: 'include'
    });
    const data = await response.json();

    if (data.code) {
      console.log('获取账号信息成功');
      return data.profile;
    } else {
      console.log('获取账号信息失败', data.code);
    }
  } catch (err) {
    console.error('获取账号信息失败', err);
  }
  return null;
}

//用户信息（歌单）
async function userInformation() {
  try {
    const response = await fetch(`${baseURL}/user/subcount?_t=${Date.now()}`, {
      credentials: 'include'
    });
    const data = await response.json();

    if (data.code) {
      console.log('获取用户信息成功');
      return data;
    } else {
      console.log('获取用户信息失败', data.code);
    }
  } catch (err) {
    console.error('获取用户信息失败', err);
  }
  return null;
}

//显示用户信息
async function updateUserInformation() {
  try {
    userData = await checkLoginStatus();
    if (userData) {
      // const uid = userData.id;
      // const profile = await detailedInformation(uid);
      // const profile = await userInformation();
      const profile = await accountInformation();
      
      if (profile) {
        userProfile = profile;
        console.log('用户信息', profile);

        //更改昵称
        myName.textContent = profile.nickname;

        //更改头像
        document.getElementById('default-avatar').style.display = 'none';
        document.querySelector('.avatar-img').style.display = 'block';
        document.querySelector('.avatar-img').src = profile.avatarUrl;
      }
    }
  } catch (err) {
    console.error('更新信息失败', err);
  }
}

//更新歌单数
async function updatePlaylistCount() {
  const information = await userInformation();
  const playlistNum = information.createdPlaylistCount;
  document.querySelector('.playlist-span2').textContent = playlistNum;
}


//手机号登录


//发送验证码
async function sendVerificationCode(phoneNumber) {
  try {
    const response = await fetch(`${baseURL}/captcha/sent?phone=${phoneNumber}&_t=${Date.now()}`);
    const data = await response.json();
    
    if (data.code !== 200) {
      console.log('验证码发送失败', data.message);
    }
  } catch (err) {
    console.error('验证码发送失败', err);
  }
}

//验证验证码
async function verifyVerificationCode(phoneNumber, verificationCode) {
  try {
    const response = await fetch(`${baseURL}/captcha/verify?phone=${phoneNumber}&captcha=${verificationCode}`);
    const data = await response.json();

    if (data.code === 200) {
      return true;
    } else {
      console.log(data.message);
      return false;
    }
  } catch (err) {
    console.error('验证验证码错误', err);
  }
}


//主界面

//
// document.querySelector('.recommended-carousel-img').style.display = 'none';
// document.querySelector('.recommended-playlist-top').style.display = 'none';
// document.querySelector('.recommended-playlist').style.display = 'none';
// document.querySelector('.selected-activities-top').style.display = 'none';
// document.querySelector('.selected-activities').style.display = 'none';
//


//更换界面效果
let preInterface = null;
let nextInterface = document.querySelector('.recommended-interface');

// function mapInterface(i) {
//   if (i === 1) {
//     return document.querySelector('.recommended-interface');
//   } else if (i === 2) {

//   } else if (i === 3) {
    
//   } else if (i === 4) {
    
//   } else if (i === 5) {
    
//   } else if (i === 6) {
//     return document.querySelector('.my-favorite-music-main-content');
//   } else if (i === 7) {
    
//   } else if (i === 8) {
    
//   } else if (i === 9) {
    
//   } else if (i === 10) {
    
//   } else if (i === 11) {
    
//   } else if (i === 12) {
    
//   }
// }

function changeInterface(lastPage, nextPage) {
  
}

document.getElementById('aside1').addEventListener('click', () => {
  document.querySelector('.recommended-carousel-img').style.display = 'flex';
  document.querySelector('.recommended-playlist-top').style.display = 'flex';
  document.querySelector('.recommended-playlist').style.display = 'flex';
  document.querySelector('.selected-activities-top').style.display = 'flex';
  document.querySelector('.selected-activities').style.display = 'flex';

  document.querySelector('.my-favorite-music-main-content').style.display = 'none';
})

document.getElementById('aside6').addEventListener('click', () => {
  document.querySelector('.recommended-carousel-img').style.display = 'none';
  document.querySelector('.recommended-playlist-top').style.display = 'none';
  document.querySelector('.recommended-playlist').style.display = 'none';
  document.querySelector('.selected-activities-top').style.display = 'none';
  document.querySelector('.selected-activities').style.display = 'none';

  document.querySelector('.my-favorite-music-main-content').style.display = 'flex';
})



//获取 我喜欢的音乐
async function getLikelist(uid) {
  try {
    const response = await fetch(`${baseURL}/likelist?uid=${uid}`);
    const data = await response.json();

    if (data.code === 200) {
      console.log('获取 我喜欢的音乐 成功');
      
      const likelistArray = data.ids;
      return likelistArray;
    }
  } catch (err) {
    console.error('获取 我喜欢的音乐 失败', err);
    return null;
  }
}

//更新 我喜欢的音乐 界面
document.getElementById('my-favorite-music-real-content-rown').style.display = 'none';

async function updateLikelist() {
  try {
    const uidData = await checkLoginStatus();
    const uid = uidData.id;

    const likelist = await getLikelist(uid);

    const mainContent = document.querySelector('.my-favorite-music-real-content');
    const exampleDiv = document.getElementById('my-favorite-music-real-content-rown');
    
    let index = 0;
    for (const i of likelist) {
      const div = exampleDiv.cloneNode(true);
      const newId = index + 1;

      div.style.display = 'flex';
      div.id = `my-favorite-music-real-content-row${newId}`;

      //更改span
      const span = div.querySelectorAll('span');

      //序号
      const num = String(index + 1).padStart(2, '0');
      span[0].textContent = num;

      //歌曲名
      const songData = await getSongInformation(i);

      const songName = songData.name;
      span[1].textContent = songName;

      //艺术家
      const artist = songData.ar[0].name;
      span[2].textContent = artist;

      //专辑封面
      const picture = songData.al.picUrl;
      div.querySelector('.favorite-img').src = picture;

      //专辑文字
      const albumName = songData.al.name;
      span[3].textContent = albumName;

      //时长
      const length = songData.dt;
      const minutes = Math.floor(length / 60000);
      const seconds = (Math.floor(length / 1000)) % 60;
      const transformedS = String(seconds).padStart(2, '0');
      span[4].textContent = `${minutes}:${transformedS}`;
      
      mainContent.appendChild(div);
      index++;

      //播放
      div.addEventListener('click', async () => {
        playSong(i);
      })
    }
    //更新歌曲数
    const songCounts = index;
    document.querySelector('.my-favorite-music-options-songs-num').textContent = songCounts;
  } catch (err) {
    console.error('更新 我喜欢的音乐 失败', err);
  }
}

//获取歌曲URL
async function getSongURL(id) {
  try {
    const response = await fetch(`${baseURL}/song/url/v1?id=${id}&level=exhigh`);
    const data = await response.json();

    if (data.code === 200) {
      console.log('获取音乐成功');

      const songURL = data.data[0].url;
      return songURL;
    } else {
      console.log('获取音乐失败', data.code);
    }
  } catch (err) {
    console.error('获取音乐失败', err);
  }
}

//获取歌曲信息
async function getSongInformation(id) {
  try {
    const response = await fetch(`${baseURL}/song/detail?ids=${id}`);
    const data = await response.json();

    if (data.code === 200) {
      const songData = data.songs[0];
      
      return songData;
    } else {
      console.log('获取歌曲信息失败', data.code);
    }
    
  } catch (err) {
    console.error('获取歌曲信息失败', err);
  }
}


//播放歌曲
const playBar = document.querySelector('.play');
let isFirstPlay = true;
let isPlaying = false;

playBar.style.display = 'none';
document.getElementById('playButton').style.display = 'none';

//播放
const audio = document.getElementById('songAudio');

async function playSong(id) {
  try {
    if (isPlaying) {
      audio.pause();
      audio.src = '';
    }

    const songURL = await getSongURL(id);

    console.log('歌曲URL:', songURL);

    if (isFirstPlay) {
      playBar.style.display = 'flex';
      isFirstPlay = false;
    }

    isPlaying = true;
    audio.src = songURL;
    audio.play()
      .catch(err => {console.error('播放失败', err)});
    
    document.getElementById('playButton').style.display = 'block';
    document.getElementById('pauseButton').style.display = 'none';

    //更改数据
    const title = document.getElementById('play-title');
    const artist = document.getElementById('play-artist');
    const img = document.getElementById('play-img');

    const songInformation = await getSongInformation(id);
    const songName = songInformation.name;
    const songArtist = songInformation.ar[0].name;
    const songImg = songInformation.al.picUrl;

    title.textContent = songName;
    artist.textContent = songArtist;
    img.src = songImg;
  } catch (err) {
    console.error('播放失败', err);
  }
}


//播放按钮
const playButton = document.querySelector('.play-button-box');

playButton.addEventListener('mouseenter', () => {
  document.querySelector('.play-button').style.filter = 'brightness(0.85)';
})

playButton.addEventListener('mouseleave', () => {
  document.querySelector('.play-button').style.filter = 'brightness(1)';
})

playButton.addEventListener('click', () => {
  if (isPlaying) {
    document.getElementById('playButton').style.display = 'none';
    document.getElementById('pauseButton').style.display = 'block';
    audio.pause();
    isPlaying = false;
  } else {
    document.getElementById('playButton').style.display = 'block';
    document.getElementById('pauseButton').style.display = 'none';
    audio.play();
    isPlaying = true;
  }
})





//轮播图
async function bannerData() {
  try {
    const response = await fetch(`${baseURL}/banner`);
    const data = await response.json();

    if (data.code === 200) {
      console.log('导入轮播图成功');
      return data.banners;
    } else {
      console.log('导入轮播图出错', data.code);
    }
  } catch (err) {
    console.error('导入轮播图出错', err);
  }
}

async function updateBanner() {
  try {
    const bannerTrack = document.querySelector('.selected-activities-track');
    const bannerArray = bannerTrack.querySelectorAll('img');
    const bannerImgArray = await bannerData();

    let i = 0;

    bannerArray[i].src = bannerImgArray[i].bigImageUrl;
    bannerArray[i + 1].src = bannerImgArray[i + 1].bigImageUrl;
    bannerArray[i + 2].src = bannerImgArray[i + 2].bigImageUrl;
    bannerArray[i + 3].src = bannerImgArray[i + 3].bigImageUrl;
    bannerArray[i + 4].src = bannerImgArray[i + 4].bigImageUrl;
    bannerArray[i + 5].src = bannerImgArray[i + 5].bigImageUrl;
  } catch (err) {
    console.error('更新轮播图出错', err);
  }
}

updateBanner();

//轮播效果
async function switchImg() {
  try {
    const bannerTrack = document.querySelector('.selected-activities-track');
    const bannerArray = bannerTrack.querySelectorAll('div');
    const bannerImgArray = bannerTrack.querySelectorAll('img');
    const bannerImgDataArray = await bannerData();
    const bannerImgDataArrayNum = bannerImgDataArray.length;
    let turns = 1;

    const switchTimer = setInterval(() => {
      bannerArray.forEach((i, index) => {
        i.classList.add('moved');
      })
    }, 2000)

    const removeTimer =  setInterval(() => {
      bannerArray.forEach((i, index) => {
        bannerImgArray.forEach((j, ind) => {
          j.src = bannerImgDataArray[(ind + turns * 3) % bannerImgDataArrayNum].bigImageUrl;
        });
        i.classList.remove('moved');
        // console.log(turns);
      });
      turns++;
    }, 6000);
  } catch (err) {
    console.error('轮播出错', err);
  }
}

switchImg();
