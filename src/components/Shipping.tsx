import useFormContext from '../hooks/useFormContext';
import { Box, Input, Stack } from '@chakra-ui/react';

const Shipping = () => {
  const { data, handleChange } = useFormContext();

  return (
    <Box>
      <Stack spacing={10}>
            <Input
              name='address'
              width='auto'
              errorBorderColor='crimson'
              placeholder='Address'
              onChange={handleChange}
            />
            <Input
              name='city'
              errorBorderColor='crimson'
              placeholder='City'
              onChange={handleChange}
            />
            <Input
              name='zip'
              errorBorderColor='crimson'
              placeholder='Zip'
              onChange={handleChange}
            />            
      </Stack>
    </Box>
  );
};
export default Shipping;
