var statusReducer = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE_STATUS':
            return !state;
            break;
        default:
            return state;
            break;
    }
};

module.exports = statusReducer;