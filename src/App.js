import {Container , Content, Rows} from "./style"
import Input from './components/screen';
import Button from './components/button';
import { useState } from "react";

const App = () => {
  const [display, setDisplay] = useState('');

  const handleNum = value => {
    setDisplay(prev => prev + value);
  }

  const handleOperation = op => {
    if (op === 'C') {
      setDisplay('');
    } else if (op === '=') {
      try {
        const result = eval(display);
        setDisplay(String(result));
      } catch (error) {
        setDisplay('Erro');
      }
    } else {
      setDisplay(prev => prev + op);
    }
  }

  return (
    <Container>
      <Content>
        <Input value={display}/>
        <Rows>
          <Button onClick={() => handleNum("7")} label={"7"}/>
          <Button onClick={() => handleNum("8")} label={"8"}/>
          <Button onClick={() => handleNum("9")} label={"9"}/>
          <Button onClick={() => handleOperation("-")} label={"-"}/>
        </Rows>
        <Rows>
          <Button onClick={() => handleNum("4")} label={"4"}/>
          <Button onClick={() => handleNum("5")} label={"5"}/>
          <Button onClick={() => handleNum("6")} label={"6"}/>
          <Button onClick={() => handleOperation("+")} label={"+"}/>
        </Rows>
        <Rows>
          <Button onClick={() => handleNum("1")} label={"1"}/>
          <Button onClick={() => handleNum("2")} label={"2"}/>
          <Button onClick={() => handleNum("3")} label={"3"}/>
          <Button onClick={() => handleOperation("*")} label={"*"}/>
        </Rows>
        <Rows>
          <Button onClick={() => handleNum("0")} label={"0"}/>
          <Button onClick={() => handleOperation("C")} label={"C"}/>
          <Button onClick={() => handleOperation("=")} label={"="}/>
          <Button onClick={() => handleOperation("/")} label={"/"}/>
        </Rows>
      </Content>
    </Container>
  );
}

export default App;

