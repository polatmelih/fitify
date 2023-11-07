import * as React from 'react';
import { Navigate } from 'react-router-dom';

export const DefaultRoute = () => {return (<Navigate to={sessionStorage.getItem('token') ? "/" : "/login"} />);};