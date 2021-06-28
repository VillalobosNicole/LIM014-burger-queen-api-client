import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import LoginPage from '../components/login/LoginPage';
import ProductsPage from '../components/admin/products/ProductsPage';
import OrdersPage from '../components/kitchen/OrdersPage';
import UsersPage from '../components/admin/users/UsersPage';
import HomePage from '../pages/HomePage';
import NotFoundPage from '../pages/NotFoundPage';
import WaiterPage from '../components/waiter/WaiterPage'
import Menu from '../components/MenuOrders'


export default function AppRouter(){
    return (
     <Router>
         <Switch>
         <Route path="/home" component={HomePage}/>  
         <Route path="/products" component={ProductsPage}/>
         <Route path="/orders" component={OrdersPage}/>
         <Route path="/users/:username" component={UsersPage}/>
         <Route path ="/waiter" component={WaiterPage}/>
         <Route path ="/MenuOrders" component={Menu}/>
         <Route exact path="/" component={LoginPage}/>
         <Route path="*" component={NotFoundPage}/>
        </Switch>
       </Router>
    );
};
