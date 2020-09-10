export const initialState = {
    user: null, 
    playlists: [],
    playing: false,
    item : null,
    token:'BQD86LTgxApIHHDY6S6AsqG9TGeZ4mSgoJj4HDkBM4Prqbbhe0FXtTgaqFUFCWRrh8X4aqMMo7w-KJIzG7LLpyg_7yPV2MVGh79LpaICXRM0e3b1OXfC0W5_eY3thU3HvyrfvJo-y4BjxS60nYcLwjZ6Cldgtzp5ZwSNfS6XoWa_9JQgyfCg'
};

export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return{
                ...state,
                user:action.user
            }
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            }
        default:
            return state;
    }
}

