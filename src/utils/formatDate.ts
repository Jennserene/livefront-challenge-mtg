export const formatDate = (date: string) => {
  const d = new Date(date)
  return `${d.getUTCMonth() + 1}/${d.getUTCDate()}/${d.getUTCFullYear()}`
}