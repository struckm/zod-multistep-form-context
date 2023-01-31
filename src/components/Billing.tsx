import useFormContext from '../hooks/useFormContext';
import { Box, Input, Stack } from '@chakra-ui/react';

const Billing = () => {
  const { data, handleChange } = useFormContext();

  return (
    <Box>
      <Stack spacing={10}>
            <Input
              name='firstName'
              width='auto'
              errorBorderColor='crimson'
              placeholder='First Name'
              aria-label='First Name'
              onChange={handleChange}
            />
            <Input
              name='lastName'
              errorBorderColor='crimson'
              placeholder='Last Name'
              aria-label='Last Name'
              onChange={handleChange}
            />
            <Input
              name='email'
              errorBorderColor='crimson'
              placeholder='Email'
              onChange={handleChange}
            />            
      </Stack>
    </Box>
  );
};
export default Billing;
