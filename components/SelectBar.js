import React from 'react'
import { Tag } from 'antd'
import { countWorks } from '../utils/settings'

const SelectBar = ({ selectedRowKeys, selectedRowMap, onTagClose }) => {
  const selectedRows = selectedRowKeys.map(key => selectedRowMap[key])

  const { translation, tagging } = countWorks(selectedRows)
  const SelectedRow = selectedRows.map(row => (
    <Tag key={row.id} closable onClose={() => onTagClose(row.id)}>{`${row.id} - ${row.name}`}</Tag>
  ))

  return (
    <div>
      <div className="work-count">
        {`选中项目的总工作量为 ${translation} 字，${tagging} 条`}
      </div>
      <div className="work-selected">
        已选中的项目：
        <span>{SelectedRow}</span>
      </div>
    </div>
  )
}


export default SelectBar