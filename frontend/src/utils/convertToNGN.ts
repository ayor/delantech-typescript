export const convert = (price: number): string => {
    return new Intl.NumberFormat("en-us", {
        currency: "NGN",
        style: "currency"
    }).format(price);
}