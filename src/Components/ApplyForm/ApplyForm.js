import React from 'react'
import { Form, Row, Col, Input, TimePicker, Button } from 'antd'
// import Layout from '../Layout/Layout'
import "./Applyserviceprovider.css"
// import axios from 'axios'
// import { toast } from 'react-hot-toast'
// import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
// import { hideLoading, showLoading } from '../../Redux/alertsSlice'
import TextArea from 'antd/es/input/TextArea'
import { Select } from 'antd';
import moment from 'moment/moment';
import dayjs from 'dayjs';


function ApplyForm({ onFinish, initialvalues }) {
    const Option = Select.Option;
    return (
        <Form layout='vertical' onFinish={onFinish} initialValues={{
            ...initialvalues, ...(initialvalues && {
                timings: [
                    dayjs(initialvalues?.timings[0], "HH:mm"),
                    dayjs(initialvalues?.timings[1], "HH:mm")
                ]
            })
        }} >
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
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item label="Address" name="address" rules={[{ required: true }]}  >
                        <TextArea rows={4} placeholder="Address" maxLength={1000} />
                    </Form.Item>
                </Col>
            </Row>
            <hr></hr>
            <h1 className='card-title mt-3'>Professional Information</h1>
            <Row gutter={20}>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item label="Specialization" name="specialization" rules={[{ required: true }]}  >
                        <Select className='select-option' >
                            <Option value="Electrician">Electrician</Option>
                            <Option value="Plumbing">Plumbing</Option>
                            <Option value="AC Services">AC Services</Option>
                        </Select>
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
                {/* <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item label=" Start Timings" name="starttimings" rules={[{ required: true }]}  >
                        <TimePicker format="HH:mm" />
                    </Form.Item>
                </Col>
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item label=" End Timings" name="endtimings" rules={[{ required: true }]}  >
                        <TimePicker format="HH:mm" />
                    </Form.Item>
                </Col> */}
                <Col span={8} xs={24} sm={24} lg={8}>
                    <Form.Item label="Timings" name="timings" rules={[{ required: true }]}  >
                        <TimePicker.RangePicker format="HH:mm" />
                    </Form.Item>
                </Col>
            </Row>
            <div className='d-flex justify-content-end'>
                <Button className='primary-button' htmlType='submit'>SUBMIT</Button>
            </div>

        </Form>
    )
}

export default ApplyForm
