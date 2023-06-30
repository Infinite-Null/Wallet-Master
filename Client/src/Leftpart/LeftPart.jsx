import { Button} from "@nextui-org/react";

export default function LeftPart(){
    return <div style={{height:"90vh",width:"50vw",display:"flex",alignItems:"center",justifyContent:"start",flexDirection:"column",gap:"30px"}}>
     <img src="https://img.freepik.com/free-vector/hand-drawn-creative-cardano-illustration_23-2149196755.jpg" style={{width:"350px",height:"400px",marginBottom:"10px",marginTop:"120px"}}/>
     
     <div>
     <h1 style={{fontSize:"80px", fontWeight:"100"}}>Send money <h1 style={{fontSize:"40px",fontWeight:"100"}}>across the wrold</h1></h1>
     <Button color="gradient" auto ghost css={{width:"200px",height:"60px",marginTop:"20px"}}>
          Connect Wallet
        </Button>
     </div>
    </div>
}