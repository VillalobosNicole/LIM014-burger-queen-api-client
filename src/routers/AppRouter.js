import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from '../components/login/LoginPage';
import ProductsPage from '../components/admin/products/ProductsPage';
import OrdersPage from '../components/kitchen/OrdersPage';
import UsersPage from '../components/admin/users/UsersPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import Navbar from '../pages/Navbar';


export default function AppRouter(){
    return (
     <Router>
        <Navbar/>
         <Switch>
         
         <Route path="/products" component={ProductsPage}/>
         <Route path="/orders" component={OrdersPage}/>
         <Route path="/users/:username" component={UsersPage}/>
         <Route path="/home" component={HomePage}/>
         <Route exact path="/" component={LoginPage}/>
         <Route path="*" component={NotFoundPage}/>
        </Switch>
       </Router>
    );
};
