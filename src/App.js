import './App.css';
import React from "react"


function App() {
  const emojiList = [
    { emoji: '😊', meaning: 'Smiling' },
    { emoji: '😳', meaning: 'Disbelief' },
    { emoji: '😔', meaning: 'Sad' },
    { emoji: '🥡', meaning: 'Takeout Box' },
    { emoji: '❤️', meaning: 'Love' },
    { emoji: '😑', meaning: 'Annoyed' },
    { emoji: '😂', meaning: 'Laughing' },
    { emoji: '🙃', meaning: 'Upside-down face' },
    { emoji: '🍿', meaning: 'Popcorn' },
    { emoji: '🐕', meaning: 'Dog' },

  ]

  const [emoji, setEmoji] = React.useState('translation will appear here')
  const [display, setDisplay] = React.useState("")
 

  const handleEmojiMeaning = (meaning) => {
    setEmoji(meaning)
  }

  const displayEmoji = (event) => {
    
    const emo = event.target.value
    setDisplay(event.target.value)

    const findEle = emojiList.find((item)=>{
      return item.emoji===emo
    })

    console.log(findEle)
    findEle!==undefined?(setDisplay(findEle.meaning)):(setDisplay("data not found in database"))

  }

  return (

    <div className="App">
      <h1> inside outtttt</h1>
      <input placeholder='Search your emoji' className='input' onChange={(e) => displayEmoji(e)}></input>
      <div className='display'>{display}</div>
      <div className='display'>{emoji}</div>
      <div className='flex'>
        {emojiList.map((item, index) => (
          <div key={index}>
            <div className='emoji' onClick={() => handleEmojiMeaning(item.meaning)}>{item.emoji}</div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default App;
