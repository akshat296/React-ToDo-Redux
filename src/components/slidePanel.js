import React, { Component } from 'react';
import '../box.css';
import {connect} from 'react-redux';


 class SidePanel extends Component
{
    constructor (props)
    {
        super (props);
    }  
    iterate(item)
    {
        const boxStructure = <div className = "boxStructure" key = {item.id}> 
            <table>
                <thead><tr><th>Title</th></tr></thead>
                <tbody><tr><td>{item.title}</td></tr> </tbody>
                <thead><tr><th>Description</th></tr></thead>
                <tbody><tr><td>{item.description}</td></tr> </tbody>
                <thead><tr><th>Date Added</th></tr></thead>
                <tbody><tr><td>{item.date.toString()}</td></tr> </tbody>     
             </table>
        </div>
        return boxStructure;
    }
 render ()
 {

   return (<div className="box">{this.props.courses.map(this.iterate)}</div>);
 }

}
function mapStateToProps(state, ownProps) {
    
    return {
      courses: state.courses
  
    };
  }
export default connect(mapStateToProps)(SidePanel);