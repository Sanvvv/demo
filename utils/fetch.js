import { dataSource, columns, filterData } from './mock'

const total = dataSource.length

export function initTable() {
  return Promise.resolve({ columns })
}

export function fetchTable(page) {
  const limit = (page - 1) * 10
  return new Promise(resolve => setTimeout(() => resolve({
    lists: dataSource.slice(limit, limit + 10),
    total
  }), 1000))
}

export function fetchFilter() {
  return new Promise(resolve => setTimeout(() => resolve({
    filterData
  }), 1000))
}