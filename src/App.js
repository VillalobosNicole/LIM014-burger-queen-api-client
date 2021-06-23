import AppRouter from "./routers/AppRouter";
import LoginPage from "./components/login/LoginPage"
import { Fragment } from 'react'; 

function App() {
  return (
    <Fragment>
      <AppRouter />
    <LoginPage />
    </Fragment>
    
  );
}

export default App;
