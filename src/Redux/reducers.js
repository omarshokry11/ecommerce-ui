const initialState = {
    banner: [],
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case "FETCH_BANNER":
            return { ...state, banner: action.payload }

        default:
            return state
    }
}