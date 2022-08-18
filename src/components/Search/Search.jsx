import React, { useState } from 'react';
import { ViewSearch } from '../ViewSearch';

const Search = () => {
  const [value, setValue] = useState('');
  const [bandclick, setBandClick] = useState(false);

  function handle() {
    // console.log(value);
    setBandClick(true);
  }

  return (<>
      <input value={value} onChange={(e) => { setValue(e.target.value); }} />
      <button onClick={handle}>Search</button>
      {bandclick && <ViewSearch ubicacion={ value }/>};
      </>
  );
};

export default Search;

/* eslint-disable no-undef */
// import React, { useState } from 'react';
// import { useForm } from 'react-hook-form';
// // import ViewSearch from '../ViewSearch';
// // eslint-disable-next-line import/no-unresolved
// import { ViewSearch } from '../ViewSearch';

// const Search = () => {
//   const [bandsubmmit, setBandSubmmit] = useState(false);
//   // eslint-disable-next-line no-var
//   let dato;
//   const { register, handleSubmit } = useForm();
//   // const onSubmit = (data, e) => console.log(data, e);
//   // const onSubmit = (data) => console.log(data.Search);
//   const onSubmit = (data) => {
//     dato = data.Search;
//     setBandSubmmit(true);
//     console.log(dato);
//   };
//   const onError = (errors, e) => console.log(errors, e);

//   return (
//     <>
//     <form onSubmit={handleSubmit(onSubmit, onError)}>
//       <input {...register('Search')} />
//       <button type="submit">Search City</button>
//     </form>
//     {bandsubmmit && <ViewSearch ubicacion={ dato }/>};
//     </>
//   );
// };

// export default Search;
