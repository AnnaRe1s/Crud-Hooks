import { useState } from "react";
import axios from "axios";

export default function Create() {
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

  function handleChange(event) {
    setState({ ...state, [event.target.name]: event.target.value });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const postRequest = await axios.post(
        "https://ironrest.herokuapp.com/recipes",
        { ...state }
      );

      setState({
        name: "anna",
        type: "reis",
        imageUrl: "",
        preparation_time: "",
        portions: "",
        level: "facil",
        ingredients: [],
        preparationMethod: [],
      });

      console.log(postRequest);
    } catch (err) {
      console.error(err);
    }
  }

  console.log("state", state);

  return (
    <form onSubmit={handleSubmit}>
      <h1>Create</h1>
      <p>
        vamos criar uma nova receita que vai para o banco de dados e aparecera
        do read
      </p>
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
  );
}
