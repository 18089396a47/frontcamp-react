import React, { Component, PropTypes } from 'react';
import { render } from 'react-dom';
import { Link } from 'react-router';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Article from '../article/';
import addArticles from '../../actions/addArticles';
import HOST from '../../constants/host';

class ArticleList extends Component {
    static get propTypes() {
        return {
            articles: PropTypes.arrayOf(PropTypes.object).isRequired,
            addArticles: PropTypes.func.isRequired
        };
    }
    
    componentDidMount() {
        fetch(HOST.NAME)
            .then(response => response.json())
            .then(articles => this.props.addArticles({ articles }));
    }
    
    render() {
        const articles = this.props.articles.map((article) => {
            return (
                <li key={article._id}>
                    <Article
                        {...article}
                    />
                    <hr />
                </li>
            );
        });
        return (
            <div>
                <h1>Articles</h1>
                <Link to="/add">Add</Link>
                <ul>{articles}</ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        articles: state.articles
    };
}

function mapDispatchToProps(dispatch) {
    return {
        addArticles: bindActionCreators(addArticles, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArticleList);