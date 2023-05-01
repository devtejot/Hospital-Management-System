import React from "react";
import Layout from "../components/Layout";
import Box from "@mui/material/Box";
import { Card, Space, Statistic, Table, Typography } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import Grid from "@mui/material/Grid";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import BarChart from "../charts/BarChart";
import Stack from "@mui/material/Stack";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

function DashboardCard({ title, value, icon }) {
  return (
    <Card>
      <i
        style={{
          color: "#00ADB5",
          borderRadius: 16,
          fontSize: 20,
          padding: 8,
        }}
        className={icon}
      ></i>
      <Statistic title={title} value={value} />
    </Card>
  );
}

const DashboardPage = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    try {
      const res = await axios.get("/api/v1/admin/getAllUsers", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (res.data.success) {
        setUsers(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    {
      title: "Email",
      dataIndex: "email",
    },
    {
      title: "Doctor",
      dataIndex: "isDoctor",
      render: (text, record) => <span>{record.isDoctor ? "Yes" : "No"}</span>,
    },
  ];

  //Mongo db count//

  return (
    <>
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <Layout />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="dashboard-container">
            <Typography.Title level={4}>Dashboard</Typography.Title>
            <Grid container spacing={2}>
              <Grid item xs={4}>
                <DashboardCard
                  icon={"fa-solid fa-user-doctor"}
                  title={"Doctors"}
                  value={5}
                />
              </Grid>

              <Grid item xs={4}>
                <DashboardCard
                  icon={"fa-solid fa-stethoscope"}
                  title={"Appointments"}
                  value={10}
                />
              </Grid>

              <Grid item xs={4}>
                <DashboardCard
                  icon={"fa-solid fa-users"}
                  title={"patients"}
                  value={20}
                />
              </Grid>

              <Grid item xs={6}>
                <Item>
                  <BarChart />
                </Item>
              </Grid>

              <Grid item xs={6}>
                <Item>
                  <Table columns={columns} dataSource={users}></Table>
                </Item>
              </Grid>
            </Grid>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default DashboardPage;
