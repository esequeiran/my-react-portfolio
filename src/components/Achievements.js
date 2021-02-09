import React from 'react'
import Layout from './Layout'
import Card from 'react-bootstrap/Card'

import Board from '../imgs/zorvanBoard.jpg'


const Achievements = () => {

    return (
        <Layout
            title="Achievements"
            description="Currently I have one achievement related to software developer career and I am so proud of it."
            className="container-fluid"
        >
            <div className="ms-4 me-4 row justify-content-center" >
                <div className="card mb-3 transbox p-4" style={{ maxWidth: '1300px' }}>
                    <div className="row g-0 mb-3">




                        <Card style={{background:'none', border: 'none'}} >
                            <Card.Text className="mt-3 text-center" as='h5' style={{color: 'white'}}>"Laberinto de Zorvan" board sample</Card.Text>
                            <Card.Img className='p-3' variant="top" src={Board} />
                            <Card.Body>
                            <Card.Text as='h5' style={{color: 'white'}}>Participant at "Expo Cenfo" - Cenfotec University 04/2020 - 04/2020</Card.Text>
                                <Card.Text style={{color:'white'}}>
                                Patterns Programming Course Project: "Laberinto de Zorvan". A game codified in java under OOP, Solid principles and Design Patterns.
      </Card.Text>
                            </Card.Body>
                        </Card>



                    </div>
                </div>




            </div>
        </Layout>)
}

export default Achievements;