import React, { useState } from 'react';
// eslint-disable-next-line import/no-unresolved
import { Search } from '../Search';
import { ViewSearch } from '../ViewSearch';
// import { ViewSearch } from '../ViewSearch';

const Main = () => {
  const [filterSearch, setFilterSearch] = useState('false');

  const handleFilterSearch = () => {
    setFilterSearch(!filterSearch);
    console.log(filterSearch);
  };
  return (
    <div>
      {filterSearch ? (
        <Search flagSearch={handleFilterSearch} />
      ) : (
        <ViewSearch flagSearch={handleFilterSearch} />
      )}
    </div>
  );
};

export default Main;
