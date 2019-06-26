import React, { Component } from 'react';
import menuList from './../../config/menuconfig';
import { Menu, Icon } from 'antd';
import "./index.css";
import { Link } from 'react-router-dom'
const { SubMenu } = Menu;

export default class NavLeft extends Component {
    creteMenu = (menuList) => {
        return menuList.map((elem) => {
            if (elem.children) {
                return (
                    <SubMenu key={elem.path} title={<span><Icon type={elem.icon}></Icon>{elem.title}</span>}>
                        {this.creteMenu(elem.children)}
                    </SubMenu>
                )
            }
            return (<Menu.Item key={elem.path}>
                <Link to={elem.path}>
                    {elem.icon ? <Icon type={elem.icon}></Icon> : null}
                    {elem.title}
                </Link></Menu.Item>)
        })
    }
    componentWillMount() {
        let list = this.creteMenu(menuList);
        this.setState({
            list
        })
    }
    render() {
        return (
            <div className="main">
                <div className="logobox">
                    <img src="/imgs/logo.png" />
                </div>
                <Menu className="menu" theme="dark" mode="inline" defaultOpenKeys={['/admin/student']}>
                    {this.state.list}
                </Menu>
            </div>
        )
    }

}


