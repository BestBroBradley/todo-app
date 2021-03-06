export const add = (todo) => {
    return{
        type: "ADD",
        payload: todo
    }
};

export const remove = (id) => {
    return {
        type: "REMOVE",
        payload: id
    }
};

export const controlledInput = (field, update) => {
    return {
        type: "CONTROL",
        field: field,
        update: update
    }
}

export const update = (title, date, memo) => {
    return {
        type: "UPDATE",
        title: title,
        date: date,
        memo: memo
    }
}

export const clear = () => {
    return {
        type: "CLEAR"
    }

}