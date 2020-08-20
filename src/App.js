import React from 'react';
import Game from './components/Game';
import { Provider } from 'react-redux';
import store from './store/configureStore';

export default class App extends React.Component {
    render() {
        return (
            <Provider store={store}>
            <Game />
            </Provider>
        )
    }
}
