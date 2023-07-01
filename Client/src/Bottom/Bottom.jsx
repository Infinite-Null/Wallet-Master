import { Card, Text} from "@nextui-org/react";
export default function History(){
    return <div>
        <h1 style={{fontWeight:"100",fontSize:"90px",marginBottom:"25px"}}><center>Latest <h1 style={{fontSize:"20px"}}>Transections</h1></center></h1>
        <div style={{display:"flex",flexWrap:"wrap",justifyContent:"center",alignItems:"center"}}>
            <HistoryCard key={Math.random()}/>
            <HistoryCard key={Math.random()}/>
            <HistoryCard key={Math.random()}/>
            <HistoryCard key={Math.random()}/>
        </div>
    </div>
}

function HistoryCard(){
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
            }}>0x3456w242</span></Text>
          </Card.Header>
          <Card.Header>
            <Text b css={title}>From: <span style={{
                fontSize:"15px",
                fontWeight:"500"
            }}>0x3456w242</span></Text>
          </Card.Header>
          <Card.Header>
            <Text b css={title}>Message: <span style={{
                fontSize:"15px",
                fontWeight:"500"
            }}>askjdhkj asjdhakjshd asdhkjashdk ashdkjhakjsdh askjhdhkjhs as,dhkajshd sdkjadk sadbnbaskjhdj</span></Text>
          </Card.Header>
          <Card.Divider />
          <Card.Body css={{ py: "$10"}}>
            <Card.Image  src={"https://storage.googleapis.com/gweb-uniblog-publish-prod/original_images/rondancing.gif"}
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
            }}>18/2/2020 | 9:30am</Text></div>
          </Card.Footer>
        </Card>
   </>
} 