import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as courseActions from './actions/courseActions'
import {bindActionCreators} from 'redux';

//import {courseActions} from './actions/courseActions'
class App extends Component {

constructor(props)
{
super(props);
this.state = {course : {title: ""}};
this.onTitleChange =this.onTitleChange.bind(this);
this.onClickSave =this.onClickSave.bind(this);
}
onTitleChange(event)
{
  const course =this.state.course;
  course.title = event.target.value;
  this.setState({course:course });
}
onClickSave()
{
  this.props.dispatch(courseActions.createCourses(this.state.course));
}
courseRow(course,index)
{
  return <div key = {index}>{course.title} </div>;
}

  render() {
    return (
      <div className="App">
        <input type = "text" onChange = {this.onTitleChange}
        value = {this.state.course.title}/>     
        {this.props.courses.map(this.courseRow)}
        <input type = "submit" value="save" onClick = {this.onClickSave}/>
      </div>
    );
  }
}

function mapStateToProps(state,ownProps){
  return {
    courses : state.courses

  };
}
export default connect(mapStateToProps)(App);
