export function userReducer(user, action) {
    switch(action.type) {
    case 'ADD_USER':
        user = action.payload
    }
}