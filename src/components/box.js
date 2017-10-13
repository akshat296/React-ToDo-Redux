import React, { Component } from 'react';
import { connect } from 'react-redux';
import {  editCourses } from '../actions/courseActions';
import { bindActionCreators } from 'redux';

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {title:"" , description:"",date : new Date().toString,
    completed : false,id:this.props.num, edit : 0};
    this.onTodoTitleChange= this.onTodoTitleChange.bind(this);
    this.onTodoDescriptionChange = this.onTodoDescriptionChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }


  onTodoTitleChange(event) { 
  this.setState( {title: event.target.value});
  }
  onTodoDescriptionChange(event) {
    this.setState( {description: event.target.value});
   }
  onClickSave() {
    this.setState( {date: new Date().toString()});
    this.setState({edit:1});
    this.props.editCourses(this.props.courses,this.state);


  }
  forceUpdate() {
    this.setState({edit:0})
  }
  render() {
    let msgbox;
    
        if (this.state.edit === 1) {
          msgbox = <div className="msgbox">Succesfully Updated!!!</div>;
    
          this.t1 = setTimeout(() => this.forceUpdate(), 3950)
    
        }
        else {
          msgbox = <div></div>;
        }
    return (
       <div>
        <table>
          <thead><tr><th>To-do Title</th></tr></thead>
          <tbody><tr><td><input type="text"
            value={this.state.title}
            onChange={this.onTodoTitleChange} /></td></tr></tbody>
          <thead><tr><th>To-Do Description</th></tr></thead>
          <tbody><tr><td><input type="text"
            value={this.state.description}
            onChange={this.onTodoDescriptionChange}
          /></td></tr></tbody>
          <thead><tr><th><button type="submit"
            onClick={this.onClickSave}
            className="btn btn-success">Add To-do</button> </th></tr></thead>
            <tbody><tr><td>{msgbox}</td></tr></tbody>
        </table>
      
        </div>
    
   
    );
  }
}
function mapStateToProps(state, ownProps) {

  return {
    courses: state.courses,
    statusToast: state.statusToast
  };
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({

    editCourses: editCourses
  }, dispatch);

}
export default connect(mapStateToProps, mapDispatchToProps)(Box);