import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {OnBoard, Profile, SignIn, SignUp} from './pages/Auth';
import Main from './pages/Main';
import {MyPage, MyTree} from './pages/My';
import {
  AddChallenge,
  ChallengeDetail,
  Challenging,
  Record,
} from './pages/Challenge';
import {createGlobalStyle} from 'styled-components';

const GlobalStyle = createGlobalStyle`
	body {
		font-size: 16px;
		font-family: 'Noto Sans KR';

		line-height: 1.7;
	}
`;
// new

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Switch>
        {/* auth */}
        <Route exact path="/auth" component={OnBoard} />
        <Route exact path="/auth/signup" component={SignUp} />
        <Route exact path="/auth/signin" component={SignIn} />
        <Route exact path="/auth/profile" component={Profile} />
        {/* main */}
        <Route exact path="/" component={Main} />
        {/* my */}
        <Route exact path="/my/tree" component={MyTree} />
        <Route exact path="/my/page" component={MyPage} />
        {/* challenge */}
        <Route exact path="/challenge/add" component={AddChallenge} />
        <Route exact path="/challenge/challenging" component={Challenging} />
        <Route exact path="/challenge/record" component={Record} />
        <Route
          exact
          path="/challenge/detail/:challengeId"
          component={ChallengeDetail}
        />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
