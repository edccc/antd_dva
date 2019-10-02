import React from 'react';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

export default () => (
  <PageHeaderWrapper>
    <Card>
      <Alert
        message="web 53 Cms"
        type="success"
        showIcon
        banner
        style={{
          margin: -12,
          marginBottom: 24,
        }}
      />
    </Card>
  </PageHeaderWrapper>
);
