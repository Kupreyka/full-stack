const SET_DATA_AD_PAGE = 'adpage/SET_DATA_AD_PAGE'
const SET_MESSAGE_DATA = 'adpage/SET_MESSAGE_DATA'

const initialState = {
    animalImg: null,
    animalName: null,
    streetAddress: null,
    city: null,
    phoneNumber: null,
    data: null,
    description: null,
    messageData: []
}

export const adPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA_AD_PAGE:
            return {
                ...state,
                animalImg: action.animalImg,
                animalName: action.animalName,
                streetAddress: action.streetAddress,
                city: action.city,
                phoneNumber: action.phoneNumber,
                data: action.data,
                description: action.description
            }
        case SET_MESSAGE_DATA:
            let stateCopy = {...state}
            stateCopy.messageData = [...state.messageData]
            stateCopy.messageData.push(
                {name: action.name, phone: action.phone, comment: action.comment}
            );
            return stateCopy;
        default:
            return state
    }
}

export const setAdPageData = (animalImg, animalName, streetAddress, city, phoneNumber, data, description) => ({
    type: SET_DATA_AD_PAGE,
    animalImg,
    animalName,
    streetAddress,
    city,
    phoneNumber,
    data,
    description
})

export const setMessageData = (name, phone, comment) => ({type: SET_MESSAGE_DATA, name, phone, comment})
