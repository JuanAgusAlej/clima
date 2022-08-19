import React from 'react';
import useFetchAxios from '../../helpers/useFetchAxios';
import { useClimaContex } from '../../providers/ClimaProvider';
import { Card } from '../Card';

const ViewSearch = ({ flagSearch }) => {
  // const [dataclima, setDataClima] = useState([]);
  const location = useClimaContex();
  console.log(location);
  const dataclima = useFetchAxios('https://api.weatherapi.com/v1/current.json?key=6be8c28794924ed8a2a184922222905&q=', location);
  console.log(dataclima.data);
  // if (!dataclima.loading) {
  //   console.log(dataclima.data);
  // }
  return <>
  <button className='btn btn-primary' onClick={flagSearch}>Search City</button>
  {!dataclima.loading && <Card temp={dataclima.data.current.temp_c}
  time={dataclima.data.location.localtime}
  region={dataclima.data.location.region}
  name={dataclima.data.location.name}
  wind_kph={dataclima.data.current.wind_kph}
  humidity={dataclima.data.current.humidity}
  icon={dataclima.data.current.condition.icon}
  />}
  </>;
};

export default ViewSearch;

// <h1>{dataclima.loading}</h1>
// {!dataclima.loading && (dataclima?.data?.map(dato => (
//   <h3 key="id">{dato.name}</h3>
// )))};

// <h3 hey="id">{dataclima.data.current.temp_c}</h3>
