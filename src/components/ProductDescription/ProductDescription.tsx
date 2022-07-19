import React from "react";
import styles from './styles.module.scss'
import { Tags } from "../../Types/Product";

const ProductDescription: React.FC<{text: String, tags: Tags}> = ({text, tags}) => {

    return (
        <div className={styles.productDescription}>
        <p>
          {text}
        </p>
        {tags.map((tag) => {
        return <div key={`${tag}${Math.random()}`} className={styles.hotSale}>{tag}</div> 
        })}        
      </div>
    )
}

export default ProductDescription