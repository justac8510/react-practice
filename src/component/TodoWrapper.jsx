import { useState } from "react";
import CreateForm from "./CreateForm";
import Todo from "./Todo";
/*
你只能由上到下傳遞props 你不能由下到上傳遞props 
你的wrapper可以傳遞state到todo跟createform，但todo不能傳遞state到wrapper

並不是把所有state都寫到root components，that will cause props drilling
context: 全域的props, 像是global variables
APP開發應該要把content跟id放在資料庫裡，id會是每一筆資料庫的id
*/
function TodoWrapper() {
  const [todos, setTodos] = useState([
    { content: "打掃廁所", id: Math.random(), isCompleted: false, isEditing: false},
    { content: "寫作業", id: Math.random(), isCompleted: false, isEditing: false },
  ]);

  /*...means rest operator this refers to two elements of todos contents */
  const addTodo = (content) => {
    setTodos([
      ...todos,
      { content: content, id: Math.random(), isCompleted: false, isEditing: false },
    ]);
  };

  const deleteTodo = (id) => {
    setTodos(
      todos.filter((todo) => {
        return todo.id !== id;
      })
    );
  };

  const editTodo = (id, newContent) => {
    setTodos(todos.map((todo) => {
        return todo.id === id
        ? {...todo, content: newContent, isEditing: false}
        : todo;
    }))
  }

  const toogleCompleted = (id) => {
    /*
        search for the todo component with the corresponding id
        if it is it will modify isCompleted field return a new todo object with the updated value
        otherwise return the original value
        */
    setTodos(
      todos.map((todo) => {
        return todo.id === id
          ? { ...todo, isCompleted: !todo.isCompleted }
          : todo;
      })
    );
  };

  const toogleIsEditing = (id) => {
    setTodos(
        todos.map((todo) => {
            return todo.id === id 
            ? {...todo, isEditing: !todo.isEditing}
            : todo;
        }))
  };

  return (
    <div className="wrapper">
      <h1>待辦事項</h1>
      <CreateForm addTodo={addTodo} />
      {todos.map((todo) => {
        return <Todo todo={todo} key={todo.id} deleteTodo={deleteTodo} toogleCompleted={toogleCompleted} toogleIsEditing={toogleIsEditing} editTodo={editTodo} />;
      })}
    </div>
  );
}

export default TodoWrapper;
