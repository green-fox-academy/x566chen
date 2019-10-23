  
const TagReducer = (state = ['blue', 'bold', 'hipster'], action) => {
    let flag = state
    if (action.type === 'ADD_TAG') {
        if (!flag.includes(action.tag)) {
            return [...state, action.tag]
        }
        return state
    }
    if (action.type === 'REMOVE_TAG') {
        if (state.includes(action.tag)) {
            let newArr = flag.filter(element => element !== action.tag)
            return newArr
        }
        return state
    }
    if (action.type === 'REMOVE_TAGS') {
        return []
    }
    return state
}

export default TagReducer;