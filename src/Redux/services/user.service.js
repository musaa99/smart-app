/* eslint-disable import/no-anonymous-default-export */
import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "https://luchismart-api.herokuapp.com/api/v1/admin/organizations/:id/users";



const getUserBoard = () => {
  return axios.get(API_URL + "admin", + "organization",+ `${'id'}`, + "users", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "manager", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

export default {
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};
