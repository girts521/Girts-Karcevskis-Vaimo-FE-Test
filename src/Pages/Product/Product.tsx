import React from "react";
import Badges from "../../components/Badges/Badges";
import Discount from "../../components/Discount/Discount";
import Expo from "../../components/Expo/Expo";
import Price from "../../components/Price/Price";
import ProductChoice from "../../components/ProductChoice/ProductChoice";
import ProductDescription from "../../components/ProductDescription/ProductDescription";
import Ratings from "../../components/Ratings/Ratings";
import styles from "./styles.module.scss";

const Product: React.FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.image}>
        <img src="drone.jpeg" alt="drone" />
      </div>

      <div className={styles.productInfo}>
        <Badges />

        <ProductDescription />

        <Ratings />

        <Price />

        <Expo />

        <Discount />

        <div className={styles.productChoiceContainer}>
        <ProductChoice />
        <ProductChoice />
        <ProductChoice />
        </div>

        <div className={styles.tradeAssurance}>
          <svg
            width="12px"
            height="14px"
            viewBox="0 0 12 14"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Mobile"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Product-Detail-Page"
                transform="translate(-13.000000, -869.000000)"
                fillRule="nonzero"
              >
                <g id="Info-Box" transform="translate(-0.000000, 372.000000)">
                  <g
                    id="Trade-Assurance"
                    transform="translate(12.000000, 496.000000)"
                  >
                    <g
                      id="icons8-security_lock"
                      transform="translate(1.400000, 1.000000)"
                    >
                      <path
                        d="M11.1961026,2.8 C11.1961026,2.8 11.5457526,10.85 5.66050258,14 C-0.345847416,10.85 0.00380258408,2.8 0.00380258408,2.8 C2.80205258,2.8 5.59995258,0 5.59995258,0 C5.59995258,0 8.04820258,2.8 11.1961026,2.8 Z"
                        id="Path"
                        fill="#FFC107"
                      ></path>
                      <path
                        d="M6.99995258,5.6 C6.99995258,4.82685 6.37310258,4.2 5.59995258,4.2 C4.82680258,4.2 4.19995258,4.82685 4.19995258,5.6 C4.19995258,6.1145 4.48065258,6.55935 4.89435258,6.8026 L4.19995258,9.45 L6.99995258,9.45 L6.30555258,6.8026 C6.71925258,6.55935 6.99995258,6.1145 6.99995258,5.6 Z"
                        id="Path"
                        fill="#5D4037"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>

          <div>
            Trade Assurance <span> protects your Alibaba.com orders</span>
          </div>
        </div>

        <div className={styles.payments}>
          <p>Payments: </p>

          <svg
            width="17px"
            height="12px"
            viewBox="0 0 17 12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Mobile"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Product-Detail-Page"
                transform="translate(-72.000000, -898.000000)"
                fillRule="nonzero"
              >
                <g id="Info-Box" transform="translate(-0.000000, 372.000000)">
                  <g id="Payments" transform="translate(12.000000, 524.000000)">
                    <g
                      id="icons8-visa"
                      transform="translate(60.000000, 2.000000)"
                    >
                      <path
                        d="M16.8,10.4 C16.8,11.2836 16.0836,12 15.2,12 L1.6,12 C0.7164,12 0,11.2836 0,10.4 L0,1.6 C0,0.7164 0.7164,0 1.6,0 L15.2,0 C16.0836,0 16.8,0.7164 16.8,1.6 L16.8,10.4 Z"
                        id="Path"
                        fill="#1565C0"
                      ></path>
                      <path
                        d="M4.8744,4 L3.824,7.1328 C3.824,7.1328 3.5572,5.8076 3.5308,5.6412 C2.9328,4.2768 2.0504,4.3528 2.0504,4.3528 L3.0904,8.4 L3.0904,8.3992 L4.3548,8.3992 L6.1032,4 L4.8744,4 Z M5.8756,8.4 L7.024,8.4 L7.7184,4 L6.5556,4 L5.8756,8.4 Z M14.0032,4 L12.7948,4 L10.9108,8.4 L12.0516,8.4 L12.2868,7.7716 L13.7252,7.7716 L13.8476,8.4 L14.8928,8.4 L14.0032,4 Z M12.6052,6.9312 L13.2304,5.2684 L13.5576,6.9312 L12.6052,6.9312 Z M9.3476,5.2824 C9.3476,5.04 9.5468,4.8596 10.118,4.8596 C10.4892,4.8596 10.9144,5.1292 10.9144,5.1292 L11.1008,4.2056 C11.1008,4.2056 10.5576,3.9996 10.0244,3.9996 C8.8168,3.9996 8.194,4.5772 8.194,5.3084 C8.194,6.6308 9.7856,6.4496 9.7856,7.1288 C9.7856,7.2452 9.6932,7.5144 9.0304,7.5144 C8.3656,7.5144 7.9268,7.2708 7.9268,7.2708 L7.7288,8.1572 C7.7288,8.1572 8.154,8.3996 8.9756,8.3996 C9.7992,8.3996 10.9416,7.7836 10.9416,6.8988 C10.9416,5.8344 9.3476,5.7576 9.3476,5.2824 Z"
                        id="Shape"
                        fill="#FFFFFF"
                      ></path>
                      <path
                        d="M3.6848,6.378 L3.2984,4.4788 C3.2984,4.4788 3.1236,4.0672 2.6692,4.0672 C2.2148,4.0672 0.8932,4.0672 0.8932,4.0672 C0.8932,4.0672 3.1576,4.736 3.6848,6.378 Z"
                        id="Path"
                        fill="#FFC107"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>

          <svg
            width="18px"
            height="12px"
            viewBox="0 0 18 12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Mobile"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Product-Detail-Page"
                transform="translate(-92.000000, -898.000000)"
                fillRule="nonzero"
              >
                <g id="Info-Box" transform="translate(-0.000000, 372.000000)">
                  <g id="Payments" transform="translate(12.000000, 524.000000)">
                    <g
                      id="icons8-mastercard"
                      transform="translate(80.800000, 2.000000)"
                    >
                      <path
                        d="M16.8,10.4 C16.8,11.2836 16.0836,12 15.2,12 L1.6,12 C0.7164,12 0,11.2836 0,10.4 L0,1.6 C0,0.7164 0.7164,0 1.6,0 L15.2,0 C16.0836,0 16.8,0.7164 16.8,1.6 L16.8,10.4 Z"
                        id="Path"
                        fill="#3F51B5"
                      ></path>
                      <path
                        d="M10.8,2 C8.590861,2 6.8,3.790861 6.8,6 C6.8,8.209139 8.590861,10 10.8,10 C13.009139,10 14.8,8.209139 14.8,6 C14.8,3.790861 13.009139,2 10.8,2 Z"
                        id="Path"
                        fill="#FFC107"
                      ></path>
                      <path
                        d="M7.6056,8.4 C7.42,8.1532 7.2604,7.8864 7.1352,7.6 L9.2652,7.6 C9.3764,7.3456 9.4636,7.0784 9.52,6.8 L6.8808,6.8 C6.828,6.5416 6.8,6.2744 6.8,6 L9.6,6 C9.6,5.7256 9.572,5.4584 9.5196,5.2 L6.8804,5.2 C6.9372,4.9216 7.024,4.6544 7.1352,4.4 L9.2652,4.4 C9.14,4.1136 8.9808,3.8468 8.7948,3.6 L7.6056,3.6 C7.7804,3.368 7.9776,3.1512 8.198,2.962 C7.4988,2.3636 6.5924,2 5.6,2 C3.3908,2 1.6,3.7908 1.6,6 C1.6,8.2092 3.3908,10 5.6,10 C6.9076,10 8.0648,9.37 8.7944,8.4 L7.6056,8.4 Z"
                        id="Path"
                        fill="#FF3D00"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>

          <svg
            width="30px"
            height="12px"
            viewBox="0 0 30 12"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g
              id="Mobile"
              stroke="none"
              strokeWidth="1"
              fill="none"
              fillRule="evenodd"
            >
              <g
                id="Product-Detail-Page"
                transform="translate(-113.000000, -898.000000)"
                fill="#4B4B4B"
                fillRule="nonzero"
              >
                <g id="Info-Box" transform="translate(-0.000000, 372.000000)">
                  <g id="Payments" transform="translate(12.000000, 524.000000)">
                    <g
                      id="icons8-apple_pay"
                      transform="translate(101.600000, 2.000000)"
                    >
                      <path
                        d="M5.19176718,1.566 C4.85636718,1.9764 4.31996718,2.3004 3.78296718,2.2536 C3.71636718,1.6992 3.97916718,1.1088 4.28696718,0.7452 C4.62176718,0.3234 5.20856718,0.0228 5.68376718,0 C5.73956718,0.5778 5.52176718,1.1442 5.19176718,1.566 M5.62136718,2.541 C4.83896718,2.541 4.27916718,2.9646 3.91376718,2.9646 C3.54236718,2.9646 2.98856718,2.5464 2.34836718,2.5464 C1.56596718,2.5464 0.79976718,3.0336 0.39536718,3.744 C-0.43503282,5.1642 0.17936718,7.2672 0.98216718,8.4234 C1.37576718,8.9958 1.85036718,9.6 2.49056718,9.6 C3.07736718,9.5778 3.27596718,9.2472 3.98456718,9.2472 C4.69856718,9.2472 4.90976718,9.6 5.54996718,9.6 C6.19016718,9.6 6.57836718,9.018 6.97136718,8.445 C7.42016718,7.7958 7.60256718,7.1622 7.61336718,7.1292 C7.60256718,7.1184 6.37376718,6.6504 6.36236718,5.241 C6.35156718,4.0632 7.33136718,3.501 7.37576718,3.468 C6.82196718,2.6538 5.90576718,2.5404 5.69276718,2.5404 L5.62136718,2.5404 L5.62136718,2.541 Z M13.6127672,1.2 L10.3499672,1.2 L10.3499672,9.5994 L11.7089672,9.5994 L11.7089672,6.7998 L13.5683672,6.7998 C15.2747672,6.7998 16.5005672,5.6376 16.5005672,4.0002 C16.5005672,2.3628 15.2969672,1.2 13.6127672,1.2 Z M13.2821672,5.6796 L11.7089672,5.6796 L11.7089672,2.3196 L13.2821672,2.3196 C14.4533672,2.3196 15.1415672,2.9382 15.1415672,3.9996 C15.1415672,5.061 14.4587672,5.6796 13.2821672,5.6796 Z M19.6511672,3.3 C18.2171672,3.3 17.1575672,4.0944 17.1179672,5.1864 L18.3341672,5.1864 C18.4343672,4.6674 18.9311672,4.3272 19.6121672,4.3272 C20.4377672,4.3272 20.9045672,4.6998 20.9045672,5.3868 L20.9051672,5.8608 L19.2167672,5.949 C17.6483672,6.0408 16.7999672,6.663 16.7999672,7.7442 C16.7999672,8.8362 17.6759672,9.561 18.9311672,9.561 C19.7789672,9.561 20.5661672,9.1452 20.9225672,8.4852 L20.9501672,8.4852 L20.9501672,9.4962 L22.1999674,9.4962 L22.1999674,5.301 C22.2005672,4.0836 21.1961672,3.3 19.6511672,3.3 Z M20.9003672,7.2084 C20.9003672,7.998 20.2085672,8.5602 19.2935672,8.5602 C18.5741672,8.5602 18.1163672,8.2248 18.1163672,7.7118 C18.1163672,7.182 18.5567672,6.8742 19.3997672,6.825 L20.9045672,6.7146 L20.9003672,7.2084 Z M27.4145672,3.3 L25.8095672,8.4528 L25.7819672,8.4528 L24.1763672,3.3 L22.7519672,3.3 L25.0607672,9.6504 L24.9371672,10.0368 C24.7283672,10.6914 24.3911672,10.9434 23.7887672,10.9434 C23.6855672,10.9434 23.4905672,10.9332 23.4005672,10.9218 L23.4005672,11.9688 C23.4911672,11.9892 23.8079672,12 23.9063672,12 C25.2353672,12 25.8599672,11.4966 26.4065672,9.969 L28.7999672,3.3 L27.4145672,3.3 Z"
                        id="Shape"
                      ></path>
                    </g>
                  </g>
                </g>
              </g>
            </g>
          </svg>
        </div>

        <div className={styles.links}>
          <a href="">Alibaba.com Logistics</a>
          <a href="">Inspection Solutions</a>
        </div>

        <div className={styles.addToContainer}>
          <div className={styles.shipping}>
            <div className={styles.shippingText}>
              Ship to <span> South Africa by Express UPS Sav…</span>
            </div>

            <div className={styles.shippingPrice}>R 6,036.74</div>
          </div>

          <div className={styles.leadTime}>
            <p>
              Lead Time <span>10</span> days
            </p>
            <img src="info.png" alt="info" />
          </div>

          <div className={styles.shippingTime}>
            <p>
              {" "}
              Shipping time <span> 6-10</span> days
            </p>
            <img src="info.png" alt="" />
          </div>

          <div className={styles.loginBtn}>Login to Purchase</div>

          <div className={styles.contactBtn}>
            <img src="contact.png" alt="" />
            Contact the Supplier
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
