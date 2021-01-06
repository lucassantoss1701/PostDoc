import React, { Component } from 'react';
import PostitService from '../services/PostitService';
import './List.css'

class ListPostitComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            postits: []
        }
        this.addPostit = this.addPostit.bind(this);
        this.editPostit = this.editPostit.bind(this);
        this.deletePostit = this.deletePostit.bind(this);
    }

    deletePostit(id) {
        PostitService.deletePostit(id).then(res => {
            this.setState({ postits: this.state.postits.filter(postit => postit.id !== id) });
        });
    }

    editPostit(id) {
        this.props.history.push(`/add-postit/${id}`);
    }

    componentDidMount() {
        PostitService.getPostits().then((res) => {
            this.setState({ postits: res.data });
        })
    }

    addPostit() {
        this.props.history.push('/add-postit/-1');
    }

    render() {
        return (
            <div className="containerr">
                <div>
                    <div className="rowbutton">
                        <button className="btn btn-primary" onClick={this.addPostit}> Add Post-it</button>
                    </div>
                </div>

                <div className="container-card">
                    {
                        this.state.postits.map(
                            postit =>
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{postit.title}</h5>
                                        <p claclassNamess="card-text">{postit.message}</p>
                                        <p claclassNamess="card-text">{postit.date}</p>
                                        <button onClick = {()=> this.editPostit(postit.id)} className="btn btn-info">Update</button>
                                        <button style= {{marginLeft: "10px"}} onClick = {()=> this.deletePostit(postit.id)} className="btn btn-danger">Delete </button>
                                    </div>
                                </div>
                        )
                    }


                </div>
            </div>
        );
    }
}

export default ListPostitComponent;


