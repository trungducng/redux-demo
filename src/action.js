function addItem(item) {
    return {type: 'ADD_ITEM', item};
}

function removeItem(item) {
    return {type: 'REMOVE_ITEM', item};
}

function toggleStatus() {
    return {type: 'TOGGLE_STATUS'}
}

module.exports = {
    addItem, removeItem, toggleStatus
};