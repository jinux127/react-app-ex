import styles from "./App.module.css";
import { useState, useEffect} from "react";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const onClick = () => setValue(prev=>prev+1);
  const onChange = (e) => setKeyword(e.target.value);
  console.log('run all the time');
  useEffect(() =>{
    console.log('CALL THE API...');
  }, []);
  useEffect(() =>{
    if(keyword !== "" && keyword.length > 5)console.log(`SEARCH FOR ${keyword}`);
  }, [keyword]);
  useEffect(() =>{
   console.log(`I run when 'counter' changes.`);
  }, [counter]);
  
  return (
    <div className="App">
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." ></input>
      <h1 className={styles.title}>{counter}</h1>
      <button onClick={onClick}>click me!</button>
    </div>
  );
}

export default App;
