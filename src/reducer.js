export default function (state, action) {
    switch (action.type) {
        case 'add':
            return [
                ...state,
                {
                    id: Date.now(),
                    title: action.payload,
                    complete: false
                }
            ]
        case 'remove':
            return state.filter(todo => todo.id !== action.payload)
        case 'toggle':
            return state.map(todo => {
                if (todo.id === action.payload) {
                    todo.complete = !todo.complete
                }
                return todo
            })
        default:
            return state
    }
}