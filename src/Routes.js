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
            <Route path="/" exact component={Home} />
            <Route path="/autobiography" exact component={Autobiography}/>
            <Route path="/education" exact component={Education}/>
            <Route path="/interests" exact component={Interests}/>
            <Route path="/skills" exact component={Skills}/>
            <Route path="/projects" exact component={Projects}/>
            <Route path="/experience" exact component={Experience}/>
            <Route path="/achievements" exact component={Achievements}/>
                         
        </Switch>
    </BrowserRouter>)
}

export default Routes;