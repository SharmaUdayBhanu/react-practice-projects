import ButtonContainer from "./components/ButtonContainer";
import Display from "./components/Display";
import styles from "./App.module.css";
import { useState } from "react";



function App() {
  const [calVal, setCalVal] = useState("");
  const onButtonClick =(buttonText) =>{
    if(buttonText ==='C'){
      setCalVal("");
    }else if(buttonText ==='='){
      let result = eval(calVal);
      setCalVal(result);
    }else{
      const newDisplayValue = calVal + buttonText; 
      setCalVal(newDisplayValue);
    }
  }
  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal} />
      <ButtonContainer onButtonClick ={onButtonClick} />
    </div>
  );
}

export default App;
