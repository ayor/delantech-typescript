import { BooleanLiteral } from "typescript";

export const convert = (price: number): string => {
    return new Intl.NumberFormat("en-us", {
        currency: "NGN",
        style: "currency"
    }).format(price);
}

export const validateEmail = (email:string): boolean => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };
  