import './App.css'
import RespondingToEvents from './blocks/RespondingToEvents'
import StateAComponentMemory from './blocks/StateAComponentMemory'
import StateAsSnapshot from './blocks/StateAsSnapshot'
import QueueingSeriesStateUpdates from './blocks/QueueingSeriesStateUpdates'

function App() {

  return (
    <>
      <RespondingToEvents />
      <StateAComponentMemory />
      <StateAsSnapshot />
      <QueueingSeriesStateUpdates />
    </>
  )
}

export default App
