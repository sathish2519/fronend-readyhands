import React from 'react'
import { useHistory } from "react-router-dom";
import { Form, Input } from 'antd'
import './SignIn.css'
import SignIn from './SignIn';

function SignUp() {
  const history = useHistory();

  const SignupPage = () => {
    history.push("/signup")
  }
  return (
    <div className="authentication">
      <div className="authentication-form card p-3">
        <h1 className="card-title">Login to Continue</h1>
        <Form layout="vertical">
          {/* <Form.Item className='item1' label="Name" name="name">
            <Input placeholder="Name" />
          </Form.Item> */}
          <Form.Item  label="Email" name="email">
            <Input placeholder="Email" />
          </Form.Item>
          <Form.Item label="Password" name="password">
            <Input placeholder="Password" type="password" />
          </Form.Item>
          <button  className="button i-button">Login</button>
          <p onClick={SignupPage} className="anchor mt-2">
            CLICK HERE TO LOGIN
          </p>
        </Form>
      </div>
    </div>
  )
}

export default SignUp
