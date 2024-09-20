import api from "./axiosService";

const tdeiCoreUrl = process.env.REACT_APP_URL;
const tdeiAppUrl = "https://mocki.io/v1/26ccba49-c7d6-49e8-9132-dc4d03f607a7";

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

// Function to get TDEI app metrics
export async function getTDEIAppMetrics() {
  try {
    const response = await api.get(tdeiAppUrl);
    return response.data;
  } catch (error) {
    console.error('Error fetching TDEI App Metrics:', error);
    throw error;
  }
}
