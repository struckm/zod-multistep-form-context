import Form from "./components/Form"
import { FormProvider } from './context/FormContext'
import './App.css';
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
    <ChakraProvider>
      <div className="App">
        <header className="App-header">
          <FormProvider>
            <Form />
          </FormProvider>
        </header>
      </div>
    </ChakraProvider>
  )
}

export default App;
