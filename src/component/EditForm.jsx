import { useState } from "react";

function EditForm({todo, editTodo}) {
  const [content, setContent] = useState(todo.content);
  //setcontent = ('') to empty the text in the placeholder
  const handleSubmit = (e) => {
    if (content === " "){
        console.log(content)
        e.preventDefault()
        editTodo(todo.id, content)
    } else{
        alert("代辦事項不能為空!!")
    }    
  };

  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="輸入待辦事項"
        value={content}
        onChange={(e) => {
          setContent(e.target.value);
        }}
      />
      <button type="submit">完成</button>
    </form>
  );
}

export default EditForm;
