import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom"; 

import Login from "./pages/login";
import SignUp from "./pages/signUp";
import RouteWrapper from "./routes/RouteWrapper";

function App() {
   
  return(
    <BrowserRouter>
    <Switch>
      <Route path="/login">
       <Login/>
     </Route>

     <Route path="/signup">
      <SignUp/>
     </Route>

     <Route exact path="/">
       <span>eu sou a pagina homeeeeeeeeeeeeeeeeeeeeeeeee</span>
     </Route>

     <RouteWrapper exact path="/privada" isPrivate component={(
          <span>rota só pode ser acessada por um usuario logado</span>
     )}>
       
     </RouteWrapper>

     <Route exact path="/404">
      pagina nao encntrada!!!!!
     </Route>

     <Redirect to="/404"/>
    </Switch>
    </BrowserRouter>
  );
}

export default App;