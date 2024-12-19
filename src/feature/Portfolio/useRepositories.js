import axios from "axios";
import { useState, useEffect } from "react";
import { repositories } from "./apiRepos";

export const useRepositories = () => {
  const [data, setData] = useState({
    state: "loading",
    repositoriesData: [],
    error: null,
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(repositories);
        setData({
          state: "success",
          repositoriesData: response.data,
          error: null,
        });
      } catch (error) {
        setData({
          state: "error",
          repositoriesData: [],
          error: error.message,
        });
      }
    };
    const timer = setTimeout(() => {
      getData();
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return data;
};
