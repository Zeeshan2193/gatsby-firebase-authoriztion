import "bootstrap/dist/css/bootstrap.min.css";

import "firebase/auth"
import React from 'react';
import AuthProvider from './src/contexts/AuthContext';
import "firebase/auth"
import "firebase/firestore"
import "firebase/functions"

export const wrapRootElement =({elements})=>{
    <AuthProvider>
        {elements}
    </AuthProvider>
}