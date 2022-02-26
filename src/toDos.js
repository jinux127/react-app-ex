
import { useState} from "react";

function toDos() {
    const [toDo,setToDo] = useState("");
    const [toDos,setToDos] = useState([]);
    const onChange = (e) => setToDo(e.target.value);
    const onSubmit = (e) => {
        e.preventDefault();
        if(toDo === "") return;
        setToDos(cur=>[toDo, ...cur]);
        setToDo("");
    }
    console.log(toDos);
  return (
    <div>
        <h1>My To Docs({toDos.length})</h1>
        <form>
            <input
                onChange={onChange}
                value={toDo}
                type="text"
                placeholder="Write your to do..."
            />
            <button onClick={onSubmit}>Submit</button>
        </form>
        <hr/>
        <ul>
            {toDos.map((item,i)=> <li key={i}>{item}</li>)}
        </ul>
    </div>
  );
}

export default toDos;
