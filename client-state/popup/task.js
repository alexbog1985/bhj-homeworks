const modal = document.querySelector('#subscribe-modal')
const closeBtn = document.querySelector('.modal__close')

function getCookie(name) {
  let matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ))
  return matches ? decodeURIComponent(matches[1]) : undefined
}

function setCookie(name, value, props) {
  props = props || {}
  let exp = props.expires
  if (typeof exp == "number" && exp) {
    let d = new Date()
    d.setTime(d.getTime() + exp*1000)
    exp = props.expires = d
  }

  if(exp && exp.toUTCString) { props.expires = exp.toUTCString() }
  value = encodeURIComponent(value)
  let updatedCookie = name + "=" + value;
  for(let propName in props){
    updatedCookie += "; " + propName
    let propValue = props[propName]
    if(propValue !== true){ updatedCookie += "=" + propValue }
  }
  document.cookie = updatedCookie
}

// function deleteCookie(name) {
//   setCookie(name, null, { expires: -1 })
// }


function eventHandlers() {
  closeBtn.addEventListener('click', closeModal);
}

function closeModal() {
  modal.classList.remove('modal_active');
  setCookie('closeModal', 'true', { expires: 365 * 24 * 60 * 60 })
}

function showModal() {
  if (getCookie('closeModal') !== 'true') {
    modal.classList.add('modal_active');
  }
}

getCookie('closeModal')

document.addEventListener('DOMContentLoaded', () => {
  showModal();
  eventHandlers();
});