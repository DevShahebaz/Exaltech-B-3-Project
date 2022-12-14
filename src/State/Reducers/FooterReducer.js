export const FooterReducer=(state=[{
    footerImg:"https://www.exaltech.it/wp-content/uploads/2020/03/logo_optim.png",
    footerTitle:"SoftWere Classes",
    footerDesc:"Best Classes WebDevloper Hub In Nanded"
}],action)=>{
    if(action.type==="ADD_FOOTER"){
        return[...state,action.payload]
    }
    return state;
}