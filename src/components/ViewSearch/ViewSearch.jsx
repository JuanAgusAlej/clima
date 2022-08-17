import React, { useState } from 'react';

const ViewSearch = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const location = e.target.value;
    console.log(location);
    // eslint-disable-next-line no-debugger
  };

  // const [clima, setClima] = useState()
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label className="form-label">Seach for places</label>
        <input type="text" className="form-control" id="location" />
      </div>
      <button type="submit" className="btn btn-primary">
        Search
      </button>
    </form>
  );
};

export default ViewSearch;
