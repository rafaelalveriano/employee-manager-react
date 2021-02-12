const FormatDate = (date: string) => {
  const splitDate = date.split('-')
  const y = splitDate[0]
  const m = splitDate[1]
  const d = splitDate[2]

  return `${d}/${m}/${y}`
}

export default FormatDate
