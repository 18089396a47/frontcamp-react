import { ACTION_TYPES } from '../constants/actionTypes';

export default function addArticles(articles = []) {
    return {
        type: ACTION_TYPES.ADD_ARTICLES,
        articles
    };
}