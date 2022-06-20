const app = require('express')();      // uso la dependencia express
const PORT = 8080;
const cors = require('cors');   // para que no salte 'Access-Control-Allow-Origin'


//  Hacer que solo mi pagina pueda pedir info
app.use(
  cors({
    origin: "http://localhost:3000",
    // puedo poner 'methods:' para solo dejar algunas
    // tambien mandar coockies 'credentials: true'
  })
);

app.listen(     // se usa para despertarla y chequear que funciona
    PORT,
    () => console.log(`It is alive on http://localhost:${PORT}`)
)
//en la terminal corro "node ." para chequear si me responde con el console.log



// active
app.get('/active', (req, res) => {    // path, (request, response)
  res.status(200).send(
    
    ActiveNotes(notes)
      
      // corro funcion que toma las notas y solo devuelve las que estan activas
    )
  }
);

const ActiveNotes = (notes) => {
  active = []

  notes.map(note => {
    if(note.active === true) {
      active.push(note);
    }
  });

  return active
};



// active
app.get('/archived', (req, res) => {    // path, (request, response)
  res.status(200).send(
    
    ArchivedNotes(notes)
      
      // corro funcion que toma las notas y solo devuelve las que estan activas
    )
  }
);

const ArchivedNotes = (notes) => {
  archived = []

  notes.map(note => {
    if(note.archived === true) {
      archived.push(note);
    }
  });

  return archived
};



const notes = [
  {
    id:1,
    title: "Titulo de Primer Nota",
    content: "COntenido de la primer nota",
    active: true,
    archived: true
  }, {
    id:2,
    title: "Titulo de Segunda Nota",
    content: "content de la segunda nota",
    active: false,
    archived: true
  }, {
    id:3,
    title: "Titulo de tercer Nota",
    content: "content de la tercer nota",
    active: true,
    archived: true
  }, {      
    id:4,
    title: "Titulo de cuarta Nota",
    content: "content de la cuarta nota",
    active: true,
    archived: false
  }, {
    id:5,
    title: "Titulo de quinta Nota",
    content: "content de la quinta nota",
    active: false,
    archived: true
  }, {
    id:6,
    title: "Titulo de sexrta Nota",
    content: "content de la sexrta nota",
    active: true,
    archived: true
  }, {      
    id:7,
    title: "Titulo de septima Nota",
    content: "content de la septima nota",
    active: true,
    archived: false
}];
