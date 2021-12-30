import { Switch, Route, Link } from 'react-router-dom';
import './App.css';
import MainPageComponent from './main/index.js';
import PuppyPageComponent from './puppy/index.js';
import UploadPageComponent from './upload/index.js';

function App() {
    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <Link to="/">
                        <img src="/images/icons/logo.png" alt="logo" />
                    </Link>
                </div>
            </div>
            <div id="container">
                <Switch>
                    <Route exact={true} path="/">
                        <MainPageComponent />
                    </Route>
                    <Route exact={true} path="/puppies/:id">
                        <PuppyPageComponent />
                    </Route>
                    <Route exact={true} path="/upload">
                        <UploadPageComponent />
                    </Route>
                </Switch>
            </div>
            <div id="footer"></div>
        </div>
    );
}

export default App;
