import { createContext, useReducer } from "react";
import actionTypes from "./actions/actionTypes";

const initialState = {
    photos: [],
    isLoading: true
};

const PhotoContext = createContext(initialState);

const photoReducer = (state={}, action={}) => {
    switch (action.type) {
        case actionTypes.SET_PHOTOS:
            return {
                ...state,
                photos: action.payload,
                isLoading: false
            };
        case actionTypes.CLEAR_PHOTOS:
            return initialState;
        default:
            return state;
    }
};

const PhotoContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(photoReducer, initialState);

    return (
        <PhotoContext.Provider value={[state, dispatch]}>
            {children}
        </PhotoContext.Provider>
    );
};

export { PhotoContext, PhotoContextProvider};