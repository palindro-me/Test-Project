import React from 'react';
// import IconSprite from '../../assets/react.svg'
import IconSprite from '../../assets/images/sprite.svg'

type IconPropsType = {
    iconId: string
    className?: string;
    width?: string
    height?: string
    viewBox?: string
}
export const Icon = (props:IconPropsType ) => {
    return (
        <svg width={props.width || "20"} height={props.height || "20" } className={props.className} viewBox={props.viewBox ||"0 0 120 120" } fill="none"
             xmlns="http://www.w3.org/2000/svg">
            <use href={ `${IconSprite}#${props.iconId}`}/>
        </svg>
    );
};

// xlinkHref