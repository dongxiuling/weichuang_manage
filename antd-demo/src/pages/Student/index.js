import React, { Component } from 'react';
import{Table} from 'antd';
import columns from './columns.js'
import dataSource from './dataSource.js'
import "./index.css";
class Student extends Component {
    render() {
        return (
            <div>
                学生列表
                  <Table dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}

export default Student;
