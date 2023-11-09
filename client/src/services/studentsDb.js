import axios from "axios";
const baseURL = import.meta.env.VITE_AXIOS_BASE;

export default axios.create({
  baseURL: baseURL,
});
