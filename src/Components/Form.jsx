import { useState } from "react";
import pokemon from "../assets/pokemon.json"

const Form = () => {
  const [data, setData] = useState({
    name: "",
    age: "",
    pokemon: "",
  });
  console.log(data);
  //   const [show, setShow] = useState(false);
  //   const [error, setError] = useState(false);

  const handleChangeName = (event) => {
    setData({ ...data, name: event.target.value });
  };

  const handleChangeAge = (event) => {
    setData({ ...data, age: event.target.value });
  };

  const handleChangePokemon = (event) => {
    setData({ ...data, pokemon: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    console.log(data)
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" value={data.name} onChange={handleChangeName} placeholder="Ingrese su nombre completo"/>
        <input type="number" value={data.age} onChange={handleChangeAge} placeholder="Ingrese su edad" />
        {/* <input type="text" value={data.pokemon} onChange={handleChangePokemon} placeholder="Seleccione su pokemón favorito" /> */}
        <select value={data.pokemon} onChange={handleChangePokemon} >
        <option value="" disabled>
            Seleccione su pokémon favorito
          </option>
          {pokemon.pokemon.map((opcion) => (
            <option key={opcion.num} value={opcion.name}>
              {opcion.name}
            </option>
          ))}
      </select>
        <button type="submit">Enviar</button>
      </form>
    </>
  );
};

export default Form;
