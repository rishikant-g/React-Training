export function AuthReducer(state = {
        isLoggedIn: localStorage.email,
        user: localStorage.user  && JSON.parse(localStorage.user)
    } , action){
        switch(action.type){
            case "LOGIN": {
                console.log("request reach in auth reducer",state,action)
                state = {...state}
                state['user'] = action.payload
                state["isLoggedIn"] = true
                console.log("auth reducer done it's job",state,action)
                return state
            }
            case "LOGOUT": {
                state = {...state}
                delete state['user']
                state["isLoggedIn"] = false
                return state;
            }
            default: return state
        }
}