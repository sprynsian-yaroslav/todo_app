import React from "react";


class List extends React.Component {
    constructor(props) {
        super(props);

        this.state ={
            viewList: (item) => {
                return item
            }
        }
    }

    render(){
    return(
        <section className="main">
            <input id="toggle-all" className="toggle-all" type="checkbox" />
            <label htmlFor="toggle-all">Mark all as complete</label>
            <ul className="todo-list">
                {

                    this.props.todoList.filter(this.state.viewList).map((item) => {
                    return (
                        <li className={item.chacked? "completed" : ''} >
                            <div className="view">
                                <input
                                    className="toggle"
                                    type="checkbox"
                                    checked={item.chacked} onClick={() => {
                                        this.props.changeStateItem(item);

                                    }}
                                />

                                <label>{item.name}</label>

                                <button className="destroy" onClick={() => {
                                    this.props.deleteItem(item)
                                }}>
                                </button>

                            </div>
                        </li>
                        )}
                    )}
            </ul>
            <footer className="footer">
                <span className="todo-count">
                    {
                        this.props.todoList.reduce((accum, item ) => {
                            if(!item.chacked)
                                return accum + 1;
                            else return accum
                        },0
                    )} items left
                </span>
                <ul className="filters">
                    <li>
                        <a href="#/" className="selected" onClick={() => {
                            this.setState({
                                viewList: (item) => {return item}
                            })
                        }}>All</a>
                    </li>
                    <li>
                        <a href="#/active" onClick={() => {
                            this.setState({
                                viewList: (item) => {return !item.chacked}
                            })
                        }}>Active</a>
                    </li>
                    <li>
                        <a href="#/completed" onClick={() => {
                            this.setState({
                                viewList: (item) => {return item.chacked}
                            })
                        }}>Completed</a>
                    </li>
                </ul>
                <button className="clear-completed" onClick={this.props.clearCompleted}>Clear completed</button>
            </footer>
        </section>

    )
}}


export default List;