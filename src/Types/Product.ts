export type Data = {
  product: {
    discount: Discount,
    gallery: [
      {
        main: string;
      }
    ];
    name: string;
    options: Options,
    reviews: Reviews;
    shipping: Shipping,
    tags: Tags;
  };
  success: number;
};

export type Tags = [string];

export type Info = {
  info: string;
  value: string;
};

export type Option = {
  label: string;
  old_price: Currency;
  price: Currency;
};

export type Options = {
  "4k": Option;
  "1080p": Option;
  battery_accessories: Option;
}

export type Currency = {
  currency: {
    code: string;
    format: string;
    symbol: string;
  };
  value: number;
};

export type Reviews = {
  count: number;
  rating: string;
  total_buyers: number;
};

export type Discount = {
  amount: string;
  end_date: string;
};

export type Shipping = {
  lead_time: Info;
  method: {
    cost: Currency;
    country: string;
    shipping_time: Info;
    title: string;
  };
  props: Props
};

export type Props = {
  fast_dispatch: boolean;
  in_stock: boolean;
  ready_to_ship: boolean;
};