export const calcStatus = (status, improve) => {
  status += improve

  if (status > 100) {
    return 100
  } else if (status < 0) {
    return 0
  } else {
    return status
  }
}

export const getRndInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min
}
