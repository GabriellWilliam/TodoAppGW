import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createMaterialTopTabNavigator } from 'react-navigation-tabs';
import { Icon } from 'react-native-elements'
import Todos from '../screens/todos';
import Pendentes from '../screens/pendentes';
import Concluídos from '../screens/concluidos';

// Navegação do app

const stackHoot = createMaterialTopTabNavigator({

    Todos: {
        screen: Todos,
    },
    Pendentes: {
        screen: Pendentes,
    },
    Cocluídos: {
        screen: Concluídos
    },

}, {
        defaultNavigationOptions: ({ navigation }) => ({
            tabBarIcon: ({ tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === 'Todos') {
                    iconName = 'md-list';
                } else if (routeName === 'Pendentes') {
                    iconName = 'ios-unlock';
                } else {
                    iconName = 'md-checkmark-circle-outline';
                }

                return <Icon name={iconName} type={"ionicon"} color={tintColor} active={true} />;
            },
        }),
        tabBarOptions: {
            showIcon: true,
            activeTintColor: 'white',
            inactiveTintColor: '#8FA3AE',
            style: {
                backgroundColor: '#167db2',
            },
        },

        tabBarPosition: 'bottom',
        animationEnabled: true,
        swipeEnabled: true,
    });


export default createAppContainer(stackHoot);