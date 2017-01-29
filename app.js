import './index.html';
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory  } from 'react-router';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import ArticleList from './components/articleList/';
import NewArticleForm from './components/newArticleForm/';
import reducers from './reducers/';
import INITIAL_STATE from './constants/initialState';
import './components/commonStyles';

const store = createStore(reducers, INITIAL_STATE);

class App extends Component {
    render() {
        return <div>{this.props.children}</div>;
    }
}

render((
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route component={App}>
                <Route path="/" component={ArticleList} />
                <Route path="/add" component={NewArticleForm} />
            </Route>
        </Router>
    </Provider>
), document.getElementById('app'));