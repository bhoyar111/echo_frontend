import { lazy } from 'react';
// login section
const Login                     = lazy(() => import('./Views/Login/Login'));
const ForgetPassword            = lazy(() => import('./Views/ForgetPassword/ForgetPassword'));
const Dashboard                 = lazy(() => import('./Views/Dashboard/Dashboard'));
/* General Setting */
// Users
const User                      = lazy(() => import('./Views/Setting/GeneralSetting/User/List'));
const AddUser                   = lazy(() => import('./Views/Setting/GeneralSetting/User/Add'));
const EditUser                  = lazy(() => import('./Views/Setting/GeneralSetting/User/Edit'));
/* Admin Setting */
// Country
const Country                   = lazy(() => import('./Views/Setting/AdminSetting/Country/List'));
const AddCountry                = lazy(() => import('./Views/Setting/AdminSetting/Country/Add'));
const EditCountry               = lazy(() => import('./Views/Setting/AdminSetting/Country/Edit'));
// State
const State                     = lazy(() => import('./Views/Setting/AdminSetting/State/List'));
const AddState                  = lazy(() => import('./Views/Setting/AdminSetting/State/Add'));
const EditState                 = lazy(() => import('./Views/Setting/AdminSetting/State/Edit'));
// City
const City                      = lazy(() => import('./Views/Setting/AdminSetting/City/List'));
const AddCity                   = lazy(() => import('./Views/Setting/AdminSetting/City/Add'));
const EditCity                  = lazy(() => import('./Views/Setting/AdminSetting/City/Edit'));

const routes = [
    // login section
    { path: '/', exact: true, name: "Login", component: Login },
    { path: '/forget-password', exact: true, name: "ForgetPassword", component: ForgetPassword },
    { path: '/dashboard', exact: true, name: "Dashboard", component: Dashboard },
    // Users (Master)
    { path: '/user', exact: true, name: "User", component: User },
    { path: '/user-add', exact: true, name: "User Add", component: AddUser },
    { path: '/user-edit/:id', exact: true, name: "User Edit", component: EditUser },
    /* Admin Setting */
    // Country (Master)
    { path: '/country', exact: true, name: "Country", component: Country },
    { path: '/country-add', exact: true, name: "Country Add", component: AddCountry },
    { path: '/country-edit/:id', exact: true, name: "Country Edit", component: EditCountry },
    // State (Master)
    { path: '/state', exact: true, name: "State", component: State },
    { path: '/state-add', exact: true, name: "State Add", component: AddState },
    { path: '/state-edit/:id', exact: true, name: "State Edit", component: EditState },
    // City (Master)
    { path: '/city', exact: true, name: "City", component: City },
    { path: '/city-add', exact: true, name: "City Add", component: AddCity },
    { path: '/city-edit/:id', exact: true, name: "City Edit", component: EditCity },
];

export default routes;