const SET_DATA_AD_PAGE = 'adpage/SET_DATA_AD_PAGE'

const initialState = {
    animalImg: null,
    animalName: null,
    streetAddress: null,
    city: null,
    phoneNumber: null,
    data: null,
    description: null
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
