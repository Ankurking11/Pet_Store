export const WHATSAPP_BASE =
  "https://wa.me/918484086474?text=Hi%20I%20want%20to%20order%20for%20my%20pet";

export const formatCurrency = (value: number) =>
  new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(value);

export const getDiscountedPrice = (price: number, discount: number) =>
  Math.round(price * (1 - discount / 100));

export const getOrderLink = (productName?: string) => {
  if (!productName) return WHATSAPP_BASE;
  return `https://wa.me/918484086474?text=${encodeURIComponent(`Hi, I want to order ${productName} for my pet.`)}`;
};

export const cn = (...classes: Array<string | false | null | undefined>) =>
  classes.filter(Boolean).join(" ");
