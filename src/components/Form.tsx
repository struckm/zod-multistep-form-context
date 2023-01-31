import FormInputs from './FormInputs';
import useFormContext from '../hooks/useFormContext';
import { Button, ButtonGroup } from '@chakra-ui/react'

const Form = () => {
  const {
    page,
    setPage,
    data,
    title,
    validateForm,
    canSubmit,
    disablePrev,
    disableNext,
    prevHide,
    nextHide,
    submitHide
  } = useFormContext();

  const handlePrev = () => setPage((prev) => prev - 1);

  const handleNext = () => setPage((prev) => prev + 1);

  const handleSubmit = (e: any) => {
    // trigger validation for the current form.
    e.preventDefault();
    validateForm();
  };

  return (
    <form className="form flex-col" onSubmit={handleSubmit}>
      <header className="form-header">
        <h2>{title[page]}</h2>

        <div className="button-container">
          <ButtonGroup variant='solid' spacing='6'>
            <Button colorScheme='blue' onClick={handlePrev}>Prev</Button>
            <Button colorScheme='blue' onClick={handleNext}>Next</Button>
            <Button type='submit' colorScheme='whatsapp'>Submit</Button>
          </ButtonGroup>
          {/* <button
            type="button"
            className={`button ${prevHide}`}
            onClick={handlePrev}
            disabled={disablePrev}
          >
            Prev
          </button>

          <button
            type="button"
            className={`button ${nextHide}`}
            onClick={handleNext}
            disabled={disableNext}
          >
            Next
          </button> */}

          {/* <button type="submit" className={`button ${submitHide}`} disabled={!canSubmit}>
            Submit
          </button> */}
        </div>
      </header>

      <FormInputs />
    </form>
  );
};
export default Form;
