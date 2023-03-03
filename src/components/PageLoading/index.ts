import React from 'react';
import { Spin } from 'antd';
import './index.less';

const PageLoading = function PageLoading() {
  return React.createElement(
    'div',
    { className: 'page-loading' },
    React.createElement(Spin, { size: 'large', tip: '加载中，请稍后...' }),
  );
};

export default PageLoading;
