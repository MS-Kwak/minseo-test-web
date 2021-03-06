import { Switch, Route, Link, useHistory } from 'react-router-dom';
import 'antd/dist/antd.css';
import './App.css';
import MainPageComponent from './main/index.js';
import PuppyPageComponent from './puppy/index.js';
import UploadPageComponent from './upload/index.js';
import { Button } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

function App() {
    const history = useHistory();
    const fnClickBtn = function () {
        history.push('/upload');
    };

    return (
        <div>
            <div id="header">
                <div id="header-area">
                    <Link to="/">
                        <img src="/images/icons/logo.png" alt="logo" />
                    </Link>
                    <Button size="large" onClick={fnClickBtn} icon={<UploadOutlined />}>
                        퍼피 업로드
                    </Button>
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
