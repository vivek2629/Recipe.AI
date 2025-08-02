import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { getAnswer } from './langchain'


function App() {
  
  const [arr, setArr] = useState([]); // answer, qeuestion
  const [question, setQuestion] = useState('');
  const [wait, setWait] = useState(false);

  async function handleSubmit(e) {
    setWait(true);
    e.preventDefault();
    const answer = await getAnswer(question);
    const newArr = [...arr, {question, answer}];
    
    setArr(newArr);
    setQuestion('');
    console.log(newArr);
  
  }

  const oldlength = arr.length;

  if (arr.length > oldlength ){
    setWait(false);
  }

  return (
    <>
      <div className='h-full'>


       <div className='flex flex-col justify-center items-center mb-5 pb-5'>  
        <div className='text-center pt-5'>
          <img src='https://res.cloudinary.com/dpencg7d8/image/upload/v1753942321/Gemini_Generated_Image_ctwgycctwgycctwg__1_-removebg-preview_f2jdcg.png' className='w-70'/>
          <p className='text-zinc-600 text-xs'>Find your next favorite recipe</p>
        </div>
         </div>
       
           <div className='fixed bottom-0 left-0 w-full shadow-md p-4 flex justify-center'>
            <form className='w-full max-w-2xl flex gap-1' onSubmit={handleSubmit}>
              <textarea type="text" placeholder="Search for a recipe" value={question} className='w-xl bg-green-50 border-2 border-lime-600 rounded-md p-1'
              onChange={(e)=> setQuestion(e.target.value)}
              ></textarea>
              <button className='h-14 w-10' type='submit'>
                <i class="fa-solid fa-magnifying-glass text-green text-2xl rounded-lg p-1 "></i>
                </button>
            </form>
          
            </div>     

        
          <div className='flex flex-col items-center gap-4 w-full min-h-screen p-4'>
            {arr.map((query, index)=>{
              return (
                <>
                <div key={index} className='w-full max-w-2xl flex flex-col gap-4'>
                  <div className='bg-red-50 p-4 text-sm w-80 rounded-tl-2xl rounded-bl-2xl rounded-br-2xl border-2 border-red-800 self-end'>{query.question}</div>
                  <div>
                    <p className='bg-red-50 p-3 text-sm w-80 rounded-tr-2xl rounded-bl-2xl rounded-br-2xl border-2 border-neutral-600'>{query.answer}</p>
                  </div>
                </div>
                </>
              )
            })}
            {wait ? <div class="spinner-border text-success" role="status">
                    <span class="sr-only">Loading...</span>
                    </div>: null}
          </div>

           
          
         
        </div>
    
    </>
  )
}

export default App
