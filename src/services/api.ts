import axios from "axios";
import Constants from "expo-constants";

const { API_KEY, BASE_URL } = Constants.expoConfig?.extra || {};

const apiClient = axios.create({
  baseURL: BASE_URL,
  params: {
    api_key: API_KEY,
  },
});

export default apiClient;
