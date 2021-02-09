import React from 'react'
import Layout from './Layout'
import Card from 'react-bootstrap/Card'



const Experience = () => {

    return (
        <Layout
            title="Work experience"
            description=""
            className="container-fluid"
        >
            <div className="ms-4 me-4 row justify-content-center" >
                <div className="card mb-3 transbox p-4" style={{ maxWidth: '1300px' }}>
                    <div className="row g-0 mb-3">




                        <Card style={{ backgroundColor: 'black' }}>
                            <Card.Header style={{ backgroundColor: '#066068' }} as="h5" >Britt Shopping Partner</Card.Header>
                            <Card.Body>
                                <Card.Title>From 05/2017 to 04/2018
                                </Card.Title>
                                <Card.Text>
                                    Café Britt S.A - Juan Santa María Airport
                                </Card.Text>
                                



                            </Card.Body>
                        </Card>



                    </div>
                </div>




            </div>
        </Layout>)
}

export default Experience;