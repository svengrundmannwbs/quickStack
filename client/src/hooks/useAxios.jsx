import { useState, useEffect } from "react";
import axios from "axios";

const useAxiosGet = (url, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(url)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }, []);

  return { data, error, loaded };
};

const useAxiosPost = (url, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .post(url, payload)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }, []);

  return { data, error, loaded };
};

const useAxiosPut = (url, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .post(url, payload)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }, []);

  return { data, error, loaded };
};

const useAxiosDelete = (url, payload) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    axios
      .delete(url, payload)
      .then((response) => setData(response.data))
      .catch((error) => setError(error.message))
      .finally(() => setLoaded(true));
  }, []);

  return { data, error, loaded };
};

export { useAxiosGet, useAxiosPost, useAxiosPut, useAxiosDelete };
