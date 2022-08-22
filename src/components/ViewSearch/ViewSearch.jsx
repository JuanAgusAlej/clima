import React from 'react';
import useFetchAxios from '../../helpers/useFetchAxios';
import { useClimaContex } from '../../providers/ClimaProvider';
import { Card } from '../Card';

const ViewSearch = ({ flagSearch }) => {
  const location = useClimaContex();
  const dataclima = useFetchAxios('https://api.weatherapi.com/v1/current.json?key=6be8c28794924ed8a2a184922222905&q=', location);
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
