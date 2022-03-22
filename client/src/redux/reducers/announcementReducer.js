const SET_DATA = 'announcement/SET_DATA'

const initialState = {
    data: null
}

export const announcementReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                data: action.data
            }
        default:
            return state
    }
}

export const setData = (data) => ({type: SET_DATA, data})
