import React, { Component } from 'react';
import { render, findDOMNode } from 'react-dom';
import { browserHistory, Link } from 'react-router';
import Dropzone from 'react-dropzone';
import HOST from '../../constants/host';
import './newArticleForm';

export default class NewArticleForm extends Component {
    constructor() {
        super();

        this.state = {
            imagePreview: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
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
    
    handleChange(event) {
        this.setState({
            imagePreview: URL.createObjectURL(event.target.files[0])
        });
    }
    
    render() {
        return (
            <div className="form-wrapper">
                <h1 className="form-header">Add your article</h1>
                <Link to="/" className="back-link fa fa-arrow-left" />
                <form method="POST" onSubmit={this.handleSubmit} encType="multipart/form-data" ref="form" className="form" >
                    <h3 className="field-name">Title:</h3>
                    <input type="text" name="title" className="field-input" />
                    <h3 className="field-name">Content:</h3>
                    <textarea type="text" name="content" className="field-input content" />
                    <h3 className="field-name">Author:</h3>
                    <input type="text" name="author" className="field-input" />
                    <h3 className="field-name image">Image:</h3>
                    <input type="file" name="image" ref="file" accept="image/x-png,image/gif,image/jpeg" onChange={this.handleChange} className="field-input image" />
                    {this.state.imagePreview ? <img src={this.state.imagePreview} className="image-preview" /> : ''}
                    <input type="submit" value="Add" className="submmit-button" />
                </form>
            </div>
        );
    }
}