import React, {useEffect, useState} from 'react';
import { Switch, NavLink, useLocation } from 'react-router-dom';

import UserList from './components/UsersList';
import LoginForm from './components/LoginForm';
import UserForm from './components/UserForm';
import Digimon from './components/Digimon';
import AuthContext from './auth'

import { ProtectedRoute, AuthRoute } from './Routes';

function App() {
    const [fetchWithCSRF, setFetchWithCSRF] = useState(() => fetch);
    const [currentUserId, setCurrentUserId] = useState(null);
    const [loading, setLoading] = useState(true);
    let location = useLocation();

    const authContextValue = {
        fetchWithCSRF,
        currentUserId,
        setCurrentUserId
    };

    const logoutUser = async ()=> {
            const response = await fetchWithCSRF('/logout', {
                method: 'POST',
                credentials: 'include'
            });
            if(response.ok){
                setCurrentUserId(null)
            }
    }

    useEffect(() => {
        async function restoreCSRF() {
            const response = await fetch('/api/csrf/restore', {
                method: 'GET',
                credentials: 'include'
            });
            if (response.ok) {
                const authData = await response.json();
                setFetchWithCSRF(() => {
                    return (resource, init) => {
                        if (init.headers) {
                            init.headers['X-CSRFToken'] = authData.csrf_token;
                        } else {
                            init.headers = {
                                'X-CSRFToken': authData.csrf_token
                            }
                        }
                        return fetch(resource, init);
                    }
                });
                if(authData.current_user_id){
                    setCurrentUserId(authData.current_user_id)
                }
            }
            setLoading(false)
        }
        restoreCSRF();
    }, []);


    if(loading){
        return null;
    }

    return (
        <AuthContext.Provider value={authContextValue}>
            {location.pathname !== '/login' ? (
            <nav>
                <ul>
                    <li><NavLink to="/" activeclass="active">Home</NavLink></li>
                    <li><NavLink to="/login" activeclass="active">Login</NavLink></li>
                    <li><a onClick={logoutUser} href="/login" activeclass="active">Logout</a></li>
                    <li><NavLink to="/users" activeclass="active">Users</NavLink></li>
                </ul>
            </nav>) : null}
            <Switch>
                <ProtectedRoute
                    path="/users"
                    exact={true}
                    component={UserList}
                    currentUserId={currentUserId}
                />
                <ProtectedRoute
                    path="/users/:id/edit"
                    component={UserForm}
                    currentUserId={currentUserId}
                />
                <AuthRoute
                    path="/login"
                    component={LoginForm}
                    currentUserId={currentUserId}
                />
                <ProtectedRoute
                    path="/"
                    exact={true}
                    component={Digimon}
                    currentUserId={currentUserId}
                />
            </Switch>
        </AuthContext.Provider>
    );
}

export default App;
