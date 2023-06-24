import React, { useState } from 'react'

function Todo() {
  const[inputValue , setinputValue] = useState('')
  const[todos , settodo] = useState([])
  const[edit , setedit] = useState(false)
  const[editId , setEditId] = useState(null)
  const[editValue , seteditValue] = useState('')

  const addToList = ()=>{
    if(inputValue.trim()!= ''){
      const newtodo = {
        id: new Date().getTime(),
        text: inputValue,
      }
      settodo([...todos,newtodo])
      setinputValue('')
    }
  }

  const todoDelete = (id) => {
    const updatedtodo = todos.filter((item) => item.id != id);
    settodo(updatedtodo);
  };

  const todoEdit = (id,text) =>{
    setedit(true)
    setEditId(id)
    seteditValue(text)
  }

  const update_todo = () =>{
    const updated_todos = todos.map((item)=>{
      if(todos.id != editId){
        return {...todos,text:editValue}
      }
      return todos
    })
    settodo(updated_todos)
    setedit(false)
    setEditId(null)
    seteditValue('')
  }
  return (
    <div className='md:w-[500px] w-3/4 md:mt-14 mt-10 mx-auto'>
      <div className='flex gap-4'>
        <input
          className='w-full p-3 rounded-xl bg-slate-700 outline-none text-white'
          type='text'
          value={inputValue}
          placeholder='Write Your Task'
          onChange={(e) => setinputValue(e.target.value)}
        />
        {edit ? (
          <div>
            <input
              className='w-full p-3 rounded-xl bg-slate-700 outline-none text-white'  
              type='text'
              value={editValue}
              onChange={(e) => seteditValue(e.target.value)}
            />
            <button className='w-full mt-4 py-3 rounded-xl bg-slate-700 text-white' onClick={update_todo}>update</button>
          </div>
        ) : (
          <button
            className='w-20 py-3 rounded-xl bg-slate-700 text-white'
            onClick={() => addToList()}
          >
            Add
          </button>
        )}
      </div>

      <div className='text-white'>
        {todos.map((element) => (
          <div
            key={element.id}
            className='text-white md:flex gap-4 mt-10 border p-2 rounded-xl'
          >
            <p className='md:w-[300px] mb-3'>{element.text}</p>
            <button
              className='bg-slate-700 text-white w-28 h-12 md:mr-0 mr-4 md:h-12 rounded-xl'
              onClick={() => todoEdit(element.id, element.text)}
            >
              Edit
            </button>
            <button
              className='bg-slate-700 text-white w-28 h-12 md:h-12 rounded-xl'
              onClick={() => todoDelete(element.id)}
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
} 

export default Todo;