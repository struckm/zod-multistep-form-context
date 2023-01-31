import { createContext, useState } from 'react';

const FormContext = createContext({});

export const FormProvider = ({ children }) => {
  const title = {
    0: 'Personal Info',
    1: 'Shipping Info',
    2: 'Opt-In'
  };

  const [page, setPage] = useState(0);

  const [data, setData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zip: '',
  });


  const handleChange = (e: any) => {
    console.log('handleChange in context', e.target.name);
    const type = e.target.type;

    const name = e.target.name;

    const value = type === 'checkbox' ? e.target.checked : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const { billAddress2, optInNews, ...requiredInputs } = data;

  const canSubmit =
    [...Object.values(requiredInputs)].every(Boolean) && page === Object.keys(title).length - 1;


  const submitHide = page !== Object.keys(title).length - 1 && 'remove-button';

  return (
    <FormContext.Provider
      value={{
        title,
        page,
        setPage,
        data,
        setData,
        canSubmit,
        handleChange,
        submitHide
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
