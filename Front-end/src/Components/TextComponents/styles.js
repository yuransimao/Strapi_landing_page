import styled,{ css } from "styled-components";

export const Conteiner = styled.p`
    ${({theme}) => css`
    font-size:${theme.font.sizes.medium};
    `}
`