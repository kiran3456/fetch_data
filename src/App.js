import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
function App() {
  const [records, setRecords] = useState([]);
  const [isError, setIsError] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://3idb6ggz4g.execute-api.us-east-2.amazonaws.com/dev/getlast/?region=us-east-2&device_id=C4DD57B0C690"
      )
      .then((res) => console.log("data recieved", res))
      .catch((err) => setIsError(err.message));
  }, []);
  return (
    <div className="App">
      <h1>getting axios</h1>
      {isError !== "" && <h2>{isError}</h2>}
      {records.map((post) => {
        const { id, title, body } = post;
        return (
          <div className="card" key={id}>
            <h2>{title.slice(0, 15).toUpperCase()}</h2>
            <h3>{body.slice(0, 100)}</h3>
          </div>
        );
      })}
    </div>
  );
}

export default App;
