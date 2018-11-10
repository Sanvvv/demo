import React from 'react'
import { DatePicker, Select, Button, Form, Spin } from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const RangePicker = DatePicker.RangePicker

class Filter extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
        this.props.onFilterClick(values)
      }
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form

    const generateSelect = type => {
      const data = this.props.filterData
      const Lists = data[type]
        ? data[type].map(item => (
          <Option value={item.value} key={item.value}>{item.text}</Option>
        ))
        : null

      return (
        <span className="select-item">
          <Select 
            placeholder="请选择"
            defaultValue="all"
            size="small"
            style={{ width: 120 }}
          >
            <Option value="all">全选</Option>
            { Lists }
          </Select>
        </span>
      )
    }
    
    const SupplierSelect = generateSelect('supplier')
    const GenTypeSelect = generateSelect('genType')
    const SrcLanSelect = generateSelect('srcLan')
    const TarLanSelect = generateSelect('tarLan')

    const Loading = this.props.loading
      ? <Spin className="spin"></Spin>
      : null

    return (
      <div className="filter-container">
        <Form onSubmit={this.handleSubmit} layout="inline">
          <FormItem label="供应商">
            { SupplierSelect }
          </FormItem>
          <FormItem label="生产类型">
            { GenTypeSelect }
          </FormItem>
          <FormItem label="签发日期">
            {getFieldDecorator('date', {})(
              <RangePicker size="small" style={{ width: 220 }}/>
            )}
          </FormItem>
          <FormItem label="源语言">
            { SrcLanSelect }
          </FormItem>
          <FormItem label="目标语言">
            { TarLanSelect }
          </FormItem>
          <FormItem>
            <Button type="primary" htmlType="submit" size="small">
              筛选项目
            </Button>
          </FormItem>
        </Form>
        { Loading }
      </div>
    )
  }
}

const FilterForm = Form.create()(Filter)

export default FilterForm