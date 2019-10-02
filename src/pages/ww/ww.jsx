import React, { Component } from 'react';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { Table } from 'antd';

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    key: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
  },
  {
    title: 'CreateTime',
    dataIndex: 'createTime',
    key: 'createTime',
  },
  {
    title: 'IsMale',
    dataIndex: 'isMale',
    key: 'isMale',
    render: text => <span>{text}</span>,
  },
];

export default class Ww extends Component {
  state = {
    info: [],
  };

  componentDidMount() {
    this.getInfo();
  }

  getInfo = () => {
    fetch('http://39.105.1.69:3000/mock/11/user')
      .then(res => {
        return res.json();
      })
      .then(data => {
        console.log(data.data);
        this.setState({ info: data.data });
      });
  };

  render() {
    return (
      <PageHeaderWrapper>
        <div style={{ backgroundColor: '#fff' }}>
          <Table columns={columns} dataSource={this.state.info} />
        </div>
      </PageHeaderWrapper>
    );
  }
}
