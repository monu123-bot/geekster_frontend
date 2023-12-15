
import React from 'react'
import Card from 'react-bootstrap/Card';


const Outlet = (props) => {

    let imagePath = `/restaurant_images/rimage${props.index}.jpg`
    return (
        <>


            <Card className='card' style={{ width: '18rem' }}>
                <Card.Img variant="top" src={imagePath} />
                <Card.Body>
                    <Card.Title>{props.outlet.outlet}</Card.Title>
                    <Card.Text>
                        {parseFloat(props.outlet.distance).toFixed(2)}Km
                    </Card.Text>


                    <button className="button-89" role="button" >Asign Order</button>


                </Card.Body>
            </Card>

        </>
    )
}

export default Outlet
