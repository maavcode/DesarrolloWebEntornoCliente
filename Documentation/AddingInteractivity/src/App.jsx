import './App.css'
import RespondingToEvents from './blocks/RespondingToEvents'
import StateAComponentMemory from './blocks/StateAComponentMemory'
import StateAsSnapshot from './blocks/StateAsSnapshot'
import QueueingSeriesStateUpdates from './blocks/QueueingSeriesStateUpdates'
import UpdatingObjectsInState from './blocks/UpdatingObjectsInState'
import UpdatingArraysInState from './blocks/UpdatingArraysInState'

function App() {

  return (
    <>
      <RespondingToEvents />
      <StateAComponentMemory />
      <StateAsSnapshot />
      <QueueingSeriesStateUpdates />
      <UpdatingObjectsInState />
      <UpdatingArraysInState />
    </>
  )
}

export default App
