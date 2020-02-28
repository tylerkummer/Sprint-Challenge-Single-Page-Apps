import React from "react";
import{ Card, CardBody, CardTitle, CardText} from 'reactstrap';

export default function CharacterCard(props) {
  //return <span>todo: character</span>;

  return (
    <Card style={{margin: '0 auto', width:'20%', backgroundColor: "lightblue"}}>
        <CardBody>
            <CardTitle style={{color: 'white', textAlign: "center"}}><br/>{props.avatar}</CardTitle>
            <CardTitle style={{color: 'white', textAlign: "center"}}>Name:<br/>{props.name}</CardTitle>
            <CardText style={{color: 'white', textAlign: "center"}}>Status:<br/>{props.status}</CardText>
            <CardText style={{color: 'white', textAlign: "center"}}>Gender:<br/>{props.gender}</CardText>
        </CardBody>
    </Card>
);
}
