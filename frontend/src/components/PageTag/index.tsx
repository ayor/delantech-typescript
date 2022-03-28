import {Colors}from '../../theme/colors'; 

interface pageTagProp{
    tagName:string; 
} 

export const PageTag = ( props:pageTagProp ): JSX.Element=>{
    return (
        <div style={{
            borderLeft:`5px solid ${Colors.delanBlue}`,
            paddingLeft:5
        }}>
           <span style={{color: Colors.delanGray}}>{props.tagName}</span> 
        </div>
    )
}