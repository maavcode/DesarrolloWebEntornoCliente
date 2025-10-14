import './App.css'
import List from './components/List'
import PackingList from './components/PackingList'
import Profile from './components/Profile'
import Recipes from './components/Recipes';
import TeaGathering from './components/TeaGathering';
import TeaSet from './components/TeaSet';

var time = new Date().getTime();
function App() {
  return (
    <>
      <Profile />
      <PackingList />
      <List />
      <Recipes drinkers1={2} drinkers2={4}/>
      <TeaSet />
      <TeaGathering />
    </>
  )
}

export default App 
