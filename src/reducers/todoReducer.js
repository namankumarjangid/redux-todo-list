let initialState = {
    list: []
};

const todoReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADDTODO":

            const { id, data } = action.payload;

            if (data && data.length > 2) {
                return {
                    ...state,
                    list: [
                        ...state.list,
                        {
                            id: id,
                            data: data
                        }
                    ]
                }
            }

        case "DELETETODO":

            const newList = state.list.filter((elem) => elem.id !== action.id)
            return {
                ...state,
                list: newList
            }

        case "REMOVETODO":
            return {
                ...state,
                list: []
            }

        default: return state;
    }
}

export default todoReducer;