import React, { PureComponent } from 'react';
import Tabs from './app/config/routes';
import store from './app/redux/store';
import { Provider } from 'react-redux';

const App = () => (<Provider store={store}><Tabs /></Provider>)

export default App;