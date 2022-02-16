import { SHOW } from "../constants/constants"

const initialState = {
    dialogeShow: false
}

const dialogeReducer = (state = initialState, action) => {
    switch (action.type) {
        case SHOW:
            return {
                ...state,
                dialogeShow: action.payload
            }
         default: return state
    }
}

export default dialogeReducer;