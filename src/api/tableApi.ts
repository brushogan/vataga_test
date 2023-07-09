import axios from "axios";

const apiInstance = axios.create({
  baseURL: "https://api.publicapis.org/",
});

apiInstance.interceptors.response.use(
  (response) => response.data,
  (error) => {
    console.error("API request failed:", error);
    throw error;
  }
);

const getEntries = () => {
  return apiInstance.get("/entries");
};

export default getEntries;
