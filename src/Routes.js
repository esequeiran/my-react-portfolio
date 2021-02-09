import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'
import Autobiography from './components/Autobiography'
import Education from './components/Education'
import Interests from './components/Interests'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'

const Routes = () =>{
    return(<BrowserRouter>   
        <Switch>
            <Route path="/my-react-portfolio/" exact component={Home} />
            <Route path="/my-react-portfolio/autobiography" exact component={Autobiography}/>
            <Route path="/my-react-portfolio/education" exact component={Education}/>
            <Route path="/my-react-portfolio/interests" exact component={Interests}/>
            <Route path="/my-react-portfolio/skills" exact component={Skills}/>
            <Route path="/my-react-portfolio/projects" exact component={Projects}/>
            <Route path="/my-react-portfolio/experience" exact component={Experience}/>
            <Route path="/my-react-portfolio/achievements" exact component={Achievements}/>
                         
        </Switch>
    </BrowserRouter>)
}

export default Routes;