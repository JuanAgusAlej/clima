import React, { useState } from 'react';
import { Search } from '../Search';
import { ViewSearch } from '../ViewSearch';

const Main = () => {
  const [filterSearch, setFilterSearch] = useState('false');

  const handleFilterSearch = () => {
    setFilterSearch(!filterSearch);
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
