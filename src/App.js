import React, { Component } from 'react';
import './app.css';
import {Button} from 'react-bootstrap'
import { connect } from 'react-redux';
import * as courseActions from './actions/courseActions'
import SlidePanel from './components/slidePanel';
//import {courseActions} from './actions/courseActions'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {course:{
       title: "", id: -1, description: "", date: "" 
    }, status: 0 };
    this.onTitleChange = this.onTitleChange.bind(this);
    this.onDescriptionChange = this.onDescriptionChange.bind(this);
    this.onClickSave = this.onClickSave.bind(this);
    this.courseRow = this.courseRow.bind(this);
  
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
  //  console.log(course);
    this.props.dispatch(courseActions.createCourses(this.state.course));

  }


  onDelete(index)
  {
  //console.log(index);
 //console.log(this.props.courses);
  const newItems  =   this.props.courses.filter((item)=>{
    console.log(index);
        return item.id !== index;
     });

     //this.props.dispatch(courseActions.createCourses());
    }
   
  onDone()
  {


  }
  onEdit()
  {

  }
  courseRow(course, index) {
    return <div key={index} className="listToDo">{course.title}
    <div className = "pull-right" >
    <Button bsStyle= "info" bsSize="small" className="btn"  type= "submit" onClick = {()=>this.onEdit}>Edit</Button>
    <Button bsStyle="success" bsSize="small" className="btn" type= "submit" onClick = {()=>this.onDone}>Done</Button>
    <Button bsStyle= "danger" bsSize="small" className="btn" type = "submit" onClick = {()=>this.onDelete(index)} >Delete</Button>
   </div></div>;
  }
  forceUpdate() {
    this.setState({ status: 0 });
  }
  componentDidUpdate() {
    if (this.state.status === 1) {
      this.t1 = setTimeout(() => this.forceUpdate(), 3950)
    }
  }

  render() {
    let msgbox;
    if (this.state.status === 1) {
      msgbox = <div className="msgbox">Congrats! you have successfully added a TO-DO</div>;
    }
    else {
      msgbox = <div></div>;
    }

    return (
      <div className="App">
        <div className="row">
          {msgbox}
          <div className="col-lg-3">
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
          <div  className="col-lg-9">
            <SlidePanel boxdata = {this.props.courses}></SlidePanel>
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
