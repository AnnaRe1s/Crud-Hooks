import { useState, useEffect } from "react";
import axios from "axios";

export default function Read() {
  const [state, setState] = useState([]);

  useEffect(() => {
    async function FetchRecipes() {
      try {
        const response = await axios.get(
          "https://ironrest.herokuapp.com/recipes"
        );
        setState([...response.data]);
        // console.log(response);
        // console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    }
    FetchRecipes();
  }, []);

  // console.log("state", state);

  return (
    <div>
      <h1>Read </h1>
      {state.map((currenteElement) => {
        return (
          <div>
            <h1>{currenteElement.name}</h1>
            <img src={currenteElement.imageUrl} alt={currenteElement.name} />
          </div>
        );
      })}
      <h1>teste</h1>
    </div>
  );
}
