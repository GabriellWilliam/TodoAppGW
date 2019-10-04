//função anonima para determinar os todos que foram ou não concluidos

export function selectConcluidos(state) {

    return state.todo_reducer.todos.filter((todo) => todo.completed)

}

export function selectPendentes(state) {

    return state.todo_reducer.todos.filter((todo) => !todo.completed)

}