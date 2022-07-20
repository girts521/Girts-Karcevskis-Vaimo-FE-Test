import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";

const Quantity: React.FC<{
  minValue?: number;
  maxValue?: number;
  incrementValue?: number;
}> = ({ minValue = 0, maxValue = 10, incrementValue = 1 }) => {
  const [value, setValue] = useState(0);
  const [{disabledMin, disabledMax}, setDisabled] = useState<{disabledMin: boolean, disabledMax:boolean}>({disabledMin: false, disabledMax: false});

  useEffect(() => {
    if (value === minValue) {
        setDisabled((prevValue) => {
            return {
                disabledMin: true,
                disabledMax: prevValue.disabledMax
            }
        });
        return;
      }
      if (value >= 0) {
        setDisabled((prevValue) => {
            return {
                disabledMin: false,
                disabledMax: prevValue.disabledMax
            }
        });
      }
      if(value === maxValue){
        setDisabled((prevValue) => {
            return {
                disabledMin: prevValue.disabledMin,
                disabledMax: true
            }
        });
      }
      if(value < maxValue){
        setDisabled((prevValue) => {
            return {
                disabledMin: prevValue.disabledMin,
                disabledMax: false
            }
        });
      }
  }, [value])

  const onChangeHandler = (e:any) => {
    console.log(e.target.value === "")
    const checkValue = (valueStr: string) => {
      const value = parseInt(valueStr)
      if(value < minValue || value > maxValue || value === NaN){
        return false
      }else{
        return true
      }
    }

    //to be implemented, this leaves an error if input is deleted and then trying to incerement with value
    if(e.target.value === ""){
      setValue(e.target.value)
      return
    }

    const validInput = checkValue(e.target.value)

  if(validInput === true){
  setValue(parseInt(e.target.value))
  }
  }

  //to be implemented
  // const onBlurHandler = () => {
    //change value state to [prevValue, value]
    //and keep track of the previous value when its changed 
    //here if input is not valid use the prevValue tracked
  // }

  const add = () => {
    if(value === maxValue) return
    setValue((prevValue) => {
      return prevValue + incrementValue;
    });
  };

  const remove = () => {
    if (value === minValue) return
      setValue((prevValue) => {
        return prevValue - incrementValue;
      });
    
  };

  return (
    <div className={styles.qtyContainer}>
      <div onClick={remove} className={`${styles.remove} ${disabledMin ? styles.disabled : ''}`}>
        -
      </div>
      <input onChange={onChangeHandler} type="number"  value={value} />
      <div onClick={add} className={`${styles.add} ${disabledMax ? styles.disabled : ''}`}>
        +
      </div>
    </div>
  );
};

export default Quantity;
