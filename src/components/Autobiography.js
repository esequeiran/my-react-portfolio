import React from 'react'
import Layout from './Layout'
import fotoPersonal from '../imgs/fotoauto.jpg'

import {RiDownload2Fill} from 'react-icons/ri'
import Resume from '../files/EvelynSequeiraResume.pdf'



const Autobiography = () => {

    return (
        <Layout
            title="Autobiography"
            description="This is my history!"
            className="container-fluid"
        >
            <div className="ms-4 me-4 row justify-content-center" >
                <div className="card mb-3 transbox p-4" style={{maxWidth: '1300px'}}>
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img className="myphoto" src={fotoPersonal} alt="..."></img>
                                </div>
                                <div className="col-md-8">
                                    <div className="card-body">
                                      
                                        <p className="card-text" style={{textAlign:'justify'}}>
                                        
My name is Evelyn Sequeira Navarro, I was born in Alajuela on July 25, 1992. When I was 3 years old my family and I moved to Liberia. Most of my childhood and youth was spent in that city. I must say that those stages were the happiest and greatest I've ever had; laughter, fun and adventures flooded my days. But of course not everything was playing, in school and college I always stood out for being a very disciplined, responsible and persevering person with my assignments. I loved getting good grades and making my parents proud. That habit has been widespread to date. After completed my   Nurse Bacherlor's degree on 2016, I made the decision to study a different career and get more opportunities. Around 2019 I started studying software development engineering and to date it has been a challenging and rewarding experience that has made me feel empowered and lively. 
                                        </p>
                                        <a style={{color:'white'}} download href={Resume}>
                                        <span style={{color:'white'}} className="me-2">Download resume</span> 
                                        <RiDownload2Fill/>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>



              
                </div>   
        </Layout>)
}

export default Autobiography;