import {TextComponents} from "."

export default {
    tittle : "TextComponents",
    component : TextComponents,
    args:{
        children: "Paragrafo"
    },
    argTypes:{
        children:{type: "string"}
    }
    
}

export const template = (args) =>{
    return(
        <div>
            <TextComponents {...args}/>
        </div>
        
    )
}