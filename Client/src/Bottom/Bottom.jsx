import { Card, Text} from "@nextui-org/react";
import { useContext } from "react";
import { TransectionContext} from "../Context/TansectionContext";
import useFetch from "../Hooks/useFetch";
export default function History(){
  // const gifUrl=useFetch({keyword})
  const {connectedAccount,transections} = useContext(TransectionContext)
    return (connectedAccount!='')?<div>
        <h1 style={{fontWeight:"100",fontSize:"90px",marginBottom:"25px"}}><center>Latest <h1 style={{fontSize:"20px"}}>Transections</h1></center></h1>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
            {transections.map((e,i)=><HistoryCard keyword={e.keyword} amount={e.amount} to={e.addressTo} from={e.addressFrom} key={i} message={e.message} time={e.time}/>)}
        </div>
    </div>:<h1 style={{fontWeight:"100",fontSize:"90px",marginBottom:"25px"}}>Please Connect The Account</h1>
}

function HistoryCard({keyword,amount,to,from,message,time}){
  const gifUrl=useFetch({keyword:keyword})
const title={
    fontSize:"20px",
    fontWeight:"700"
}
   return <>
   <Card css={{ mw: "330px", margin:'10px' ,border:"2px solid black"}} isHoverable={true}>
          <Card.Header>
            <Text b  css={title}>To: <span style={{
                fontSize:"15px",
                fontWeight:"500"
            }}>{to}</span></Text>
          </Card.Header>
          <Card.Header>
            <Text b css={title}>From: <span style={{
                fontSize:"15px",
                fontWeight:"500"
            }}>{from}</span></Text>
          </Card.Header>
          <Card.Header>
            <Text b css={title}>Amount: <span style={{
                fontSize:"15px",
                fontWeight:"500"
            }}>{amount}</span></Text>
          </Card.Header>
          <Card.Header>
            <Text b css={title}>Message: <span style={{
                fontSize:"15px",
                fontWeight:"500"
            }}>{message}</span></Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10"}}>
            <Card.Image  src={gifUrl}
                objectFit="cover"
                width="100%"
                css={{borderRadius:"10px"}}
                alt={"..."}/>
          </Card.Body>
          <Card.Divider />
          <Card.Footer>
            <div style={{width:"100%",backgroundColor:"black",padding:"10px",borderRadius:"15px",display:"flex",alignItems:"center",justifyContent:"center"}}><Text b css={{
                color:"white",
                fontWeight:"400"
            }}>{time}</Text></div>
          </Card.Footer>
        </Card>
   </>
} 