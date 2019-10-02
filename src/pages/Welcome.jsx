import React from 'react';
import { Card, Typography, Alert } from 'antd';
import { PageHeaderWrapper } from '@ant-design/pro-layout';

// const CodePreview = ({ children }) => (
//   <pre
//     style={{
//       background: '#f2f4f5',
//       padding: '12px 20px',
//       margin: '12px 0',
//     }}
//   >
//     <code>
//       <Typography.Text copyable>{children}</Typography.Text>
//     </code>
//   </pre>
// );

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
