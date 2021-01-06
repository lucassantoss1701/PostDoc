import React, { Component } from 'react';
import PostitService from '../services/PostitService'

class CreatePostitComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            title: '',
            message: '',
            date: ''
        }
    }

    componentDidMount(){
        if(this.state.id == -1){
            return;
        }else{
            PostitService.getPostitById(this.state.id).then((res)=>{
                let postit = res.data;
                this.setState({
                    title: postit.title,
                    message: postit.message,
                    date: postit.date
                });
            });
        }
       
    }

    savePostit = (e) =>{
        e.preventDefault();

        let postit = {title: this.state.title, message: this.state.message, date: this.state.date};
        console.log('employee => '+ JSON.stringify(postit));

        
        if(this.state.id == -1){
            PostitService.createPostit(postit).then(res => {
                this.props.history.push('/postits');
            });
        }else{
            PostitService.updatePostit(postit, this.state.id).then(res => {
                this.props.history.push('/postits');
            });
        }

        
    }

    changeTitleHandler=(event)=>{
        this.setState({title: event.target.value});
    }

    changeMessageHandler=(event)=>{
        this.setState({message: event.target.value});
    }

    changeDateHandler=(event)=>{
        this.setState({date: event.target.value});
    }

    cancel(){
        this.props.history.push('/postits');
    }

    getTitle(){
        if(this.state.id == -1){
            return  <h3 className="text-center">Add Post-it</h3>
        }else{
            return <h3 className="text-center">Update Post-it</h3>
        }
    }


    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3 ">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form action="">
                                    <div className="form-group">
                                        <label className="bold">Title</label>
                                        <input placeholder="Title" name="title" type="text" className="form-control"
                                            value={this.state.title} onChange={this.changeTitleHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="bold">Message</label>
                                        <input placeholder="Message" name="message" type="text" className="form-control"
                                            value={this.state.message} onChange={this.changeMessageHandler}/>
                                    </div>
                                    <div className="form-group">
                                        <label className="bold">Date</label>
                                        <input placeholder="Date" name="date" type="text" className="form-control"
                                            value={this.state.date} onChange={this.changeDateHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.savePostit}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default CreatePostitComponent;