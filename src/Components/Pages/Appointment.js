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

function Appointment() {
  const [appointments, setappointments] = useState([]);
  const dispatch = useDispatch();

  const getallappointments = async () => {
    try {
      dispatch(showLoading());
      const response = await axios.get("/api/user/get-all-appointments", {
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

  const columns = [
    {
      title: "Id",
      dataIndex: "_id",
    },
    {
      title: "ServiceProvider",
      dataIndex: "name",
      render: (text, appointment) => (
        <span>
          {appointment.providerinfo.firstname} {appointment.providerinfo.lastname}
        </span>
      ),
    },
    {
      title: "Phone Number",
      dataIndex: "phonenumber",
      render: (text, appointment) => <span>{appointment.providerinfo.phonenumber}</span>,
    },
    {
        title: "Booked for",
        dataIndex: "specialization",
        render: (text, appointment) => <span>{appointment.providerinfo.specialization}</span>,
      },
    {
      title: "Date & Time",
      dataIndex: "createdAt",
      render: (text, appointment) => (
        <span>
         {(dayjs(appointment.date).format("DD-MM-YYYY"))} | {(dayjs(appointment.selectedtime).format("HH:mm"))}
        </span>
      ),
    },
  ];

  return (
    <Layout>
      <h1 className="page-title">Users List</h1>
      <Table columns={columns} dataSource={appointments}></Table>
    </Layout>
  );
}

export default Appointment;
