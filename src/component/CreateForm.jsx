import { useState } from "react";
import Todo from "./Todo";

function CreateForm({addTodo}) {
  const [content, setContent] = useState('');
  //setcontent('') to empty the text in the placeholder
  const handleSubmit = (e) => {
    if (content === " "){
      e.preventDefault()
      addTodo()
      setContent('') 
    } else{
      alert("代辦事項不能為空!!")
    }
    
  }
  
  //event object e, onchange allows the interface to display the value you type in the placeholder
  //two-way binding - 當UI發生改變的時候，state也會跟著改變，當state改變的時候，UI也會跟著改變
  return (
    <form className="create-form" onSubmit={handleSubmit}>
      <input type="text" placeholder="輸入待辦事項" 
      value={content} onChange={(e)=>{setContent(e.target.value)}}/> 
      <button type="submit">加入</button>
    </form>
  );
}

export default CreateForm;
