import React from 'react';

import { Form, Input, Button } from 'antd';

import { connect } from 'react-redux';
import { addBlog } from '../../store/actions';

import './index.css';

const AddBlog = ({dispatch}) => {
  const layout = {
    labelCol: {
      span: 1,
    },
    wrapperCol: {
      span: 4,
    },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 1,
      span: 8,
    },
  };

  // const formRef = React.createRef();

  const [form] = Form.useForm();

  const handleSubmit = (values) => {
    dispatch(addBlog(values.blog));
  };

  return (
    <div>
      <Form
        {...layout}
        name="basic"
        onFinish={handleSubmit}
      >
        <Form.Item
          label="Blog"
          name="blog"
          rules={[
            {
              required: true,
              message: 'Please input your blog!',
            },
          ]}
          form={form}
        >
          <Input />
        </Form.Item>
        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default connect()(AddBlog);