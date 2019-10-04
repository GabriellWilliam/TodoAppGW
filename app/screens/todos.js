import React, { PureComponent } from 'react';
import { Container, Header, Title, Content, Body } from 'native-base';
import AddToDo from '../components/add_todo';
import AddToDoButton from '../components/add_todo_bottom';
import { connect } from 'react-redux';
import ToDoItem from '../components/todoItem';
import { addTodo, deleteTodo, updateTodo } from '../redux/todo_reducer';

class todos extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            newTodo: false
        };
    }

    saveToDoData = (todo) => {
        this.addNewToDo(show = false);
        this.props.addTodo(todo);
    }

    addNewToDo = (show) => {
        this.setState({
            newTodo: show
        });
    }

    render() {
        const { newTodo } = this.state;
        const { todos, deleteTodo, updateTodo } = this.props;

        let listItm = [];
        if (todos.length > 0) {
            listItm = todos.map((todo, index) =>
                <ToDoItem
                    key={index}
                    todo={todo}
                    deleteTodo={deleteTodo}
                    updateTodo={updateTodo}
                />
            );
        }

        return (
            <Container>
                <Header style={{ backgroundColor: '#167db2' }}>
                    <Body>
                        <Title>Todos</Title>
                    </Body>
                </Header>
                <Content>
                    {listItm}
                    {newTodo &&
                        <AddToDo
                            onPress={this.saveToDoData}
                            onCancel={this.addNewToDo} />}
                </Content>
                <AddToDoButton onAddNewToDo={this.addNewToDo} />
            </Container>
        );

    }
}

function mapStateToProps(state) {
    return {
        todos: state.todo_reducer.todos
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addTodo: (todo) => dispatch(addTodo(todo)),
        deleteTodo: (todo) => dispatch(deleteTodo(todo)),
        updateTodo: (todo) => dispatch(updateTodo(todo)),
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(todos)

