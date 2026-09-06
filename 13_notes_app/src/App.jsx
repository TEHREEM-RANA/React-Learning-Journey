import React, { useState } from 'react'


const App = () => {
  const [title, settitle] = useState('')
  const [details, setdetails] = useState('')
  const [task, settask] = useState([])
  const submithandler =(e)=>{
 e.preventDefault()
  
 const copyTask=[...task];
copyTask.push({title,details})
settask(copyTask)

 settitle('')
 setdetails('')
  }
  const deleteNote=(idx)=>{
   const copyTask=[...task]
   copyTask.splice(idx,1)
   settask(copyTask)

  }
  
  return (
    <div className='h-screen lg:flex bg-black text-white '>
      <form  onSubmit ={(e) =>{
          submithandler(e)
      }} className='flex lg:w-1/2 items-start p-10 gap-4  flex-col'>

       <h1 className='text-3xl font-bold'>Add Notes</h1>
        
          <input 
            type="text" 
            placeholder='Enter Notes Heading' 
            className='px-5 w-full font-medium py-2 border-2 outline-none rounded'
            value={title}
            onChange={(e)=>{
              settitle(e.target.value)
            }}
          />
          <textarea 
            type="text" 
            className='px-5 w-full font-medium h-32 py-2 flex items-start flex-row border-2 outline-none rounded' 
            placeholder='Write Details'
            value={details}
            onChange={(e)=>{
              setdetails(e.target.value)
            }}
          />
          <button className='bg-white font-medium w-full outline-none active:bg-gray-400 active:scale-95 text-black px-5 py-2 rounded'>
            Add Note
          </button>
        
      </form>
      <div className='lg:w-1/2 lg:border-l-2 p-10'>
  <h1 className='text-3xl font-bold'>Your Notes</h1>
  <div className='flex flex-wrap gap-5 mt-5 h-[90%] overflow-auto'>
    {task.map(function(elem,idx){

      return <div key={idx} className="flex justify-between relative h-52 items-start flex-col pt-9 pb-5 w-40 rounded-xl bg-cover text-black  px-4 bg-[url('https://cdn.pixabay.com/photo/2018/03/31/01/33/paper-3277155_1280.png')]">
      <div>
        <h3 className='leading-tight text-xl font-bold'>{elem.title}</h3>
        <p className='mt-4 leading-tight font-medium text-gray-500'>{elem.details}</p>
        </div>
        <button onClick={()=>{
         deleteNote(idx)
        }
        } className='w-full cursor-pointer active:scale-95 bg-red-600 py-1 text-xs rounded-xl font-bold text-white'>delete</button>
      </div>

    })}
  </div>
</div>
    </div>
  )
}

export default App