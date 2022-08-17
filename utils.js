
const options = { month: "long", day: "numeric", year: "numeric" };
const locale = Intl.DateTimeFormat().resolvedOptions().locale;

export function formatDate(date) {
  return new Intl.DateTimeFormat(locale, options).format(new Date(date));
}

export function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
}

export function isAndroid() {
  return /Android/i.test(navigator.userAgent)
}

export function isIos() {
  return /iPad|iPhone|iPod/i.test(navigator.userAgent)
}

export function isBrowser() {
  return typeof window !== 'undefined'
}

export function deleteAuth() {
  localStorage.removeItem('auth-creds')
}

export function storeAccessToken({ token, email }) {
  localStorage.setItem('auth-creds', JSON.stringify({ token, email }));
}

export function getAccessToken() {
  try {
    return JSON.parse(localStorage.getItem('auth-creds'))
  } catch(e) {
    return null;
  }
}

export function isValidHttpUrl(string) {
  let url;

  try {
    url = new URL(string);
  } catch (_) {
    return false;
  }

  return url.protocol === "http:" || url.protocol === "https:";
}

export function uploadS3(url, file, progressCallback) {
  return new Promise(function (resolve, reject) {

    const xhr = new XMLHttpRequest();

    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          resolve(xhr)
        }
        else {
          reject(xhr)
        }
      }
    };

    if (progressCallback) {
      xhr.upload.onprogress = (e) => {
        if (e.lengthComputable) {
          var percentComplete = (e.loaded / file.size) * 100;
          progressCallback(percentComplete);
        }
      };
    }

    xhr.open("PUT", url);
    xhr.send(file);
  });
}
