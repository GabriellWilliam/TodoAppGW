import React from 'react';
import { Body, CheckBox, ListItem } from 'native-base';
import { Input, Button } from 'native-base';

//Funcionalidades da tela de adcionar todos

export default class AddToDo extends React.Component {

    constructor(props) {
        super(props);
        const title = "";
        const completed = false;
        const createdAt = "";

        this.state = {
            title,
            completed,
            createdAt,
        };
    }

    setStateUtil = (property, value) => {
        this.setState({
            [property]: value,
        });
    }

    render() {

        const { onPress } = this.props;
        const { completed } = this.state;

        return (
            <ListItem>
                <CheckBox
                    checked={completed}
                    onPress={() => this.setStateUtil("completed", !completed)}
                />
                <Body>
                    <Input placeholder="O que você precisa fazer?"
                        onChangeText={(txt) => this.setStateUtil("title", txt)}
                        onSubmitEditing={() => onPress(this.state)}
                    />
                </Body>
                <Button>
                </Button>
            </ListItem>
        );
    }
}