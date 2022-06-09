import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from 'react-router-dom'


function UserCard({item}) {
  return (
    <Link to={`users/${item.first}`} style={{textDecoration:'none'}}>
        <Card className="my-3 p-3  mt-4 ms-3 rounded cards" >
  <Card.Img variant="top" src="profile.png" className="p-3" />
  <Card.Body>
    <Card.Title> {item.first} {item.last}</Card.Title>
    <Card.Text>
      <p><strong></strong></p>
    </Card.Text>
    {/* <Button variant="primary">Go somewhere</Button> */}
    {item.email}, {item.address}, <br></br>{item.created},<br></br>{item.balance}
  </Card.Body>
</Card>
    </Link>
  )
}

export default UserCard;