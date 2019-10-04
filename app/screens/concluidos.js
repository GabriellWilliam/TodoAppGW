import React, { PureComponent } from 'react';
import { Container, Header, Title, Content, Body } from 'native-base';
import AddToDo from '../components/add_todo';
import { connect } from 'react-redux';
import ToDoItem from '../components/todoItem';
import { addTodo, deleteTodo, updateTodo } from '../redux/todo_reducer';
import { selectConcluidos } from '../redux/selectors';

class concluidos extends PureComponent {
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
                        <Title>Concluídos</Title>
                    </Body>
                </Header>
                <Content>
                    {listItm}
                    {newTodo &&
                        <AddToDo
                            onPress={this.saveToDoData}
                            onCancel={this.addNewToDo} />}
                </Content>
            </Container>
        );

    }
}

function mapStateToProps(state) {
    const todos = selectConcluidos(state)
    return {
        todos
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
)(concluidos)

