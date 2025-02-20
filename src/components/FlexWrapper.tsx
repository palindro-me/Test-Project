import styled from "styled-components";

type FlexWrapperPropsType = {
    direction?: string
    justify?: string
    align?: string
    wrap?: string
    gap?: string
    maxWidth?: string


}
export const FlexWrapper = styled.div<FlexWrapperPropsType>`
    display: flex;
    flex-wrap: ${props => props.wrap || 'nowrap'};
    flex-direction: ${props => props.direction || 'row'};
    justify-content: ${props => props.justify || 'flex-start'};
    align-items: ${props => props.align || 'stretch'};
    gap: ${props => props.gap || '0'};
    max-width: ${props => props.maxWidth || '100%'};
`