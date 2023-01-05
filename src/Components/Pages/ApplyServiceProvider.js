import { Form, Row, Col, Input, TimePicker, Button } from 'antd'
import React from 'react'
import Layout from '../Layout/Layout'
import "./Applyserviceprovider.css"

function ApplyServiceProvider() {

  const onFinish=(values) => {
    console.log(values)
  }
  return (
    <Layout>
      <h1 className='page-title'>Apply Service provider</h1>
      <hr></hr>
      <Form layout='vertical' onFinish={onFinish}>
        <h1 className='card-title mt-3'>Personal Information</h1>
        <Row gutter={20}>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item label="First-Name" name="firstname" rules={[{ required: true }]}  >
              <Input placeholder='First-Name'></Input>
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item label="Last-Name" name="lastname" rules={[{ required: true }]}  >
              <Input placeholder='Last-Name'></Input>
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item label="Phone Number" name="phonenumber" rules={[{ required: true }]}  >
              <Input placeholder='Phone Number'></Input>
            </Form.Item>
          </Col>
        </Row>
        <hr></hr>
        <h1 className='card-title mt-3'>Professional Information</h1>
        <Row gutter={20}>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item label="Specialization" name="specialization" rules={[{ required: true }]}  >
              <Input placeholder='Specialization'></Input>
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item label="Experience" name="experience" rules={[{ required: true }]}  >
              <Input placeholder='Experience' type="number" ></Input>
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item label="Fee Per Visit" name="fee" rules={[{ required: true }]}  >
              <Input placeholder='Fee Per Visit' type='number'></Input>
            </Form.Item>
          </Col>
          <Col span={8} xs={24} sm={24} lg={8}>
            <Form.Item label="Timings" name="timings" rules={[{ required: true }]}  >
              <TimePicker.RangePicker />
            </Form.Item>
          </Col>
        </Row>
        <div className='d-flex justify-content-end'>
          <Button className='primary-button'  htmlType='submit'>SUBMIT</Button>
        </div>

      </Form>
    </Layout>
  )
}

export default ApplyServiceProvider
