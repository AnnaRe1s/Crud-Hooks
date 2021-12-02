import { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";

export default function Update() {
  const params = useParams();

  const [state, setState] = useState({
    name: "",
    type: "",
    imageUrl: "",
    preparation_time: "",
    portions: "",
    level: "facil",
    ingredients: [],
    preparationMethod: [],
  });

  useEffect(() => {
    async function RecipeFetch() {
      try {
        const response = await axios.get(
          `https://ironrest.herokuapp.com/recipes/${params._id}`
        );
        setState({ ...response.data[0] });
      } catch (err) {
        console.error(err);
      }
    }

    RecipeFetch();
  });

  async function handleSubmit(event) {
      
    event.preventDefault();

    axios.put(`https://ironrest.herokuapp.com/recipes/${params.id}`, {
      ...state,
    });
  }

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  console.log(state);

  return (
    <div>
      <h1>Update</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="name"
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
        />
        <input
          placeholder="type"
          type="text"
          name="type"
          value={state.type}
          onChange={handleChange}
        />
        <input
          placeholder="imageUrl"
          type="text"
          name="imageUrl"
          value={state.imageUrl}
          onChange={handleChange}
        />
        <input
          placeholder="preparation_time"
          type="text"
          name="preparation_time"
          value={state.preparation_time}
          onChange={handleChange}
        />
        <input
          placeholder="portions"
          type="text"
          name="portions"
          value={state.portions}
          onChange={handleChange}
        />
        <select name="level" onChange={handleChange}>
          <option value="Facil">Facil</option>
          <option value="Medio">Medio</option>
          <option value="Dificil">Dificil</option>
        </select>
        <textarea
          placeholder="ingredients"
          name="ingredients"
          value={state.ingredients}
          onChange={handleChange}
        />
        <textarea
          placeholder="preparationMethod"
          name="preparationMethod"
          value={state.preparationMethod}
          onChange={handleChange}
        />
        <button type="submit"> submit</button>
      </form>
    </div>
  );
}
