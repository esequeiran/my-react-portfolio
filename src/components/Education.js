import React from 'react'
import Layout from './Layout'
import fotoGraduacion from '../imgs/graduacion2.jpeg'


//import de material-ui
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import { MdKeyboardArrowDown } from 'react-icons/md';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        flexBasis: '33.33%',
        flexShrink: 0,
    },
    secondaryHeading: {
        fontSize: theme.typography.pxToRem(15),
        color: theme.palette.text.secondary,
    },
}));


const Education = () => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <Layout
            title="Education"
            description=""
            className="container-fluid"
        >
            <div className="ms-4 me-4 row justify-content-center" >
                <div className="card mb-3 transbox p-4" style={{ maxWidth: '1300px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img className="myphoto" src={fotoGraduacion} alt="..."></img>
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h2 className="card-title">Education</h2>

                                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                    <AccordionSummary
                                        expandIcon={<MdKeyboardArrowDown />}
                                        aria-controls="panel1bh-content"
                                        id="panel1bh-header"
                                    >
                                        <Typography className={classes.heading}>High school</Typography>
                                        <Typography className={classes.secondaryHeading}>Liceo Laboratorio de Liberia</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails> 
                                        <Typography>
                                            2005 - 2009
          </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                    <AccordionSummary
                                        expandIcon={<MdKeyboardArrowDown />}
                                        aria-controls="panel2bh-content"
                                        id="panel2bh-header"
                                    >
                                        <Typography className={classes.heading}>Software Developer Technician</Typography>
                                        <Typography className={classes.secondaryHeading}>
                                            Cenfotec University
          </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            2019 - 2020
          </Typography>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                    <AccordionSummary
                                        expandIcon={<MdKeyboardArrowDown />}
                                        aria-controls="panel3bh-content"
                                        id="panel3bh-header"
                                    >
                                        <Typography className={classes.heading}>Software Developer Engineer</Typography>
                                        <Typography className={classes.secondaryHeading}>
                                            Cenfotec University
          </Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            2019 - nowadays
          </Typography>
                                    </AccordionDetails>
                                </Accordion>


                                <h2 className="card-title mt-5">Certificates</h2>

                                <Accordion expanded={expanded === 'panel4'} onChange={handleChange('panel4')}>
                                    <AccordionSummary
                                        expandIcon={<MdKeyboardArrowDown />}
                                        aria-controls="panel4bh-content"
                                        id="panel4bh-header"
                                    >
                                        <Typography className={classes.heading}>React.js and Node.js</Typography>
                                        <Typography className={classes.secondaryHeading}>Udemy</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <Typography>
                                            01/2020 | MERN Stack React Node Ecommerce from Scratch to Deployment 
                                            <a                         target={"_blank"}
                                        rel='noopener noreferrer'
                                            className="ms-2 aUdemy"  href="https://www.udemy.com/certificate/UC-f8703313-98f5-4a02-8f2c-da3fa1b6f767/">Certificate online</a>
          </Typography>
                                    </AccordionDetails>
                                </Accordion>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>)
}

export default Education;