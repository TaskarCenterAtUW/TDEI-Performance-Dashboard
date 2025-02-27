import api from "./axiosService";
import { BASE_URL, PROJECT_GROUP } from "../utils/contants";

const tdeiCoreUrl = BASE_URL;
const projectGroupID = PROJECT_GROUP;


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
// Function to get service metrics
export async function getServiceMetrics() {
  try {
    const response = await api.get(`${tdeiCoreUrl}/service-metrics/${projectGroupID}`);  
    return response.data;
  } catch (error) {
    console.error('Error fetching service metrics:', error);
    throw error;
  }
}