import React, { useState } from 'react';
import {
  useClimaToggleContex,
  useClimaContex,
} from '../../providers/ClimaProvider';
import useAxios from '../../helpers/useAxios';

const Search = ({ flagSearch, geoLocation }) => {
  const setLocation = useClimaToggleContex();
  const location = useClimaContex();
  const [value, setValue] = useState(location);
  const [regionValue, setRegionValue] = useState('');
  const filterLocation = useAxios('https://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=', value);
  const handleChange = (e) => {
    if (e.target.value.length > 2) {
      setValue(e.target.value);
    }
  };
  const geoLocationSet = () => {
    if (geoLocation) {
      setLocation(geoLocation);
      flagSearch();
    }
  };
  geoLocationSet();
  const onSubmit = (e) => {
    e.preventDefault();
    if (regionValue === '') {
      setLocation(value);
    } else {
      setLocation(regionValue);
    }
    flagSearch();
  };
  const handleClick = (e) => {
    setRegionValue(e.target.value);
  };

  return (
    <>
      <h1>Check the weather</h1>
      <form onSubmit={onSubmit}>
        <input onChange={handleChange} />
        <button className="btn btn-primary">Search City</button>
        <select
          className="selectpicker" data-size="4"
        >
          {filterLocation?.data?.map((region) => (
            <option key={region.id} onClick={handleClick} value={region.url}>{`${region.name}, ${region.region}`}</option>
          ))}
        </select>
      </form>
    </>
  );
};

export default Search;
