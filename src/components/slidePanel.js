import React, { Component } from 'react';
import '../box.css';
import { connect } from 'react-redux';


class SidePanel extends Component {

    iterate(item) {
        const boxStructure =
            <div key={item.id} className="col-sm-4">
                <table className="boxStructure animation">
                    <thead><tr><th>To-do-Title</th></tr></thead>
                    <tbody><tr><td>{item.title}</td></tr></tbody>
                    <thead><tr><th>To-Do-Description</th></tr></thead>
                    <tbody><tr><td>{item.description}</td></tr></tbody>
                    <thead><tr><th>Date-Added</th></tr></thead>
                    <tbody><tr><td>{item.date.toString()}</td></tr></tbody></table>
            </div>
        return boxStructure;
    }
    render() {

        return (<div className="row"><div className="box">{this.props.courses.map(this.iterate)}</div></div>);
    }

}
function mapStateToProps(state, ownProps) {

    return {
        courses: state.courses
    };
}
export default connect(mapStateToProps)(SidePanel);