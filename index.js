import React from 'react'
import ReactDOM from 'react-dom'
import { LocaleProvider, Table, Button, Pagination, Icon } from 'antd'
import zhCN from 'antd/lib/locale-provider/zh_CN'
import moment from 'moment'
import 'moment/locale/zh-cn'

import './index.css'
import { initTable, fetchTable, fetchFilter } from './utils/fetch'
import { workTypeMap } from './utils/settings'
import TopbarMenu from './components/TopbarMenu'
import FilterForm from './components/FilterForm'
import SelectBar from './components/SelectBar'
import SamplingForm from './components/SamplingForm'

moment.locale('zh-cn')

function resolveDataSource(lists) {
  lists.forEach(list => {
    const { type, count } = list.works
    list.key = list.id
    list.workload = `翻译类型：${type} 数量：${count}${workTypeMap[type]}`
  })
  return lists
}

function itemRender(current, type, originalElement) {
  if (type === 'prev') {
    return <Button size="small"><Icon type="left"/>上一页</Button>;
  } if (type === 'next') {
    return <Button size="small">下一页<Icon type="right"/></Button>;
  }
  return originalElement;
}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      topbarSelected: 'postQA',
      pagerTotal: 0,
      dataSource: [],
      columns: [],
      page: 1,
      filterData: {},
      filterValue: {},
      tableLoading: false,
      selectedRowKeys: [],
      selectedRowMap: {},
      filterLoading: true
    }
  }

  componentDidMount() {
    initTable().then(res => {
      this.setState({ columns: res.columns })
    })
    fetchFilter().then(res => {
      this.setState({ 
        filterData: res.filterData,
        filterLoading: false
      })
    })
  }

  handleFilterClick = filterValue => {
    this.setState({ filterValue }, () => {
      this.handleFetch()
    })
  }

  handlePagerClick = page => {
    this.setState({ page }, () => {
      this.handleFetch()
    })
  }

  handleSelectionChange = (selectedRowKeys, selectedRows) => {
    const map = {...this.state.selectedRowMap}
    selectedRows.forEach(row => {
      map[row.id] = row
    })
    this.setState({
      selectedRowKeys,
      selectedRowMap: map
    })
  }

  handleFetch = () => {
    this.setState({ tableLoading: true })
    fetchTable(this.state.page, this.state.filterValue).then(res => {
      const dataSource = resolveDataSource(res.lists)
      this.setState({
        dataSource,
        pagerTotal: res.total,
        tableLoading: false
      })
    })
  }

  handleTagClose = id => {
    const selectedRowKeys = this.state.selectedRowKeys.filter(key => key !== id)
    this.setState({ selectedRowKeys })
  }

  render() {
    const rowSelection = {
      selectedRowKeys: this.state.selectedRowKeys,
      onChange: this.handleSelectionChange
    }

    const SelectGroup = this.state.selectedRowKeys.length
      ? (
        <div>
          <div className="selectbar">
            <SelectBar 
              selectedRowKeys={this.state.selectedRowKeys}
              selectedRowMap={this.state.selectedRowMap}
              onTagClose={this.handleTagClose}
            />
          </div>
          <div className="sampling-form">
            <SamplingForm />
          </div>
        </div>
      )
      : null

    return (
      <LocaleProvider locale={zhCN}>
        <div>
          <div className="topbar">
            <TopbarMenu selectedKeys={[this.state.topbarSelected]}/>
          </div>
          <div className="filter">
            <FilterForm
              onFilterClick={this.handleFilterClick}
              filterData={this.state.filterData}
              loading={this.state.filterLoading}
            />
          </div>
          <div className="table-main">
            <Table 
              rowSelection={rowSelection}
              dataSource={this.state.dataSource}
              columns={this.state.columns}
              size="middle"
              bordered
              loading={this.state.tableLoading}
              pagination={false}
            />
            <Pagination 
              total={this.state.pagerTotal}
              onChange={this.handlePagerClick}
              itemRender={itemRender}
              hideOnSinglePage={true}
              size="small"
              showQuickJumper
            />
          </div>
          <div className="select-group">
            { SelectGroup }
          </div>
        </div>
      </LocaleProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
