// src/App.js
import React from 'react';
import { useMsal } from '@azure/msal-react';
import { loginRequest, tokenRequest } from './authConfig';

function App() {
    const { instance, accounts } = useMsal();

    const handleLogin = () => {
        // Use loginRequest to authenticate the user
        instance.loginPopup(loginRequest).then(response => {
            console.log("Login successful:", response);
        }).catch(error => {
            console.error("Login failed:", error);
        });
    };

    const getAccessToken = () => {
        if (accounts.length > 0) {
            // Use tokenRequest to acquire access token for your API
            instance.acquireTokenSilent(tokenRequest).then(response => {
                console.log("Access token for API:", response.accessToken);
                // Use this token to call your API
            }).catch(error => {
                console.error("Failed to acquire token silently:", error);
                // If silent token acquisition fails, use a popup
                instance.acquireTokenPopup(tokenRequest).then(response => {
                    console.log("Access token acquired via popup:", response.accessToken);
                });
            });
        }
    };

    return (
        <div>
            <h1>React Azure AD Authentication</h1>
            <button onClick={handleLogin}>Login with Azure AD</button>
            <button onClick={getAccessToken}>Get Access Token for API</button>
        </div>
    );
}

export default App;
