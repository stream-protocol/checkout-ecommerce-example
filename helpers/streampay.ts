import { StreamPay } from "@streampay/checkout-sdk";

export const streampay = new StreamPay({
  api_key: process.env.STREAMPAY_PRIVATE_API_KEY!,
  network: "mainnet",
  config: {
    collect_shipping_address: false,
  },
});
