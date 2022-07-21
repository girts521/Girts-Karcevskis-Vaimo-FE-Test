import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { cartActions } from "../../store/cart";

const Quantity: React.FC<{
  minValue?: number;
  maxValue?: number;
  incrementValue?: number;
  option: string;
  price: number;
}> = ({ minValue = 0, maxValue = 10, incrementValue = 1, option, price }) => {
  const [value, setValue] = useState<number>(0);
  const [{ disabledMin, disabledMax }, setDisabled] = useState<{
    disabledMin: boolean;
    disabledMax: boolean;
  }>({ disabledMin: false, disabledMax: false });
  const dispatch = useDispatch();
  const cartDataInRedux = useSelector((state: any) => state.cart);

  useEffect(() => {
    if (value === minValue) {
      setDisabled((prevValue) => {
        return {
          disabledMin: true,
          disabledMax: prevValue.disabledMax,
        };
      });
      return;
    }
    if (value >= 0) {
      setDisabled((prevValue) => {
        return {
          disabledMin: false,
          disabledMax: prevValue.disabledMax,
        };
      });
    }
    if (value === maxValue) {
      setDisabled((prevValue) => {
        return {
          disabledMin: prevValue.disabledMin,
          disabledMax: true,
        };
      });
    }
    if (value < maxValue) {
      setDisabled((prevValue) => {
        return {
          disabledMin: prevValue.disabledMin,
          disabledMax: false,
        };
      });
    }
  }, [value]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const checkValue = (valueStr: string) => {
      const value = parseInt(valueStr);
      if (value < minValue || value > maxValue || value === NaN) {
        return false;
      } else {
        return true;
      }
    };
    //to be implemented, handle an empty input "" which causes a temporary error of NaN as value
    const validInput = checkValue(e.target.value);
    if (validInput === true) {
      setValue(parseInt(e.target.value));
    } else {
      //to be implementer: an error message that the input is not valid
    }
  };

  //to be implemented
  const onBlurHandler = (e: any) => {
    // change value state to [prevValue, value]
    // and keep track of the previous value when its changed
    // here if input is not valid use the prevValue tracked
    if (value === 0 || !value) {
      dispatch(cartActions.removeFromCart({ option, remove: true }));
      setValue(0);
      return;
    }
    dispatch(cartActions.addToCart({ option, value: value, price }));
  };

  const add = () => {
    if (value === maxValue) return;
    setValue((prevValue) => {
      return prevValue + incrementValue;
    });
    dispatch(cartActions.addToCart({ option, value: value + 1, price }));
  };

  const remove = () => {
    if (value === minValue) return;
    setValue((prevValue) => {
      return prevValue - incrementValue;
    });
    dispatch(cartActions.removeFromCart({ option: option }));
  };

  return (
    <div className={styles.qtyContainer}>
      <div
        onClick={remove}
        className={`${styles.remove} ${disabledMin ? styles.disabled : ""}`}
      >
        -
      </div>
      <input
        onBlur={onBlurHandler}
        onChange={onChangeHandler}
        type="number"
        value={value}
      />
      <div
        onClick={add}
        className={`${styles.add} ${disabledMax ? styles.disabled : ""}`}
      >
        +
      </div>
    </div>
  );
};

export default Quantity;
