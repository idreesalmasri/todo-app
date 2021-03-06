import { useState } from 'react';

const useForm = (callback) => {

  const [values, setValues] = useState({});

  const handleSubmit = (event) => {
    if (event) event.preventDefault();
    // console.log("dsfffffffffffffffff",values);
    callback({...values});
  };

  const handleChange = (event) => {
    event.persist();
    setValues(values => ({ ...values, [event.target.name]: event.target.value }));
  //   console.log("=================",event.target.value);
  };

  return {
    handleChange,
    handleSubmit,
    values,
  };
};

export default useForm;