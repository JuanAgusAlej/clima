import { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url, q = '') => {
  const [dataFetch, setDataFetch] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const axiosFuntion = async () => {
    const { data } = await axios(url + q);
    setDataFetch({
      loading: false,
      data,
    });
  };
  useEffect(() => {
    axiosFuntion();
  }, [url, q]);
  return dataFetch;
};
export default useFetch;
