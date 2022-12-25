import React from 'react'
// import { useHistory } from "react-router-dom";
// import { Form, Input } from 'antd'
import './SignIn.css'
import Container from '../Container'

function SignIn() {
  // const history = useHistory();

  // const SignupPage = () => {
  //   history.push("/signup")
  // }


  return (
    <div className="fixed inset-0 bg-primary -z-10 flex justify-center items-center">
      <Container>
        <form className="bg-secondary rounded p-6 w-72">
          <h1 className="text-xl text-white font-semibold text-center">
            Sign in
          </h1>
          <div className="flex flex-col-reverse">
            <input
              id="email"
              type="text"
              className="bg-transparent rounded border-2 border-dark-subtle focus:border-white w-full text-lg outline-none p-1 text-white peer transition"
              placeholder="john@email.com"
            />
            <label
              className="font-semibold text-dark-subtle peer-focus:text-white transition self-start"
              htmlFor="email"
            >
              Email
            </label>
          </div>
        </form>
      </Container>
    </div>
  )}
    

export default SignIn


