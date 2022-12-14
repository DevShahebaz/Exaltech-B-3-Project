
export const NavigationReducer=(state=[
    {name:"syed shahebaz",link:"http://www.google.com",target:"_blank"},
    {name:"HOME",link:"http://www.google.com",target:"_blank"},
    {name:"About",link:"http://www.google.com",target:"_blank"},
    {name:"Contact Us",link:"http://www.google.com",target:"_blank"},
],action)=>{

    if(action.type === "ADD_LINK"){
        return[...state,action.data]
    }  
    return state;
}