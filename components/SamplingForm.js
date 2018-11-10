import React from 'react'
import { Form, Input, Button, Radio, DatePicker, Checkbox } from 'antd'

const FormItem = Form.Item
const RadioGroup = Radio.Group
const TextArea = Input.TextArea

const formItemLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 5 }
}

const textareaLayout = {
  labelCol: { span: 3 },
  wrapperCol: { span: 10 }
}

const tailFormItemLayout = {
  wrapperCol: { 
    span: 12, 
    offset: 3 
  }
}

class Sampling extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values)
      }
    })
  }
  
  render() {
    const { getFieldDecorator } = this.props.form

    return (
      <div>
        <div className="title">
          抽检设置
        </div>
        <div className="form">
          <Form onSubmit={this.handleSubmit}>
            <FormItem {...formItemLayout} label="抽检比例">
              {getFieldDecorator('ratio', {
                rules: [{
                  required: true,
                  message: 'ratio required!',
                }],
              })(
                <Input
                  size="small"
                  addonAfter={<span>%</span>}
                  placeholder="0-100"
                  type="number"
                  style={{ width: '100%' }}
                />
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="抽检方式">
              {getFieldDecorator('type', {
                rules: [{
                  required: true,
                  message: 'type required!',
                }],
              })(
                <RadioGroup style={{ width: '100%' }}>
                  <Radio value="random">随机</Radio>
                  <Radio value="continuous">连续</Radio>
                </RadioGroup>
              )}
            </FormItem>
            <FormItem {...formItemLayout} label="要求返稿时间">
              {getFieldDecorator('date', {
                rules: [{
                  required: true,
                  message: 'date required!',
                }],
              })(
                <DatePicker size="small" style={{ width: '100%' }}/>
              )}
            </FormItem>
            <FormItem {...textareaLayout} label="生产要求">
              {getFieldDecorator('textarea')(
                <TextArea row="4" />
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              {getFieldDecorator('agreement', {
                valuePropName: 'checked',
              })(
                <Checkbox>授权给项目经理进行生产配置和供应商选择</Checkbox>
              )}
            </FormItem>
            <FormItem {...tailFormItemLayout}>
              <Button type="primary" htmlType="submit" size="small">
                提交订单
              </Button>
            </FormItem>
          </Form>
        </div>
      </div>
    )
  }
}

const SamplingForm = Form.create()(Sampling)

export default SamplingForm