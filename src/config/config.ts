export const b2cPolicies = {
    names: {
        signUpSignIn: "B2C_1_MyLoginFlow"
    },
    authorities: {
        signUpSignIn: {
            authority: "https://YOUTTENANT.b2clogin.com/YOUTTENANT.onmicrosoft.com/B2C_1_MyLoginFlow",
          },
    },
    authorityDomain: "chriiiiis.b2clogin.com"
}

  export const msalConfig = {
    auth: {
      clientId: "11111111-1111-1111-1111-111111111111", // This is the ONLY mandatory field; everything else is optional.
      authority: b2cPolicies.authorities.signUpSignIn.authority, // Choose sign-up/sign-in user-flow as your default.
      knownAuthorities: [b2cPolicies.authorityDomain], // You must identify your tenant's domain as a known authority.
      redirectUri: "https://localhost:3000", // You must register this URI on Azure Portal/App Registration. Defaults to "window.location.href".
    },
    cache: {
      cacheLocation: "localStorage", // Configures cache location. "sessionStorage" is more secure, but "localStorage" gives you SSO.
      storeAuthStateInCookie: false, // If you wish to store cache items in cookies as well as browser cache, set this to "true".
    },
  };
  
/**
 * Scopes you add here will be prompted for user consent during sign-in.
 * By default, MSAL.js will add OIDC scopes (openid, profile, email) to any login request.
 * For more information about OIDC scopes, visit: 
 * https://docs.microsoft.com/azure/active-directory/develop/v2-permissions-and-consent#openid-connect-scopes
 */
export const loginRequest = {
  scopes: ["openid"] //...apiConfig.b2cScopes],
};

/**
 * Scopes you add here will be used to request a token from Azure AD B2C to be used for accessing a protected resource.
 * To learn more about how to work with scopes and resources, see: 
 * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/resources-and-scopes.md
 */
// The current application coordinates were pre-registered in a B2C tenant.
export const apiConfig = {
  b2cScopes: ["https://chriiiiis.onmicrosoft.com/helloapi/demo.read"],
  webApi: "https://chriiiiis.azurewebsites.net/hello"
};

export const tokenRequest = {
  scopes: [...apiConfig.b2cScopes],  // e.g. ["https://fabrikamb2c.onmicrosoft.com/helloapi/demo.read"]
  forceRefresh: false // Set this to "true" to skip a cached token and go to the server to get a new token
};