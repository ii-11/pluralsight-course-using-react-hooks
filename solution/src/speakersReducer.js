// Reducer => function(state, action) => newState
// Reducer is function that takes a state and action and returns new state based on the action
const speakersReducer = (state, action) => {
    function updateFavorite(favoriteValue) {
        return state.map((item, index) => {
            if (item.id === action.sessionId) {
                item.favorite = favoriteValue;
            }
            return item;
        });
    }
    switch (action.type) {
        case "setSpeakerList": {
            return action.data;
        }
        case "favorite": {
            return updateFavorite(true);
        }
        case "unfavorite": {
            return updateFavorite(false);
        }
        default:
            return state;
    }
};
export default speakersReducer;