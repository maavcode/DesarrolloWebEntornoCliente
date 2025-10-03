import './App.css'
import Avatar from './components/Avatar'
import Galery from './components/Galery'

function App() {
  return (
    <>
      <Avatar person ={{name:"Pepita Grilla", imageId:"1bX5QH6"}}
              size={100}/>
      <Galery />
    </>
  )
}

export default App 
