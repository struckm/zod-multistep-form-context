import useFormContext from '../hooks/useFormContext';
import { Box, Input, Stack } from '@chakra-ui/react';

const Billing = () => {
  const { data, valid, handleChange, validateField } = useFormContext();

  // console.log('data', data);
  console.log('valid', valid);

  return (
    <Box>
      <Stack spacing={10}>
            <Input
              isInvalid={!data.firstName.valid}
              name='firstName'
              errorBorderColor='crimson'
              placeholder='First Name'
              aria-label='First Name'
              onChange={handleChange}
              onBlur={validateField}
              value={data.firstName.value}
            />
            <Input
              isInvalid={!data.lastName.valid}
              name='lastName'
              errorBorderColor='crimson'
              placeholder='Last Name'
              aria-label='Last Name'
              onChange={handleChange}
              onBlur={validateField}
              value={data.lastName.value}
            />
            <Input
              isInvalid={!data.email.valid}
              name='email'
              errorBorderColor='crimson'
              placeholder='Email'
              onChange={handleChange}
              onBlur={validateField}
              value={data.email.value}
            />            
      </Stack>
    </Box>
  );
};
export default Billing;
