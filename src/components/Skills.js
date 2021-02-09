import React from 'react'
import Layout from './Layout'



const Skills = () => {

    return (
        <Layout
            title="Skills"
            description=""
            className="container-fluid"
        >
            <div className="ms-4 me-4 row justify-content-center" >
                <div className="card mb-3 transbox p-4" style={{ maxWidth: '1300px' }}>
                    <div className="row g-0">

                        <div className="col-4">
                            <ul class="list-group p-3" >
                                <li class="list-group-item active" aria-current="true" style={{backgroundColor: '#006068', border: '1px solid #006068'}} >Tech skills</li>
                                <li class="list-group-item liSkill" >React.js</li>
                                <li class="list-group-item liSkill">Html5</li>
                                <li class="list-group-item liSkill">CSS</li>
                                <li class="list-group-item liSkill">Javascript</li>
                                <li class="list-group-item liSkill">Java</li>
                                <li class="list-group-item liSkill">Node.js</li>
                                <li class="list-group-item liSkill">C#</li>
                                <li class="list-group-item liSkill">Oracle</li>
                                <li class="list-group-item liSkill">PL/Sql</li>
                                <li class="list-group-item liSkill">Mysql</li>
                                <li class="list-group-item liSkill">SqlServer</li>
                                <li class="list-group-item liSkill">MongoDB</li>
                                <li class="list-group-item liSkill">Python</li>
                                <li class="list-group-item liSkill">Bootstrap</li>
                            </ul>

                        </div>
                        <div className="col-4">
                        <ul class="list-group p-3" >
                                <li class="list-group-item active" aria-current="true" style={{backgroundColor: '#006068', border: '1px solid #006068'}}>Knowledge</li>
                                <li class="list-group-item liSkill">Object Oriented Paradigm</li>
                                <li class="list-group-item liSkill">Solid Principles</li>
                                <li class="list-group-item liSkill">Patterns Design</li>
                                <li class="list-group-item liSkill">Spring Boot</li>
                                <li class="list-group-item liSkill">Azure Devops</li>
                                <li class="list-group-item liSkill">Data Structures</li>
                                <li class="list-group-item liSkill">NoSql DB</li>
                                <li class="list-group-item liSkill">Sql DB</li>
                            </ul>
                        </div>
                        <div className="col-4">
                        <ul class="list-group p-3" >
                                <li class="list-group-item active" aria-current="true" style={{backgroundColor: '#006068', border: '1px solid #006068'}}>Soft skills</li>
                                <li class="list-group-item liSkill">Team work</li>
                                <li class="list-group-item liSkill">Adaptability</li>
                                <li class="list-group-item liSkill">Problem-solving</li>
                                <li class="list-group-item liSkill">Interpersonal skills</li>
                            </ul>
                        </div>
                    </div>
                </div>




            </div>
        </Layout>)
}

export default Skills;