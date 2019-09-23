import {ADD_TODO, DELETE_TODO, UPDATE_TODO, CANCEL_EDIT_TODO, CHANGE_INPUT, CLEAR_INPUT, EDIT_TODO} from './types';

export const Add_Todo = (todo) => ({
    type : ADD_TODO,
    todo
})

export const Delete_Todo = (todo) => ({
    type : DELETE_TODO,
    todo
})

export const Update_Todo = (todo) => ({
    type : UPDATE_TODO,
    todo
})

export const Edit_Todo = (todo) => ({
    type : EDIT_TODO,
    todo
})

export const Cancel_Edit_Todo = (edit) => ({
    type : CANCEL_EDIT_TODO,
    edit
})

export const chnageInput = (payload) => ({
    type : CHANGE_INPUT,
    payload
})

export const clearInput = (payload) => ({
    type : CLEAR_INPUT,
    payload
})