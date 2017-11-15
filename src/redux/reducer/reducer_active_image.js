
const defaultState={
    images:[
        {"title":"butterfly","description":"colourful butterfly", "source":require("../../images/butterfly.jpg")},
        {"title":"nature","description":"beautiful fall", "source":require("../../images/fall.jpg")},
        {"title":"winter","description":"snow", "source":require("../../images/snow.jpg")},
        {"title":"umbrella","description":"colourful umbrella", "source":require("../../images/umbrella.jpg")},
        {"title":"skyline","description":"NYC skyline", "source":require("../../images/skyline.jpg")},
        {"title":"car","description":"red car", "source":require("../../images/car.jpg")}
    ],
    defaultImage:{"title":"butterfly","description":"colourful butterfly", "source":require("../../images/butterfly.jpg")},
}

export default function(state=defaultState, action){
    switch(action.type){
    case'SELECT_IMAGE':
        return {...state, selectedImage: action.payload}

    default:
        return state;
    }
}
