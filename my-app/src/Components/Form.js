import React from 'react';


const Form = ({SetInputText, inputText, todos, setTodos, setStatus}) => {
    const inputTextHandler = (e) => {
        SetInputText(e.target.value) ;
    };

    const submitTodoHandler = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,
            {text: inputText, completed: false, id: Math.random()*2}
        ]);
        SetInputText('');
    };
    const statusHandler = (e) => {
        setStatus(e.target.value);
    }
    return (
        <form>
        <input value={inputText} onChange={inputTextHandler} type="text" className="todo-list"/>
        <button onClick={submitTodoHandler} className = "todo-button"  type = "button"> 
            <i className="fas fa-plus-square"></i>
        </button>
        <div className="select">
            <select onChange={statusHandler} name="todos" className="filter-todo">
                <option value ="all">ALL</option>
                <option value ="completed">Completed</option>
                <option value ="uncompleted">Uncompleted</option>
            </select>
        </div>
        </form>
    )
}

export default Form;