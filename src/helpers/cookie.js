function getCookie(cname) {
  const name = `${cname}=`
  const decodedCookie = decodeURIComponent(document.cookie)
  const ca = decodedCookie.split(';')
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i]
    while (c.charAt(0) === ' ') {
      c = c.substring(1)
    }
    if (c.indexOf(name) === 0) {
      return c.substring(name.length, c.length)
    }
  }
  return ''
}

const removeCookie = (cname) => {
  document.cookie = `${cname}=;expires=Fri, 13 Oct 2000 14:47:23 GMT;path=/`
}

const setCookie = (name, value, exDays) => {
  const d = new Date()
  let expires = ''
  let cvalue = ''
  if (exDays) {
    d.setTime(d.getTime() + (exDays * 24 * 60 * 60 * 1000))
    expires = `expires= ${d.toUTCString()}`
  }
  if (typeof (value) == 'object') { cvalue = JSON.stringify(value) } else { cvalue = value }
  const cookie = `${name}=${cvalue};${expires};path=/`
  document.cookie = cookie
}

export { getCookie, removeCookie, setCookie }
