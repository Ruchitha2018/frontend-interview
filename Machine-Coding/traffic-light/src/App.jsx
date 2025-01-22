import TrafficLight from "../components/TrafficLight"

const config = {
  red: {
    duration: 1000,
    next: 'green',
    backgroundColor: 'red',

  },
  yellow: {
    duration: 500,
    next: 'red',
    backgroundColor: 'yellow',

  },
  green: {
    duration: 1000,
    next: 'yellow',
    backgroundColor: 'green',
  }
}


function App() {

  return (
    <>
      <TrafficLight config={config}/>
    </>
  )
}

export default App
