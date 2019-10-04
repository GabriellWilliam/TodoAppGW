import React from 'react';
import { Fab, Icon } from 'native-base';

//botão flutuante pra adcionar todos

export default class AddToDoButton extends React.Component {
    render() {
        const { onAddNewToDo } = this.props;
        return (
            <Fab
                style={{ backgroundColor: '#167db2' }}
                position="bottomRight"
                onPress={() => onAddNewToDo(show = true)}>
                <Icon name="add" />
            </Fab>
        );
    }
}