// Style
import './Create.css';


function Create() {
  return (
      <>
        <form className="createForm">
          <label >Titulo de la nueva Nota: </label>
          <br />
          <input type="text" name='title' className='createTitle' placeholder='Titulo...' required/>
          <br /><br />
          <label >Titulo de la nueva Nota: </label>
          <br />
          <textarea type="text" name='content' className='createContent' placeholder='Contenido...' required/>
          <br /><br />
          <button className='createButton'>Crear Nota</button>
        </form>
      </>
  );
}

export default Create;