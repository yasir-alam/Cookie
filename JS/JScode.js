//In the substring() method, the second parameter specifies the length of the extracted substring, not the end position. For example, str.substring(0, 5) will extract the first 5 characters of the string.

function setCookie(cookieName, cookieVal, cookieExpiry) {
  let timeStamp = new Date();
  timeStamp.setTime(timeStamp.getTime() + cookieExpiry * 24 * 60 * 60 * 1000);
  let expiryDate = timeStamp.toUTCString();
  document.cookie = `${cookieName}=${cookieVal}; expires=${expiryDate} ;path=/`;
}

function getCookie(cookieName) {
  let cName = cookieName + "=";
  let cookies = document.cookie.split(";");
  // ['user1=Yasir', ' user2=Alam']

  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.indexOf(" ") === 0) {
      cookie = cookie.substring(1);
    }

    if (cookie.indexOf(cName) === 0) {
      return cookie.substring(cName.length);
    }
  }
  return "";
}

function checkCookie() {
  let cookieName = prompt(`Enter cookie name: `);
  let cName = getCookie(cookieName);
  if (cName != "") {
    alert(`Welcome back ${cName}!`);
  } else {
    let cNameVal = prompt(
      `The cookie is not available. Enter a user name to create it and check again: `
    );
    if (cNameVal != "" && cNameVal != null) {
      setCookie(cookieName, cNameVal, 2);
    }
  }
}
