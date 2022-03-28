import React from 'react';

interface TextProps {
  title: string;
  color: string;
  fontSize?:number;
  textAlign?:string;
  fontWeight?: number;
  letterSpacing?: number;
}
export const Text = (props: TextProps): JSX.Element => {
  return (
    <div
      style={{
        color: props.color,
        fontWeight: props.fontWeight || 400,
        letterSpacing: props.letterSpacing || 1,
        fontSize:props.fontSize || 9
      }}
    >
      {props.title}
    </div>
  );
};
