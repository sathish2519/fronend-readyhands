import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import axios from "axios";
import { toast } from "react-hot-toast";
import { Table } from "antd";
import { render } from "@testing-library/react";
import moment from "moment/moment";
import { hideLoading, showLoading } from "../../Redux/alertsSlice";
import Layout from "../Layout/Layout";
import dayjs from "dayjs";

function ProviderAppointment() {
  const [appointments, setappointments] = useState([]);
  const dispatch = useDispatch();

  const getallappointments = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get("/api/serviceprovider/get-all-appointments-by-providerid", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(hideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        setappointments(response.data.data);
      }
    } catch (error) {
      toast.error("Something Went Wrong");
      console.log(error);
    }
  };

  useEffect(() => {
    getallappointments();
  }, []);
  const changeappointmentstatus = async (record, status) => {

    try {
        dispatch(showLoading())
        const response = await axios.post('/api/serviceprovider/change-status', { appointmentId: record._id, status:status }, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        })
        dispatch(hideLoading())
        if (response.data.success) {
            console.log(response.data.data)
            getallappointments()
            toast.success(response.data.message)
        }
        dispatch(hideLoading())
    } catch (error) {
        toast.error("Something Went Wrong")
        console.log(error)

    }

}
  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "User",
      dataIndex: "name",
      render: (text, appointment) => (
        <span>
          {appointment.userinfo.name}
        </span>
      ),
    },
    // {
    //   title: "Phone Number",
    //   dataIndex: "phonenumber",
    //   render: (text, appointment) => <span>{appointment.providerinfo.phonenumber}</span>,
    // },
    // {
    //     title: "Booked for",
    //     dataIndex: "specialization",
    //     render: (text, appointment) => <span>{appointment.providerinfo.specialization}</span>,
    //   },
    {
      title: "Date & Time",
      dataIndex: "createdAt",
      render: (text, appointment) => (
        <span>
         {(dayjs(appointment.date).format("DD-MM-YYYY"))} | {(dayjs(appointment.selectedtime).format("HH:mm"))}
        </span>
      ),
    },
    // {
    //   title:"Status",
    //   dataIndex:"status",
    // },
    {
        title: "Actions",
        dataIndex: "status",
        render: (text, record) => (<div className='d-flex'>
            {record.status === "pending" && (<p className='anchor justify-content-evenly' onClick={() => changeappointmentstatus(record, "approved")}  >Approve</p>)}
            {record.status === "approved" && (<p className='anchor justify-content-evenly' onClick={() => changeappointmentstatus(record, "pending")}>Reject</p>)}
        </div>)
    }
  ];

  return (
    <Layout>
      <h1 className="page-title">Users List</h1>
      <Table columns={columns} dataSource={appointments}></Table>
    </Layout>
  );
}

export default ProviderAppointment;
