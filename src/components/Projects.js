import React from 'react'
import Layout from './Layout'
import fotoPersonal from '../imgs/fotoEvelyn.jpeg'
import Card from 'react-bootstrap/Card'

import { RiGitRepositoryFill } from 'react-icons/ri'


const Projects = () => {

    return (
        <Layout
            title="Personal and university projects"
            description="Some of the projects that I have deleveloped!"
            className="container-fluid"
        >
            <div className="ms-4 me-4 row justify-content-center" >
                <div className="card mb-3 transbox p-4" style={{ maxWidth: '1300px' }}>
                    <div className="row g-0 mb-3">




                        <Card style={{ backgroundColor: 'black' }}>
                            <Card.Header style={{ backgroundColor: '#066068' }} as="h5" >Ecommerce of books application - Udemy Course</Card.Header>
                            <Card.Body>
                                <Card.Title>From 01/2021 to 01/2021
                                </Card.Title>
                                <Card.Text>
                                    Built in react.js, node.js and mongoDB.
                                </Card.Text>
                                <a className="aRepo me-2" href="https://github.com/esequeiran/ReactNodeEcommerceProj">
                                <RiGitRepositoryFill  variant="primary" />
                                    <span className="ms-2">Repository</span>
                                  
                                </a>



                            </Card.Body>
                        </Card>



                    </div>
                    <div className="row g-0 mb-3">
                        <Card style={{ backgroundColor: 'black' }}>
                            <Card.Header style={{ backgroundColor: '#066068' }} as="h5" >"Laberinto de Zorvan" - Patterns Programming Course - Cenfotec University</Card.Header>
                            <Card.Body>
                                <Card.Title>From 01/2020 to 04/2020

                                </Card.Title>
                                <Card.Text>
                                Game built in java and implemented using design patterns as adapter, decorator, factory method, memento, observer, prototype, proxy, singleton, strategy and visitor.
                                </Card.Text>
                                <a className="aRepo" href="https://github.com/esequeiran/LaberintoZorvanProyPatrones">
                                    <RiGitRepositoryFill variant="primary" />
                                    <span className="ms-2">Repository</span>
                                </a>



                            </Card.Body>
                        </Card>

                    </div>
                   
                    <div className="row g-0 mb-3">
                        <Card style={{ backgroundColor: 'black' }}>
                            <Card.Header style={{ backgroundColor: '#066068' }} as="h5" >"MDA" - Proyect 2 Course - Cenfotec University</Card.Header>
                            <Card.Body>
                                <Card.Title>From 01/2020 to 04/2020
                                </Card.Title>
                                <Card.Text>
                                Analyzed and develped a freelance web application with a customized Microsoft MVC architecture built in C#.Net, SQL Server, Framework .Net, ApiRestful, Razor, Javascript, Azure, TFS, Twillio, Sendgrid, Bootswatch and Bootstrap.
                                </Card.Text>
                                <a className="aRepo" href=" https://github.com/esequeiran/Proy2MDAApp">
                                    <RiGitRepositoryFill variant="primary" />
                                    <span className="ms-2">Repository</span>
                                </a>



                            </Card.Body>
                        </Card>

                    </div>

                    <div className="row g-0 mb-3">
                        <Card style={{ backgroundColor: 'black' }}>
                            <Card.Header style={{ backgroundColor: '#066068' }} as="h5" >"SICEN" - Proyect 1 Course - Cenfotec University</Card.Header>
                            <Card.Body>
                                <Card.Title>From 01/2019 to 04/2019
                                </Card.Title>
                                <Card.Text>
                                App for look and post information about Costarican schools and highschools, built in html5, css, javascript, node.js and mongoDB.
                                </Card.Text>
                                <a className="aRepo" href="https://github.com/esequeiran/Proy1SicenApp
">
                                    <RiGitRepositoryFill variant="primary" />
                                    <span className="ms-2">Repository</span>
                                </a>



                            </Card.Body>
                        </Card>

                    </div>
                </div>




            </div>
        </Layout>)
}

export default Projects;