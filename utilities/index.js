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
