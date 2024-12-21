import { useState } from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import EditForm from "./EditForm";

//MdDelete跟MdEdit要加一個div是因為todo的justify-content的space-between會把edit icon置中在中間去
function Todo({
  todo,
  deleteTodo,
  toogleCompleted,
  toogleIsEditing,
  editTodo,
}) {
  return todo.isEditing ? (
    <EditForm todo={todo} editTodo={editTodo} />
  ) : (
    <div className={`todo ${todo.isCompleted ? "completed" : ""}`}>
      <p
        style={{ cursor: "pointer" }}
        onClick={() => {
          toogleCompleted(todo.id);
        }}
      >
        {todo.content}
      </p>
      <div>
        <MdEdit
          onClick={() => {
            toogleIsEditing(todo.id);
          }}
          style={{ cursor: "pointer" }}
        />
        <MdDelete
          onClick={() => {
            deleteTodo(todo.id);
          }}
          style={{ cursor: "pointer", marginLeft: "5px" }}
        />
      </div>
    </div>
  );
}

export default Todo;
