const declination = (value) => {
  value = Math.abs(value) % 100
  const num = value % 10
  if (value > 10 && value < 20) return 'лет'
  if (num > 1 && num < 5) return 'года'
  if (num === 1) return 'год'
  return 'лет'
}

export default declination
