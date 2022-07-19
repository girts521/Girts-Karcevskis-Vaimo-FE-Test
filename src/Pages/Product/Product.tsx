import React, { useEffect, useState } from "react";
import AddTo from "../../components/AddTo/AddTo";
import AssuranceAndPayments from "../../components/AssuranceAndPayments/AssuranceAndPayments";
import Badges from "../../components/Badges/Badges";
import Discount from "../../components/Discount/Discount";
import Expo from "../../components/Expo/Expo";
import Price from "../../components/Price/Price";
import ProductChoice from "../../components/ProductChoice/ProductChoice";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import Ratings from "../../components/Ratings/Ratings";
import styles from "./styles.module.scss";
import { Data } from "../../Types/Product";

const Product: React.FC = () => {
  const [productData, setProductData] = useState<Data | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://fe-assignment.vaimo.net/");
      const data: Data = await res.json();
      if (data.success === 1) {
        setProductData(data);
        // console.log(data)
      }
    };
    try {
      fetchData();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className={styles.container}>
     {productData && productData.success ? (
        <>
         <div className={styles.image}>
        <img src="drone.jpeg" alt="drone" />
      </div>

      <div className={styles.productInfo}>
        <Badges />
        <ProductDescription text={productData!.product.name} tags={productData!.product.tags}/>
        <Ratings reviews={productData!.product.reviews} />
        <Price options={productData!.product.options}/>
        <Expo />
        <Discount />
        <div className={styles.productChoiceContainer}>
          <ProductChoice />
          <ProductChoice />
          <ProductChoice />
        </div>
        <AssuranceAndPayments />
        <div className={styles.links}>
          <a href="">Alibaba.com Logistics</a>
          <a href="">Inspection Solutions</a>
        </div>
        <AddTo
          func={() => {
            console.log(productData?.product);
          }}
        />
      </div>
        </>
     ) : 'Loading...'}
    </div>
  );
};

export default Product;
