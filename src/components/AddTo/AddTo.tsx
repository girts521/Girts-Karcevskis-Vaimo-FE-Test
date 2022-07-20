import React, { useEffect, useState } from "react";
import { Shipping } from "../../Types/Product";
import styles from "./styles.module.scss";
import { useDispatch, useSelector } from "react-redux";


const AddTo: React.FC<{shipping: Shipping}  > = ({shipping}) => {
  const [totalPrice, setTotalPrice] = useState(0)

  const cartDataInRedux = useSelector((state: any) => state.cart);


useEffect(() => {
  console.log('shipping',shipping)
  let totalPice:number = 0
  // console.log(cartDataInRedux.cart)

  const calculatePrice = () => {
    cartDataInRedux.cart.forEach((item:any) => {
      const optionPrice = item.price * item.value
      totalPice = totalPice + optionPrice
    })
    console.log(totalPice)
  }
  calculatePrice()
  console.log('total', totalPice)
  setTotalPrice(totalPice)

},[cartDataInRedux])

  return (
    <div className={styles.addToContainer}>
      {cartDataInRedux.cart.length && cartDataInRedux.cart.map((item:any) =>{
        return <div>{item.option} {`${(item.value * item.price).toFixed(2)}`}</div>
      })}
      {totalPrice && totalPrice.toFixed(2)}
      <div className={styles.shipping}>
        <div className={styles.shippingText}>
          Ship to <span> {shipping.method.country} by {shipping.method.title}</span>
        </div>

        <div className={styles.shippingPrice}>{shipping.method.cost.currency.symbol} {shipping.method.cost.value.toFixed(2)}</div>
      </div>

      <div className={styles.leadTime}>
        <p>
          Lead Time <span>{shipping.lead_time.value}</span> days
        </p>
        <img src="info.png" alt="info" />
      </div>

      <div className={styles.shippingTime}>
        <p>
          {" "}
          Shipping time <span>{shipping.method.shipping_time.value}</span> days
        </p>
        <img src="info.png" alt="" />
      </div>

      <div className={styles.loginBtn}>Login to Purchase</div>

      <div className={styles.contactBtn}>
        <img src="contact.png" alt="" />
        Contact the Supplier
      </div>
    </div>
  );
};

export default AddTo;
