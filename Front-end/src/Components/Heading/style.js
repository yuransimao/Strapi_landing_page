import styled ,{css} from "styled-components"

const TitleSize ={
    xsmall: (theme) => css`
    font-size:${theme.font.sizes.xsmall};
    `,
    small:  (theme) => css`
    font-size:${theme.font.sizes.small};`,

    medium :  (theme) => css`
    font-size:${theme.font.sizes.medium};`,

    large: (theme) => css`
    font-size:${theme.font.sizes.large};`,

    xlarge:(theme) => css`
    font-size:${theme.font.sizes.xlarge};`,

    xxlarge: (theme) => css`
    font-size:${theme.font.sizes.xxlarge};`,

    huge : (theme) => css`
    font-size:${theme.font.sizes.huge};
    ${mediaFont(theme)};
    `,

    xhuge : (theme) => css`
    font-size:${theme.font.sizes.xhuge};
    
    `
    
}

const TitleCase = (uppercase) => css`text-transform:${uppercase ? "uppercase" :" none"};`
const mediaFont = (theme) => css`
    @media ${theme.media.IteMedium}{
        font-size:${theme.font.sizes.xlarge};
        background:purple;
    }
`
export const Title = styled.h1`
    ${({theme, colorDark,size,uppercase}) => css` color:${colorDark ? theme.colors.primaryColor: theme.colors.white};
    ${TitleSize[size](theme)};
    ${TitleCase(uppercase)}
    `}
    
`