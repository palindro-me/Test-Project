import {theme} from "./Theme";

type fontPropsType = {
    family?: string,
    weight?: number,
    color?: string,
    lineHeight?: number,
    Fmax: number,
    Fmin: number,
}

export const font = ( {family,weight, color, lineHeight,Fmax, Fmin }: fontPropsType ) => `
font-family: ${family || ''};
font-weight: ${weight || 400};
color: ${color || theme.colors.lightTheme.text};
line-height: ${lineHeight || 1.2};
font-size: clamp(${Fmin}px, calc( (100vw - 414px)/ (1440 - 414) * (${Fmax} - ${Fmin}) + ${Fmin}px), ${Fmax}px)
`