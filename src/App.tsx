import { useRef, useState } from 'react'
import './App.css'
import { Form } from './Components/Form/Form'
import { validateHex } from './validate';

function App() {

  interface Iname {
    name: string
  }

  const [, setColor] = useState<Iname>({name: '#000000'});

  const validate = useRef<number[] | false>([]);

  const handleChangeColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (value.length >= 7) {
      validate.current = validateHex(value);
      setColor(() => ({name: value}));
    }
  }

  return (
    <>
      <Form color={validate.current} changeColor={handleChangeColor}/>
    </>
  )
}

export default App