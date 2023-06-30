
import './App.css'
import LeftPart from './Leftpart/LeftPart'
import RightPart from './RightPart/RightPart'
function App() {
  return (
    <>
     <h1 className='logo'>Wallet</h1>
     <div className='LeftRightHolder'>
     <LeftPart/>
     <RightPart/>
     </div>
    </>
  )
}

export default App
