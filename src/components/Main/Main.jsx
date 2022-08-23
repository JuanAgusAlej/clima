import React, { useState } from 'react';
import { Search } from '../Search';
import { ViewSearch } from '../ViewSearch';

const Main = () => {
  const [filterSearch, setFilterSearch] = useState('false');
  const [geoLocation, setGeoLocation] = useState();
  const [geoLocationBool, setGeoLocationBool] = useState(false);
  const geograficLocaton = () => {
    if (navigator.geolocation) {
      const success = (position) => {
        const latitud = position.coords.latitude;
        const longitud = position.coords.longitude;
        if (!geoLocationBool) {
          setGeoLocation(`${latitud},${longitud}`);
          setGeoLocationBool(true);
        }
      };
      navigator.geolocation.getCurrentPosition(success, (msg) => {
        console.error(msg);
      });
    }
  };
  geograficLocaton();
  const handleFilterSearch = () => {
    setFilterSearch(!filterSearch);
    setGeoLocation(false);
  };
  return (
    <div>
      {filterSearch ? (
        <Search flagSearch={handleFilterSearch} geoLocation={geoLocation} />
      ) : (
        <ViewSearch flagSearch={handleFilterSearch} />
      )}
    </div>
  );
};

export default Main;
