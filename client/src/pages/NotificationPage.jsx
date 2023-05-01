import { Tabs, message } from "antd";
import axios from "axios";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";
import { hideLoading, showLoading } from "../redux/features/alertSlice";
import { setUser } from "../redux/features/userSlice";
import Box from "@mui/material/Box";

const NotificationPage = () => {
  const { user } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const markAllAsSeen = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/get-all-notification",
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        dispatch(setUser(res.data.data));
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error("Something went wrong");
    }
  };

  const deleteAll = async () => {
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/delete-all-notification",
        { userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success(res.data.message);
        dispatch(setUser(res.data.data));
      } else {
        message.error(res.data.message);
      }
    } catch (error) {
      dispatch(hideLoading());
      message.error("Something went wrong");
    }
  };
  return (
    <>
      <Box height={50} />
      <Box sx={{ display: "flex" }}>
        <Layout />
        <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
          <div className="dashboard-container">
            <h2 className="text-center">Notifications</h2>
            <hr />

            <Tabs className="tabs">
              <Tabs.TabPane tab="Unseen" key={0}>
                <div className="d-flex justify-content-end">
                  <h1 className="anchor" onClick={() => markAllAsSeen()}>
                    <button className="btn btn-primary" type="submit">
                      Mark all as seen
                    </button>
                  </h1>
                </div>

                {user?.notification.map((notification) => (
                  <div
                    className="notification-card"
                    onClick={() => navigate(notification.onClickPath)}
                  >
                    <div className="">{notification.message}</div>
                  </div>
                ))}
              </Tabs.TabPane>
              <Tabs.TabPane tab="Seen" key={1}>
                <div className="d-flex justify-content-end">
                  <h1 className="anchor" onClick={() => deleteAll()}>
                    <button className="btn btn-primary" type="submit">
                      Delete all
                    </button>
                  </h1>
                </div>
                {user?.seennotification.map((notification) => (
                  <div
                    className="notification-card"
                    onClick={() => navigate(notification.onClickPath)}
                  >
                    <div className="">{notification.message}</div>
                  </div>
                ))}
              </Tabs.TabPane>
            </Tabs>
          </div>
        </Box>
      </Box>
    </>
  );
};

export default NotificationPage;
