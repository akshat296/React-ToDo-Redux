import React, { Component } from 'react';
import './app.css';
import { connect } from 'react-redux';
import * as courseActions from './actions/courseActions'
import SlidePanel from './components/slidePanel'


//import {courseActions} from './actions/courseActions'
class App extends Component {

  constructor(props) {
    super(props);
    this.state = { course: {
       title: "", id: 0, description: "", date: "" 
      }, status: 0 };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
  }
  onTitleChange(event) {
    const course = this.state.course;
    course.title = event.target.value;
    this.setState({ course: course });
  }
  onDescriptionChange(event) {
   const course = this.state.course;
    course.description = event.target.value;
    this.setState({ course: course });
  }



  onClickSave() {
    this.setState({ status: 1 });
    const course = this.state.course;
    course.date = new Date();
    course.id = this.state.course.id + 1;
    this.setState({ course: course });
    console.log(course);
    this.props.dispatch(courseActions.createCourses(this.state.course));

  }
  courseRow(course, index) {
    return <div key={index} className="listToDo">{course.title}</div>;
  }
  forceUpdate() {
    this.setState({ status: 0 });
  }
  componentDidUpdate() {
    if (this.state.status === 1) {
      this.t1 = setTimeout(() => this.forceUpdate(), 1750)
    }
  }

  render() {
    let msgbox;
    if (this.state.status === 1) {
      msgbox = <div className="msgbox">Success</div>;
    }
    else {
      msgbox = <div></div>;
    }

    return (
      <div className="App">
        <div className="row">
          {msgbox}
          <div className="col-sm-4">
            <input type="text"
              onChange={this.onTitleChange}
              placeholder="Add-To-Do"
              value={this.state.course.title}
              className="todobox" />
            <input type="text"
              onChange={this.onDescriptionChange}
              placeholder="Add Description"
              value={this.state.course.description}
              className="todobox" />
            <br />
            <button type="submit"
              onClick={this.onClickSave}
              className="todobutton">Add To-do</button>
            {this.props.courses.map(this.courseRow)}
          </div>
          <div className="App" className="col-sm-8">
            <SlidePanel boxdata = {this.state.course}></SlidePanel>
          </div>
        </div>
      </div>

    );
  }
}

function mapStateToProps(state, ownProps) {
  
  return {
    courses: state.courses

  };
}
export default connect(mapStateToProps)(App);
