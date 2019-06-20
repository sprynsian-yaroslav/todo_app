import React from 'react';
import './App.css';
import Header from './Components/Header';
import List from './Components/List';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             todoList: [],

        };



        this.deleteItem = (deleteItem)=> {
                this.setState(prev => {

                    return{todoList: prev.todoList.filter((item) => {
                            return item.key !== deleteItem.key;
                        }
                    )}
                })
            };

            this.addToList = (itemName) => {
                const item = {
                    name: itemName,
                    chacked: false,
                    key: Date.now()
                };

                this.setState(function(prev) {
                    return{ todoList : [...prev.todoList, item]}
                }
                )
        };

        this.copleteAll = () => {
            this.setState({
                stateAllItem: !this.state.stateAllItem
            });

            this.setState(function(prev) {
                return{ todoList : prev.todoList.map(item => {
                        return{
                            name: item.name,
                            chacked: !this.state.stateAllItem,
                            key: item.key
                        }

                    })}
            })
        };

        this.changeStateItem = (item) => {
                this.setState(function (prev) {

                        return{ todoList: prev.todoList.map((prevItem) => {

                            if(item.key === prevItem.key){
                                return{
                                    name: item.name,
                                    chacked: !item.chacked,
                                    key: item.key
                                }
                            }
                            else
                                return prevItem;
                        })}


                    })
        };

        this.clearCompleted = () => {
            this.setState(function(prev) {
                return{ todoList : prev.todoList.filter(item => {
                        return  !item.chacked;
                    })}
            })
        }


        }




    render() {
        return (
            <div className="App">

                <section className="todoapp">
                    <Header
                        addToList = {this.addToList}
                        copleteAll = {this.copleteAll}
                    />
                    <List
                        todoList = {this.state.todoList}
                        clearCompleted = {this.clearCompleted}
                        changeStateItem = {this.changeStateItem}
                        deleteItem = {this.deleteItem}
                    />
                </section>

                <footer className="info">
                    <p>Double-click to edit a todo</p>
                    <p>Created by <a href="http://twitter.com/oscargodson">Oscar Godson</a></p>
                    <p>Refactored by <a href="https://github.com/cburgmer">Christoph Burgmer</a></p>
                    <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
                </footer>

            </div>
        );
    }
}

export default App;
