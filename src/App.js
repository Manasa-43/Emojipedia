import logo from './logo.svg';
import './App.css';
import React from "react" 


function App() {
  const emojiList = [
    {emoji:'😊',meaning:'Smiling'},
    {emoji:'😳',meaning:'Disbelief'},
    {emoji:'😔',meaning:'Sad'},
    {emoji:'🥡',meaning:'Takeout Box'},
    {emoji:'❤️',meaning:'Love'},
    {emoji:'😑',meaning:'Annoyed'}, 
  ]

  const [emoji,setEmoji]=React.useState('')

  const handleEmojiMeaning = (meaning)=>{
    setEmoji(meaning)
    console.log(meaning)

  }

  return (
    
    <div className="App">
      <h1> inside outtttt</h1>
      <input placeholder='Search your emoji' className='input'></input>
      <div className='display'>{emoji}</div>
      <div className='flex '>
      {emojiList.map((item,index)=>(
       <div key={index}>
        
        <div  className='emoji ' onClick={()=>handleEmojiMeaning(item.meaning)}>{item.emoji}</div>
        
        
       </div>
       
    
     
   ))}
      </div> 
      
    </div>
  );
}

export default App;
