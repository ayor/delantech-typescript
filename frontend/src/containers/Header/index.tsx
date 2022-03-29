import React from 'react';
import styles from './index.module.css';
import classNames from 'classnames';
import { Text } from '../../components/Text';
import { Button } from "../../components/Button";
import { Colors } from "../../theme/colors";

export const Header = (): JSX.Element => {
  const handleButtonClick = (): void => {

  }
  return (
    <section
      className={` d-flex justify-content-end w-100 align-items-center ${classNames(
        styles.Header
      )}`}
    >
      <div className="mr-2 w-50">
        <Text title="Luxury & Automation"
          fontSize={16} color={Colors.delanLight} letterSpacing={4} />
        <Text title="Smarter, Safer & Secure Homes For You!"

          fontSize={50}
          color={Colors.delanWhite} letterSpacing={2} fontWeight={800} />
        <Button title="Contact Us" clickEvent={handleButtonClick} />
      </div>

    </section>
  );
};
