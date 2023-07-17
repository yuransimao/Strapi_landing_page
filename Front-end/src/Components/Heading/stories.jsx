import {Heading} from"."

export default {
    tittle: "Heading",
    component: Heading,
    args :{
        children : "Nao sei"
    }
}

export const Template = (args) => <Heading {...args}/>