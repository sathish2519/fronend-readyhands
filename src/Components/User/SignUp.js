import React from 'react'
import { useHistory,Link} from "react-router-dom";
import { Form, Input, Button } from 'antd'
import './User.css'

function SignUp() {
  const history = useHistory();

  const SignIn = () => {
    history.push("/sigin")
  }

  const onFinish=(values)=>{
    console.log(values)

  }
  return (
    <div className='authentication'>
      <div className="authentication-form card  p-3">
        <h1 className='card-title'>Create Account</h1>
        <Form layout='vertical' onFinish={onFinish}>
          <Form.Item className="form-1"  label="Name" name="name" rules={[{ required: true }]}>
            <Input  placeholder='Name'/>
          </Form.Item>
          <Form.Item label="Email" name="email" rules={[{ required: true }]}>
            <Input placeholder='Email-id' />
          </Form.Item>
          <Form.Item label="Password" name="password" rules={[{ required: true }]}>
            <Input type='password' placeholder='Password'  />
          </Form.Item>
            <Button className='primary-button' htmlType="submit">
              Register
            </Button>

            {/* <Link to='/sigin'>Click here to Login</Link> */}
            <p className='anchor my-7' onClick={SignIn}>Click here to Login</p>
        </Form>
      </div>
    </div>

  )
}

export default SignUp
