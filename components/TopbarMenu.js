import React from 'react'
import { Menu } from 'antd'

const TopbarMenu = ({ selectedKeys }) => (
  <Menu
    selectedKeys={selectedKeys}
    mode="horizontal"
    style={{ lineHeight: '30px' }}
  >
    <Menu.Item key="newOrder">新建订单</Menu.Item>
    <Menu.Item key="postQA">Post QA</Menu.Item>
  </Menu>
)

export default TopbarMenu