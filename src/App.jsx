
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = blog =>{
    // console.log(blog)
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)

  }
  const handleMarkAsRead = time =>{
    // console.log('time counting', time)
    const newReadingTime = readingTime + time
    setReadingTime(newReadingTime)
  }


  return (
    <>
      <Header></Header>
      <div className='lg:flex container mx-auto mt-5'>
      <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>
      <Bookmarks bookmarks={bookmarks} readingTime ={readingTime}></Bookmarks>
      </div>
    </>
  )
}

export default App
