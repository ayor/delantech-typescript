import React from 'react';
import styles from './index.module.css';
import classNames from 'classnames';
import { Text } from '../../components/Text';
import { Button } from "../../components/Button";
import { Colors } from "../../theme/colors";

export const Header = () => {
  const handleButtonClick = (): void => {

  }
  return (
    <section
      className={`  h-screen  ${classNames(
        styles.Header
      )}`}
    >
      <div className="flex flex-row h-full justify-center items-center">

        <div className="w-50">
          <Text title="Luxury & Automation"
            fontSize="1rem" color={Colors.delanBlack} letterSpacing={4} />
          <Text title="Smarter, Safer & Secure Homes For You!"

            fontSize="3.125rem"
            color={Colors.delanBlack} letterSpacing={2} fontWeight={800} />
          <Button title="Contact Us" clickEvent={handleButtonClick} />
        </div>

        <div className="">
          <img src='/img/headerImg.png' />
        </div>
      </div>
    </section>
  );
};
