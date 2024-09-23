import api from "./axiosService";
import { BASE_URL } from "../utils/contants";

const tdeiCoreUrl = BASE_URL;


// Function to get system metrics
export async function getSystemMetrics() {
  try {
    const response = await api.get(`${tdeiCoreUrl}/system-metrics`);  
    return response.data;
  } catch (error) {
    console.error('Error fetching TDEI Core Metrics:', error);
    throw error;
  }
}
// Function to get data metrics
export async function getDataMetrics() {
  try {
    const response = await api.get(`${tdeiCoreUrl}/data-metrics`);  
    return response.data;
  } catch (error) {
    console.error('Error fetching TDEI Core Metrics:', error);
    throw error;
  }
}