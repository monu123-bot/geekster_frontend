
import React from 'react'
import Card from 'react-bootstrap/Card';


const Outlet = (props) => {

    let imagePath = `/restaurant_images/rimage${props.index}.jpg`
    return (
        <>



<Card className='card' style={{ width: '18rem', display: 'flex', flexDirection: 'column' }}>
  <Card.Img variant="top" src={imagePath} />
  <Card.Body style={{ flexGrow: '1' }}>
    <Card.Title>{props.outlet.outlet}</Card.Title>
    <Card.Text>
      {parseFloat(props.outlet.distance).toFixed(2)}Km
    </Card.Text>
  </Card.Body>
  <div style={{ display: 'flex', justifyContent: 'center', paddingBottom: '1rem' }}>
    <button className="button-89" role="button">Assign Order</button>
  </div>
</Card>

      

        </>
    )
}

export default Outlet
