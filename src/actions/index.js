export const addTodo = (data) => {
    return {
        type: "ADDTODO",
        payload: {
            id: new Date().getTime().toString(),
            data: data
        }
    }
}

export const delTodo = (id) => {
    return {
        type: "DELETETODO",
        id
    }
}

export const removeTodo = () => {
    return {
        type: "REMOVETODO"
    }
}
