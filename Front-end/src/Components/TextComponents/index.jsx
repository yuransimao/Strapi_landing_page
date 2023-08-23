import * as Styled from "./styles" 
import P from "prop-types"



export function TextComponents ({children}){
    return (
        <Styled.Conteiner>
            {children}
        </Styled.Conteiner>
    )
}


TextComponents.propType={
    children: P.node.isRequired
}
