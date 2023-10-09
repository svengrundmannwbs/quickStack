import { useState, useEffect } from "react";
import axios from "axios";

// TODO: AXIOS settings in .env for api hosting elsewhere?
// process.env.API_HOST
// process.env.API_PORT
axios.defaults.baseURL = "http://localhost:3000";

const useOwnAPI = (axiosParams) => {
  const [response, setResponse] = useState(undefined);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchData = async (params) => {
    try {
      const result = await axios.request(params);
      setResponse(result.data);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(axiosParams);
  }, []);

  return { response, error, loading };
};

export default useOwnAPI;
