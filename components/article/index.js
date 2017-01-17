import React, { PropTypes } from 'react';
import HOST from '../../constants/host';

const Article = ({ title, image, content, author, date }) => {
    return (
        <div>
            <h2>{title}</h2>
            <img src={`${HOST.NAME}${HOST.GET_IMAGE}/${image}`} />
            <p>{content}</p>
            <h5>{author}</h5>
            <p>{date.toLocaleString()}</p>
        </div>
    );
}

Article.PropTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.object.isRequired
};

export default Article;