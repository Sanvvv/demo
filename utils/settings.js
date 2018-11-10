export const workTypeMap = {
  translation: '字',
  tagging: '条'
}

export const countWorks = selectedRows => {
  return selectedRows.reduce((acc, cur) => {
    acc[cur.works.type] += cur.works.count
    return acc
  }, { translation: 0, tagging: 0 })
}