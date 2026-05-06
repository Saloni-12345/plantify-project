import { Redirect, Route, Switch } from "react-router-dom";
import Gallery from "./gallery";
import About from "./about";
import Disease from "./disease";
import Weather from "./weather";
import HomePage from "./homePage";
import NavbarPlants from "./navbarPlants";


function MainUserComponent(){

    return (
        <>
        <NavbarPlants />
        <Switch>
           <Route  path="/home" component={HomePage}/>
         <Route path="/gallery" component={Gallery} />
         <Route path="/about" component={About} />
         <Route path="/diseases" component={Disease} />
         <Route path="/weather" component={Weather} />
         <Route path="/predict-disease" component={Disease}/>
         <Redirect from="/" to="/home" component={HomePage}   />
        </Switch>
        </>
    )
}



export default MainUserComponent;