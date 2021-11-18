import React from 'react'

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
