export type Data = {
  product: {
    discount: {
      amount: string;
      end_data: string;
    };
    gallery: [
      {
        main: string;
      }
    ];
    name: string;
    options: Options,
    reviews: Reviews;
    shipping: {
      lead_time: Info;
      method: {
        cost: Currency;
        country: string;
        shipping_time: Info;
        title: string;
      };
      props: {
        fast_dispatch: Boolean;
        in_stock: Boolean;
        ready_to_ship: Boolean;
      };
    };
    tags: Tags;
  };
  success: Number;
};

export type Tags = [string];

export type Info = {
  info: string;
  value: string;
};

export type Option = {
  label: string;
  old_prices: Currency;
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
  value: Number;
};

export type Reviews = {
  count: Number;
  rating: string;
  total_buyers: Number;
};
