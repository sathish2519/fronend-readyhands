import React from 'react'
import { useHistory } from "react-router-dom";
import { Form, Input, Button } from 'antd'
import './User.css'

function SignIn() {
  const history = useHistory();

  const SignupPage = () => {
    history.push("/signup")
  }
  const onFinish = (values) => {
    console.log(values)
  }


  return (
    <div className='authentication'>
      <div className="authentication-form card part2 p-3">
        <h1 className='card-title'>Login to Continue</h1>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item  className="form-2" label="Email" name="email" rules={[{ required: true }]}>
            <Input placeholder='Email-id' />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true }]}>
            <Input type='password' placeholder='Password'  />
          </Form.Item>
            <Button className='primary-button' htmlType="submit">
              Login
            </Button>

            {/* <Link to='/sigin'>Click here to Login</Link> */}
            <p className='anchor my-7' onClick={SignupPage}>Click here to Register</p>
        </Form>
      </div>
    </div>
  )
}


export default SignIn


