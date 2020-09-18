export const initialState = {
    user: null, 
    playlists: [],
    playing: false,
    item : null,
    //remove after development
   // token:'BQDo-iP136wm35x775a71Fzp2npKzGsp2oXPgJhdZ8kXsO7A-AY8KktTSq2XVtwLLUI2Yt7YlPgFX67ly45Wu0jgIrLaNjEjFinfzPZ_l_m1Z51fJ8ytfaiQkj_xfWLbzkQzjr4kwqdi4WKt3ACAlkAByMtUin_PeX5_UxHR_iGSIDPvOL3t'
};

export const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case "SET_USER":
            return {
                ...state,
                user:action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token
            };
            
        case "SET_PLAYLISTS":
            return{
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return{
                ...state,
                discover_weekly: action.discover_weekly
            }    

        default: return state;
    }
}

