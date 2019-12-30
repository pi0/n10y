function n10y(str) {
  if (typeof str !== 'string' || str.length < 3) {
    return str
  }
  return str[0] + (str.length - 2) + str[str.length - 1]
}

module.exports = n10y
