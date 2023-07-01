import { Input, Button} from "@nextui-org/react";
import AccountDetail from "../AccountDetail/AccountDetail";
import { useContext } from "react";
import { TransectionContext } from './../../Context/TansectionContext';
import { number } from "prop-types";

export default function Form(){
   const{formData,setFormData,handleChange}=useContext(TransectionContext);
   console.log(formData)
    return ( 
       <>
        <AccountDetail/>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"25px"}}>
           <div style={{width:"fit-content",border:"2px solid grey",padding:"40px",backgroundColor:"white",boxShadow:"2px 2px 10px 2px rgba(0,0,0,0.2)",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",gap:"25px",borderRadius:"10px"}}>
            <h1>Enter Details</h1>
           <div className="mb-3">
           <Input 
           css={{
            width:"300px",
            fontSize:"40px",

           }}
           onChange={(e)=>{
            handleChange(e,"addressTo")
           }}
           placeholder="400px"
          bordered 
          labelPlaceholder="Address To" 
          color="primary" 
          status="grey"
          clearable
          />
          </div>
          <div className="mb-3">
           <Input 
            onChange={(e)=>{
               handleChange(e,"amount")
              }}
            type="number"
           css={{
            width:"300px",
            fontSize:"40px",
           }}
           placeholder="400px"
          bordered 
          labelPlaceholder="Amount (ETH)" 
          color="primary" 
          clearable
          />
          </div>
          <div className="mb-3">
           <Input 
            onChange={(e)=>{
               handleChange(e,"keyword")
              }}
           css={{
            width:"300px",
            fontSize:"40px",

           }}
           placeholder="400px"
          bordered 
          labelPlaceholder="Keyword (gif)" 
          color="primary" 
          clearable
          />
          </div>
          <div className="mb-3">
           <Input 
            onChange={(e)=>{
               handleChange(e,"message")
              }}
           css={{
            width:"300px",
            fontSize:"40px",

           }}
           placeholder="400px"
          bordered 
          labelPlaceholder="Message" 
          color="primary" 
          clearable
          />
          </div>
          <div className="mb-3" style={{width:"100%"}}>
          <Button bordered color="gradient" auto ghost css={{fontWeight:"500",padding:"10px",width:"100%"}}>
          Send
        </Button>
          </div>
           </div>
  </div>
       </>
    );
}