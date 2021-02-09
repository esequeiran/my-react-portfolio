import React from 'react'
import Layout from './Layout'
import Workout from '../imgs/workout.jpg'
import Hiking from '../imgs/hiking.jpg'
import Riding from '../imgs/riding.jpg'
import Gardening from '../imgs/gardening.jpg'
import Painting from '../imgs/painting.jpg'
import Carousel from 'react-bootstrap/Carousel'


const Interests = () => {

    return (
        <Layout
            title="Interests"
            description="This section is about my hobbies, some of the things what I am passionate about. I hope you'll find it funny and entertainment."
            className="container-fluid"
        >
            <div className="ms-4 me-4 row justify-content-center" >
                <div className="card mb-3 transbox p-4" style={{ maxWidth: '1300px' }}>
                    <div className="row g-0 justify-content-center">
                        
                        <div className="row">

                            <Carousel>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Workout}                                        
                                        alt="First slide"
                                    />
                                    <Carousel.Caption>
                                        <h3>Exercise</h3>
                                        <p>Weight workout and walking</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Hiking}
                                        alt="Hiking"
                                    />

                                    <Carousel.Caption>
                                        <h3>Hiking</h3>
                                        <p>Walk through the National Parks Forests</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Riding}
                                        alt="Hiking"
                                    />

                                    <Carousel.Caption>
                                        <h3>Motorcycles trips</h3>
                                        <p>Motorcycle, friends and adventures. What else can I ask for?</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            
                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Gardening}
                                        alt="Hiking"
                                    />

                                    <Carousel.Caption>
                                        <h3>Gardening</h3>
                                        <p>Watch your plants grow and take care of them is a big deal for me</p>
                                    </Carousel.Caption>
                                </Carousel.Item>

                                <Carousel.Item>
                                    <img
                                        className="d-block w-100"
                                        src={Painting}
                                        alt="Hiking"
                                    />

                                    <Carousel.Caption>
                                        <h3>Painting</h3>
                                        <p>
Express myself through the paper and the paint makes me believe in the power of creation that I have</p>
                                    </Carousel.Caption>
                                </Carousel.Item>
                            
                            </Carousel>

                        </div>

                    </div>


                </div>

            </div>
        </Layout>)
}

export default Interests;