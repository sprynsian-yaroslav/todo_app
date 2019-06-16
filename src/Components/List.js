import React from "react";
import App from "../App";

const List = (props) => {
    return(
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {
                    props.todoList.map((item, index) => {
                    return (
                        <li>
                            <div className="view">

                                <input
                                    className="toggle"
                                    type="checkbox"
                                    checked={item.chacked} onClick={() => {

                                    }}
                                />

                                <label>{item.name}</label>

                                <button className="destroy" onClick={() => {

                                }}>
                                </button>

                            </div>
                        </li>
                        )}
                    )}
            </ul>
        </section>
    )
}

export default List;