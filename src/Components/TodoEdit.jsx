import React, { Component } from 'react'
import {connect} from "react-redux";

import {Add_Todo, Update_Todo, saveUpdateTodo} from '../Redux/actions';

class TodoEdit extends Component {

    state = {
        name:"",
        age:"",
        edit:false
    }

    onChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    onClick = (e)=>{
        e.preventDefault();
        this.props.Add_Todo({name: this.state.name, age: this.state.age});
    }

    onUpdate = (e)=>{
        e.preventDefault();
        const {age, name} = this.state;
        this.props.saveUpdateTodo({age, name})
    }

    render() {
        const {edit, todo} =  this.props;
        return (
            <form>
                <input type="text" name="name" onChange={() => this.onChange} placeholder="nom" value={ todo.name}/>
                <input type="text" name="age" onChange={() => this.onChange} placeholder="age" value={ todo.age }/>
                {
                    edit ? <button onClick={(e) => this.onUpdate(e) }>Edit</button> :  <button onClick={this.onClick}>Add</button>
                }
                
                
                
            </form>
        )
    }
}

const mapDispachToProps = {
  Add_Todo,
  Update_Todo,
  saveUpdateTodo,
}


const mapStateToProps = state => {
    return {
      todo: state.todo,
      edit: state.edit
    };
  };

export default connect(mapStateToProps,mapDispachToProps)(TodoEdit)