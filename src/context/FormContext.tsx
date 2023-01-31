import { createContext, useState, Dispatch, SetStateAction } from 'react';
import { TProfile, ProfileSchema } from '../schemas/schemas';

type Dispatcher<S> = Dispatch<SetStateAction<S>>;

export interface IFormContext {
  title: object;
  page: number;
  setPage: Dispatcher<number>;
  valid: boolean;
  setValid: Dispatcher<boolean>;

}

const schemas = [ProfileSchema];
const FormContext = createContext<IFormContext | null>(null);

interface IFormProviderProps {
  children: React.ReactNode;
}

export const FormProvider = ({ children } : IFormProviderProps) => {
  const title = {
    0: 'Personal Info',
    1: 'Shipping Info',
    2: 'Opt-In'
  };

  const [page, setPage] = useState<number>(0);

  const [data, setData] = useState({
    firstName: {
      value: '',
      valid: true,
      touched: false,
      required: true,
    },
    lastName: {
      value: '',
      valid: true,
      touched: false,
      required: true,
    },
    email: {
      value: '',
      valid: true,
      touched: false,
      required: true,
    },
    address: {
      value: '',
      valid: true,
      touched: false,
      required: true,
    },
    city: {
      value: '',
      valid: true,
      touched: false,
      required: true,
    },
    zip: {
      value: '',
      valid: true,
      touched: false,
      required: true,
    },
  });

  const [valid, setValid] = useState({
    firstName: true,
    lastName: true,
    email: true,
    address: true,
    city: true,
    zip: true,
  })

  // const validateField = (field: keyof TProfile) =>
  // (value: unknown): string => {
  //   const parsedResult = formSchema
  //     .pick({ [field]: true })
  //     .safeParse({ [field]: value })
  //   return !parsedResult.success
  //     ? parsedResult.error.errors[0].message
  //     : ""
  // }

  const validateForm = () => {
    const schema = schemas[0];
    const results = schema.safeParse({
      firstName: data.firstName.value,
      lastName: data.lastName.value,
      email: data.email.value,
    });

    console.log('Validate Form: ', results);
  }

  const validateField = (e: any) => {
    const name = e.target.name;
    const value = e.target.value;
    setData(prev => ({
      ...prev,
      [name]: {
        value: value,
        touched: true,
        valid: value.length > 0
      }
    }));

    console.log('validateField ', e.target);
  }

  const handleChange = (e: any) => {
    // console.log('handleChange in context', e.target.name);
    const type = e.target.type;

    const name = e.target.name;

    const value = type === 'checkbox' ? e.target.checked : e.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));

    setValid((prev) => ({
      ...prev,
      [name]: false,
    }));
  };

  const { ...requiredInputs } = data;

  // console.log('required inputs', requiredInputs);

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
        validateField,
        validateForm,
        submitHide,
        valid,
        setValid
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

export default FormContext;
