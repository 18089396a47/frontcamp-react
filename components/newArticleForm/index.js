import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';
import { browserHistory } from 'react-router';
import Dropzone from 'react-dropzone';
import HOST from '../../constants/host';

export default class NewArticleForm extends Component {
    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleSubmit(event) {
        console.log(findDOMNode(this.refs.file).files);
        const body = new FormData(findDOMNode(this.refs.form));
        fetch(`${HOST.NAME}${HOST.ADD_ARTICLE}`, {
            method: 'POST',
            body
        }).then((res) => {
            if (res.status === 200) {
                browserHistory.push('/');
            }
        });
        event.preventDefault();
    }
    
    render() {
        return (
            <form method="POST" onSubmit={this.handleSubmit} encType="multipart/form-data" ref="form" >
                <h3>Title:</h3>
                <input type="text" name="title" />
                <h3>Content:</h3>
                <input type="text" name="content" />
                <h3>Author:</h3>
                <input type="text" name="author" />
                <h3>Image:</h3>
                <input type="file" name="image" ref="file" accept="image/x-png,image/gif,image/jpeg" />
                <br />
                <input type="submit" value="Add" />
            </form>
        );
    }
}