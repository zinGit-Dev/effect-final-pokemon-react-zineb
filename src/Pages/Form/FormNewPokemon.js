import { Fragment } from "react";
import { useForm } from "react-hook-form";

export default function FormNewPokemon(props) {
  const { handleSubmitForm } = props;
  const { register, handleSubmit, errors } = useForm();
  return (
    
    <div className="formClass">
     
      <div>
        <form onSubmit={handleSubmit(handleSubmitForm)}>
          <label htmlFor="picture">Picture</label>
          <input id="picture" name="picture" type="text" ref={register} />
          <br />
          <label htmlFor="id">Id</label>
          <input
            id="id"
            name="id"
            type="number"
            min="200"
            max="300"
            ref={register({
              min: 200,
              max: 300,
            })}
          />
          {errors.id ? (
            <p>El id debe ser un número comprendido entre 200 y 300</p>
          ) : null}
          <br />
          <label htmlFor="name">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            ref={register({
              required: true,
              minLength: 3,
            })}
          />
          {errors.name && errors.name.type === "required" ? (
            <p>Este campo es requerido</p>
          ) : null}
          {errors.name && errors.name.type === "minLength" ? (
            <p>Debe tener al menos 2 carácteres</p>
          ) : null}
          <br />

          <label htmlFor="typeOne">Type1</label>
          <select id="typeOne" name="type1" ref={register}>
            <option value="normal">Normal</option>
            <option value="water">Water</option>
            <option value="electric">Electric</option>
            <option value="fighting">Fighting</option>
            <option value="ground">Ground</option>
            <option value="psychic">Psychic</option>
            <option value="rock">Rock</option>
            <option value="dark">Dark</option>
          </select>

          {errors.typeOne ? (
            <p>Este campo es requerido y necesita al menos 3 caracteres</p>
          ) : null}
          <br />
          <label htmlFor="typeTwo">Type2</label>

          <select id="typeTwo" name="type2" ref={register}>
            <option value="fire">Normal</option>
            <option value="grass">Water</option>
            <option value="ice">Electric</option>
            <option value="fighting">Fighting</option>
            <option value="ground">Ground</option>
            <option value="psychic">Psychic</option>
            <option value="rock">Rock</option>
            <option value="dark">Dark</option>
          </select>

          {errors.typeTwo ? (
            <p>Este campo es requerido y necesita al menos 3 caracteres</p>
          ) : null}
          <br />
          <br />
          <button type="submit">Enviar</button>
        </form>
      </div>
    </div>
  );
}
