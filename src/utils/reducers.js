const INITIAL_STATE = {
    list: []
}
export default (state = INITIAL_STATE,action) => {
    switch(action.type){
        case 'UPDATE_LIST':
            return {...state,list: action.payload}
        default:
            return state
    }
}