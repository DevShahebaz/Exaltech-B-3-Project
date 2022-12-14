export const CarouselReducer=(state=[{
    carouselImage:"https://media.istockphoto.com/photos/coding-man-picture-id875113032",
    carouselTitle:"First slide",
    carouselDesc:"Beatiful",


},
{ carouselImage:"https://c0.wallpaperflare.com/preview/672/984/942/laptop-computer-keyboard-technology.jpg",
carouselTitle:"Second slide",
carouselDesc:"Beatiful",
},
{ carouselImage:"https://miro.medium.com/max/1400/1*G6ewNbWb86sD6sSRDTEa4w.jpeg",
carouselTitle:"Third slide",
carouselDesc:"Beatiful",
}
]
,action)=>{
    if(action.type==="ADD_CAROUSEL"){
        return[...state,action.payload]
    }
    return state;
    
}