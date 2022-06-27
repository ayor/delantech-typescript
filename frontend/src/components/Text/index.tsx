import React from 'react';

interface TextProps {
  title: string;
  color?: string;
  fontSize?: string;
  textAlign?: string;
  fontWeight?: number;
  letterSpacing?: number;
  classname?: string;
}
export const Text = (props: TextProps) => {
  return (
    <p
      style={{
        color: props.color,
        fontWeight: props.fontWeight || 400,
        letterSpacing: props.letterSpacing || 1,
        fontSize: props.fontSize || 9
      }}
      className={props.classname}
    >
      {props.title}
    </p>
  );
};
