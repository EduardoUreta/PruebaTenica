// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { RickMortyGrid } from './components/RickMortyGrid';
// import { CharacterDetails } from './components/CharacterDetails';

function App() {

  return (
    <>
      {/* <Router>
            <Switch>
                <Route exact path="/" component={RickMortyGrid} />
                <Route exact path="/details/:id" component={CharacterDetails} />
            </Switch>
        </Router> */}
        <RickMortyGrid/>
    </>
  )
}

export default App
