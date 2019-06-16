import React from "react";



function Header(props){
    return(
        <header className="header">
            <h1>todos</h1>
            <input
                className="new-todo"
                placeholder="What needs to be done?"
                autoFocus
                onKeyDown={(e) => {
                       if (e.keyCode === 13){
                            props.addToList(e.target.value);
                       }
                   }
                   }
            />
        </header>
    )
}

export default Header;