import React from 'react';
import './App.css';
import Header from './Components/Header';
import TodoFooter from './Components/Footer';
import List from './Components/List';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
             todoList: [],
        }

        const deleteItem = (deleteItem)=> {
                this.setState(prev => {
                    this.state.todoList = prev.todoList.filter((item) => {
                        return item !== deleteItem;
                    })
                })
            }

        this.addToList = (itemName) => {
            console.log('ghbdtn');
            console.log(this.state.todoList);
            const item = {
                name: itemName,
                chacked: false
            }

            this.setState(prev => {
                this.state.todoList = [...prev.todoList, item]
            })
            console.log(this.state.todoList);
        }

        }




    render() {

        return (
            <div className="App">

                <section className="todoapp">
                    <Header
                        addToList = {this.addToList}
                    />
                    <List
                        todoList = {this.state.todoList}
                    />
                    <TodoFooter/>
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
