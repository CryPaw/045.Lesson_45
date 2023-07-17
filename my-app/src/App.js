import React, {useState} from "react";
import ReactDOM from "react-dom";
import './App.css';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};
const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function NumValid(params) {
  const [value, setValue] = useState("");
  const onChange = ({target: {value}}) => setValue(prev => /\d+/.test(Number(value)) ? value : prev);
  return (
    <div className="App">
     <input {...{value, onChange}}/>
    </div>
  );
}

const App = () => (
  
  <div className='wrapper'>
    
    <h1>Formik</h1>
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Username"
      name="username"
      rules={[
        {
          required: true,
          message: 'Please input your username!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Phone number"
      name="Phone number"
      rules={[
        {
          required: true,
          message: 'Please input your phone number!',
          
        },
      ]}
    >
      <NumValid/>
    </Form.Item>

    <Form.Item
      label="Password"
      name="password"
      rules={[
        {
          required: true,
          message: 'Please input your password!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      name="remember"
      valuePropName="checked"
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Checkbox>Remember me</Checkbox>
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
  </div>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export default App;