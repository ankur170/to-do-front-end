
import React, { useEffect, useState } from 'react';
import Notes from './Components/Notes';
import notesServices from './services/notes';

const ErrorComponent = (props)=>{
  const {errMessage} = props;
  if(errMessage!==null){
    return(
      <div className = 'error'>
        {errMessage}
      </div>
    )
  }
  else{
    return(null)
  }
}

const App = ()=> {
  const [state,setState] = useState([]);
  const [newNote, setNewNote] = useState('');
  const [errorMessage, setErrorMessage] = useState('this is error');
  const [notesShowAll, setnotesShowAll] = useState(true)
  //console.log('app start running')

  useEffect(()=>{
     //console.log('useeffect start running')
     notesServices.getAll().then(
     (response)=>{
       //console.log('response have got from server')
       setState(response.data)
     })
  },[])

  //console.log(`total notes is ${state.length}`)

  const addNewNoteHandler =(newnote)=>{
    //console.log('new note is' ,newnote.target.value)
    setNewNote(newnote.target.value)
  }

  const noteToShow = notesShowAll ? state : state.filter((note)=> note.important === true);
  const toggleImportant = (id)=>{
    const note = state.find((note)=> note.id === id )
    const changedState = {...note, important : !note.important}

    notesServices.update(changedState,id)
    .then((response)=>{
      setState(state.map((note)=> note.id !==id ? note : response.data))
    })
    .catch((error)=>{
      setErrorMessage(`the note ${note.content} is deleted from the server`)
      setTimeout(()=>{
        setErrorMessage(null)
      },5000)
      setState(state.find((remainNotes)=> remainNotes.id !== id))
    }
    
    )
  }

  const formSubmitHandler = (evt)=>{
    evt.preventDefault()
    const noteObject = {
      content : newNote,
      date : new Date().toISOString(),
      important : Math.random()< .5
    }
    notesServices.create(noteObject).then((response)=>{
      setState(state.concat(response.data));
      setNewNote('')
    })
  }

  return (
    <div>
      <h1>Notes</h1>
      <ErrorComponent message={errorMessage}/>
    <div >
      <button onClick = {()=>(setnotesShowAll(!notesShowAll))}>
        Show{ notesShowAll ? ' important' : ' all '}
      </button>
      <ul>
        {noteToShow.map((note)=>{
          return(<Notes key={note.id} note= {note} toggleImportant={
            ()=> toggleImportant(note.id)
          }/>)
        }) }
      </ul>
      <form onSubmit = {formSubmitHandler}>
        <input id='addnote' name='addnote' placeholder='addNote' value={newNote} onChange= {addNewNoteHandler} />
        <button type='submit'>Submit</button>
      </form>
    </div>
    </div>
  );
}

export default App;
