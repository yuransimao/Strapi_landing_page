import {Heading} from"."

export default {
    tittle: "Heading",
    component: Heading,
    args :{
        children : "Esta escuro",
        
        
    },
    argTypes:{
        children :{type:"string"}
    },
    parameters:{
        backgrounds:{
            default: "Dark"
        }
    }
}

export const Light = (args) => <Heading {...args}/>
export const Dark = (args) => <Heading {...args} />

Light.parameters ={
    backgrounds: {
        default:"light",
    }
}

Dark.args ={
    children: "Esta claro",
    colorDark : false,
    
}