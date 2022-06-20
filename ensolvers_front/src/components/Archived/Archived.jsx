// Style
import "./Archived.css"

// Hooks
import { useState, useEffect } from 'react';

// LIbrerias
import axios from 'axios';
import { FiEdit } from 'react-icons/fi';    //edit icon
import { ImBoxAdd } from 'react-icons/im';  //archive icon
import { AiFillDelete } from 'react-icons/ai';  //delete

function Archived() {

    
    const [notes, setNotes] = useState([]);     //cuantos posts esoty manejando
    
    useEffect(() => {
        axios
            .get("http://localhost:8080/archived")
            .then(res => {
                console.log(res);
                setNotes(res.data);
            })
            .catch(err => {
                console.log(err)
            })
    }, []);     //la lista vacia es para que solo haga la accion una vez



    const [visible, setVisible] = useState(5);  // cuantos posts estan en display
    
    const showMorePosts = () => {
        setVisible((prevValue) => prevValue + 5);
    };
    



    return (
        <>
          <section>
                <h1>Notas Archivadas</h1>
                <div className="display">
                    {notes.slice(0,visible).map(note => (
                        <div className="card" key={note.id}>
                            <div className="container">
                                <h4 className="noteTitle"><b>{note.title}</b></h4>
                                <p className="noteContent">{note.content}</p>
                                <div className="iconContainer">
                                    <ImBoxAdd className="icon"/>
                                    <FiEdit className="icon"/>
                                    <AiFillDelete className="icon"/>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                <div className="loadMoreContainer">
                        <button onClick={showMorePosts} className='loadMoreBtn'>Load More Notes</button>
                </div>
            
            </section>
        </>
    );
}

export default Archived;