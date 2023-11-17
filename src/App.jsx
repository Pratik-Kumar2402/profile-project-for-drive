import { useState } from 'react'
import Header from './assets/header/header'
import UserData from './assets/userData/UserData'
import Post from './assets/post/Post'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <UserData />
      <Post />
    </>
  )
}

export default App
