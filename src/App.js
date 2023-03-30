import React, { useState } from "react";
import Counter from "./component/counter";


function App() {
  const [value, setValue] = useState("Some text")

  return (
    <div className="App">
      <Counter />
      <Counter />
      <Counter />
      <input type="text" value={value} onChange={(event) => { setValue(event.target.value) }} />
      <p>{value}</p>
    </div>
  );
}

export default App;
