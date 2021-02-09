import React from "react";

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { ImPhone } from 'react-icons/im'

const Footer = () => {
    return (
        <div className="footer">
            <div className="row mb-2">

                <div className="col">
                    <div className="row">
                        <div className="col-6">
                            <h6>Emails</h6>
                            <ul style={{ listStyleType: 'none' }}>
                                <li>
                                    <span>                                     <MdEmail /></span>

                                    eve.se.na25@gmail.com</li>

                                <li>
                                    <span>                                     <MdEmail /></span>
                                    esequeiran@ucenfotec.ac.cr</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <h6>Phone</h6>
                            <ul style={{ listStyleType: 'none' }}>

                                <li>
                                    <span><ImPhone /></span>
                                    +506 8681-6120</li>

                            </ul>
                        </div>
                    </div>
                </div>


                <div className="col ">
                    <div className="row">
                        <div className="col-5">
                           
                        </div>
                        <div className="col-7 d-flex align-items-center">
                            <ul style={{ listStyleType: 'none' }}>
                                <li>

                                    <a className=""
                                        style={{ color: 'white' }}
                                        target={"_blank"}
                                        rel='noopener noreferrer'
                                        href="https://www.linkedin.com/in/evelyn-cristina-sequeira-navarro-500ab8161/">

                                        <FaLinkedinIn />
                                        <span className="ms-2">Linkedin </span>
                                    </a>
                                </li>
                                
                            </ul>


                        </div>
                    </div>
                </div>




            </div>
            <div className="row copyrigth">
                <div className="container-fluid center">
                    <h6 className="text-muted">
                        &copy; {new Date().getFullYear()} Copyright: Evelyn Cristina Sequeira Navarro
                    </h6>

                </div>

            </div>
        </div>
    )
}
export default Footer;