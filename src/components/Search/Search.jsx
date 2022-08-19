// import React, { useState } from 'react';
// import { ViewSearch } from '../ViewSearch';

// const Search = () => {
//   const [value, setValue] = useState('');
//   const [bandclick, setBandClick] = useState(false);

//   function handle() {
//     // console.log(value);
//     setBandClick(true);
//   }

//   return (<>
//       <input value={value} onChange={(e) => { setValue(e.target.value); }} />
//       <button onClick={handle}>Search</button>
//       {bandclick && <ViewSearch ubicacion={ value }/>};
//       </>
//   );
// };

// export default Search;

import React, { useState } from 'react';
import {
  useClimaToggleContex,
  useClimaContex,
} from '../../providers/ClimaProvider';
import useFetchAxios from '../../helpers/useFetchAxios';

const Search = ({ flagSearch }) => {
  const setLocation = useClimaToggleContex();
  const location = useClimaContex();
  const [value, setValue] = useState(location);
  const [regionValue, setRegionValue] = useState('');
  const filterLocation = useFetchAxios('https://api.weatherapi.com/v1/search.json?key=6be8c28794924ed8a2a184922222905&q=', value);
  const handleChange = (e) => {
    if (e.target.value.length > 2) {
      setValue(e.target.value);
    }
  };
  console.log(filterLocation);
  const onSubmit = () => {
    if (regionValue === '') {
      setLocation(value);
    } else {
      setLocation(regionValue);
    }
    flagSearch();
  };
  const handleClick = (e) => {
    setRegionValue(e.target.value);
    console.log(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input onChange={handleChange} />
        <button className="btn btn-primary">Search City</button>
        <select
          className="form-select"
          multiple
          aria-label="multiple select example"
        >
          {filterLocation?.data?.map((region) => (
            <option key={region.id} onClick={handleClick} value={region.name}>{`${region.name}, ${region.region}`}</option>
          ))}
        </select>
      </form>
    </>
  );
};

export default Search;
