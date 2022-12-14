export const CourseReducer=(state=[{
    courseImg:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKNHB92ePWEQU3819p7mfFS23ru7Pmr73MWlw5rKk&s",
    courseTitle:"HTML",
    courseDesc:"Hyper Text Markup Lanuage"
},
{ courseImg:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",
courseTitle:"CSS",
courseDesc:"Cascading Style Sheet"

},

{ courseImg:"https://i0.wp.com/theicom.org/wp-content/uploads/2016/03/js-logo.png?fit=500%2C500&ssl=1&w=640",
courseTitle:"JS",
courseDesc:"JavaScript"

}
]
,action)=>{
    if(action.type==="ADD_COURSES"){
        return[...state,action.payload]
    }
    return state;
}