import React from 'react';
import styles from './index.module.css';
import classNames from 'classnames';
import { Colors } from "../../theme/colors";


interface ButtonProps{
    title:string;
    fontSize?:string;
    clickEvent: React.MouseEventHandler;
}

export const Button = (props:ButtonProps): JSX.Element=>{
    return(
    <button onClick={props.clickEvent} className={`btn ${classNames(styles.Btn)}`} style={{
        backgroundColor:Colors.delanBlue,
        fontSize:props.fontSize,
    }}>
        <span>{props.title}</span>
    </button>
    )
}