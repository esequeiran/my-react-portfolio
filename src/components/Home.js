import React from 'react'
import Layout from './Layout'
import fotoPersonal from '../imgs/fotoEvelyn.jpeg'




const Home = () => {

    return (
        <Layout
            title="Evelyn Cristina Sequeira Navarro"
            description="Software Developer"
            className="container-fluid"
        >
            <div className="ms-4 me-4 row justify-content-center mb-5" >
                <div className="card mb-3 transbox p-4" style={{ maxWidth: '1300px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img className="myphoto" src={fotoPersonal} alt="personal photo"></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                                             
                                <p style={{textAlign:'justify'}}>
                                I am a software development student at Cenfotec University. This is my third year of my degree and I am looking for a job opportunity that will help me improve my skills and technological knowledge, but above all to gain experience.
I consider myself a disciplined, responsible and persevering person, willing to take on any challenge and learn from both failure and success. I have great desires for personal improvement and all the desire to do my best.
                                </p>
                                <p style={{textAlign:'justify'}}>
                                   

                                    Feel comfortable visiting my web page and do not hesitate contacting me out. I will love to work with you and I guarantee you that we will grow up together.</p>                            

                            </div>
                        </div>
                    </div>
                </div>




            </div>

        </Layout>)
}

export default Home;