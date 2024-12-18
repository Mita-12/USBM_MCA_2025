
import './App.css'
import Card from './component/Card';

function App() {
let collage='usbm';

  return (
    <>
      <h1 className='text-black'>Hello world</h1>
      <h1>{collage}</h1>
      <Card name={"madhu"}roll={55} />
    </>
  )
}
 

export default App
