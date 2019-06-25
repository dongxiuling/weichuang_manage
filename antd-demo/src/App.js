import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import menuList from './config/menuconfig.js';
import { 
  Button ,
  Icon,
  Menu,
  Row,
  Col
} from 'antd';
import CFooter from './component/CFooter';
import CHeader from './component/CHeader';
import Home from './pages/Home'
import NavLift from "./component/NavLeft";
const { SubMenu } = Menu;
function App(props){


    return (
      
      <div className="App">
      <Row>
        <Col span={4}  className="navleft">
          <NavLift></NavLift>
        </Col>
        <Col span={20}  className='Body'>

        
        <CHeader ></CHeader>       
         <div className="bodyer"> {props.children}</div>
     
        <CFooter ></CFooter>
        
        </Col>
      </Row>
  </div>
    );
  
}




export default App;

