import React from 'react'
import { Icon, Menu, Dropdown } from 'antd'
import $style from './index.less'
import classnames from 'classnames'

const menu = (
  <Menu>
    <Menu.Item>
      <a target='_blank' href='https://github.com/limichange/zaku'>
        Star & Fork
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target='_blank' href='https://github.com/limichange/zaku/issues/new'>
        Report Bug 🐞
      </a>
    </Menu.Item>
  </Menu>
)

export default class UserAvatar extends React.Component {
  render() {
    return (
      <Dropdown overlay={menu}>
        <a
          className={classnames([$style.UserAvatar, 'ant-dropdown-link'])}
          href='#'>
          <img src='https://avatars1.githubusercontent.com/u/1947344?s=460&v=4' />
          <Icon type='caret-down' />
        </a>
      </Dropdown>
    )
  }
}
