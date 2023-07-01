import './App.css'
import History from './Bottom/Bottom'
import LeftPart from './Leftpart/LeftPart'
import RightPart from './RightPart/RightPart'
function App() {
  return (
    <>
    <h1 style={{
      fontSize:"60px",
      fontWeight:"200",
      textAlign:"center",
      margin:'0px'
    }}>
      <span style={{
      fontSize:"80px",
      fontWeight:"700",
      color:"blue"
    }}>W</span>allet
    </h1>
     <h1 style={{
      fontSize:"20px",
      textAlign:"center",
      margin:"0px",
      
     }}>
      <span style={{
      fontSize:"30px",
      fontWeight:"400",
      color:"purple"
    }}>M</span>aster
     </h1>
     <div className='LeftRightHolder'>
     <LeftPart/>
     <RightPart/>
     <div style={{boxShadow:"2px 2px 10px 1px rgba(0,0,0,0.5)",height:"fit-content",marginTop:"80px",width:"100%"}}>
      <History/>
     </div>
     </div>
    </>
  )
}

export default App
