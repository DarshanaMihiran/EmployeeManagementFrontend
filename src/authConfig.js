export const msalConfig = {
    auth: {
        clientId: "567888c9-32ba-4abc-8219-f5ea2a40c8ab", // Application (client) ID from Azure AD
        authority: "https://login.microsoftonline.com/8074877c-44f3-430e-99c4-704b081b9bdb", // Directory (tenant) ID from Azure AD
        redirectUri: "http://localhost:3000", // Redirect URI for your React app
    },
    cache: {
        cacheLocation: "sessionStorage", // Can also be "localStorage"
        storeAuthStateInCookie: false,
    },
};

// Scopes for user login (authentication)
export const loginRequest = {
    scopes: ["openid", "profile", "User.Read"]  // Scopes for user authentication and profile info
};

// Scopes for accessing your API (authorization)
export const tokenRequest = {
    scopes: ["api://567888c9-32ba-4abc-8219-f5ea2a40c8ab/.default"]  // Only for accessing your Employee Management API
};