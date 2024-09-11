import api from "./axiosService";

const tdeiCoreUrl = "https://dummyjson.com/c/b600-cacc-414d-a564";
const tdeiAppUrl = "https://mocki.io/v1/26ccba49-c7d6-49e8-9132-dc4d03f607a7";

// Function to get TDEI core metrics
export async function getTDEICoreMetrics() {
  try {
    const response = await api.get(tdeiCoreUrl);  
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
