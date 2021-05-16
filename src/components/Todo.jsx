import React, { useState } from 'react'
import "./todo.css";
import todo from "./todo.svg";
import { addTodo, delTodo, removeTodo } from "../actions/index";
import { useSelector, useDispatch } from "react-redux";

const Todo = () => {

    const [inputData, setInputData] = useState('');
    const list = useSelector((state) => state.todoReducer.list);
    const dispatch = useDispatch();

    return (
        <>
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src={todo} alt="todologo" />
                        <figcaption>Add Your List Here ✌</figcaption>
                    </figure>

                    <div className="addItems">
                        <input type="text" placeholder="✍ Add Items..."
                            value={inputData}
                            onChange={(e) => setInputData(e.target.value)}
                        />
                        <i className="fa fa-plus add-btn" title="Update Item" onClick={() => dispatch(addTodo(inputData),
                            setInputData(''))}></i>

                    </div>

                    <div className="showItems">

                        {
                            list.map((elem) => {
                                return (
                                    <div className="eachItem" key={elem.id}>
                                        <h3>{elem.data}</h3>
                                        <div className="todo-btn">
                                            <i className="far fa-trash-alt add-btn" title="Delete Item" onClick={() => dispatch(delTodo(elem.id))}></i>
                                        </div>
                                    </div>
                                )
                            })

                        }

                    </div>

                    {/* clear all button  */}
                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={() => dispatch(removeTodo())}><span> CHECK LIST </span> </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Todo;