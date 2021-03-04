import { PublicClientApplication } from "@azure/msal-browser";
import { MsalProvider } from "@azure/msal-react";
import React from "react";
import { msalConfig } from "./config/config";
import MainContent from "./ui/content";

function App() {
  const msalInstance = new PublicClientApplication(msalConfig);
  return (
    <>
      <MsalProvider instance={msalInstance}>
        <MainContent />
      </MsalProvider>
    </>
  );
}

export default App;
