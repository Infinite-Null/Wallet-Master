import { Card, Grid, Text,} from "@nextui-org/react";
import { useContext } from "react";
import { TransectionContext } from "../../Context/TansectionContext";
export default function AccountDetail(){
  const {connectedAccount}=useContext(TransectionContext);
    return <Card css={{ border:"2px solid grey", w:"390px",height:"100px",maxHeight:"100px",minHeight:"100px",marginTop:"100px"}}>
    <Card.Header>
      <img
        alt="nextui logo"
        src="https://w7.pngwing.com/pngs/798/436/png-transparent-computer-icons-user-profile-avatar-profile-heroes-black-profile-thumbnail.png"
        width="34px"
        height="34px"
      />
      <Grid.Container css={{ pl: "$6" }}>
        <Grid xs={12}>
          <Text h4 css={{ lineHeight: "$xs" }}>
           Account Detail
          </Text>
        </Grid>
        <Grid xs={12}>
          <Text css={{ color: "$accents8"}}>{(connectedAccount=='')?"--":connectedAccount}</Text>
        </Grid>
      </Grid.Container>
    </Card.Header>
  </Card>
}