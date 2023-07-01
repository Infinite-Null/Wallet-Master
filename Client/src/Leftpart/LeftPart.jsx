import {useContext} from "react";
import { Button} from "@nextui-org/react";
import "./LeftPart.css"
import { TransectionContext } from './../Context/TansectionContext';
export default function LeftPart(){
  const {connectWallet, connectedAccount}=useContext(TransectionContext);
    return <div 
    className="MainLeftPart">
     <img src="https://cdn.dribbble.com/users/107759/screenshots/5095541/crypto_illustration2_60fps.gif" style={{width:"500px",height:"500px",marginBottom:"10px",marginTop:"50px",}}/>
     
     <div>
     <h1 style={{fontSize:"80px", fontWeight:"100"}}>Send money <p style={{fontSize:"40px",fontWeight:"100"}}>across the wrold</p></h1>
     {(connectedAccount=='')?<Button color="gradient" auto ghost css={{width:"200px",height:"60px",marginTop:"20px"}} onClick={connectWallet}>
          {"Connect Wallet ->"}
        </Button>:<Button color="gradient" auto css={{width:"200px",height:"60px",marginTop:"20px"}}>
          {"Account Connected"}
        </Button>}
     </div>
    </div>
}