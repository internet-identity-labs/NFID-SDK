import React from "react";
import { InternetIdentityProvider } from "@identity-labs/react-ic-ii-auth";
import { Button } from "@identity-labs/nfid-sdk-react";

import { Navigation } from "src/ui-lib/organisms/navigation";

import { MPAuthComponent } from "src/components/mp-auth-component";
import { IIAuthComponent } from "src/components/ii-auth-component";

function App() {
  return (
    <div className="w-full h-screen">
      <Navigation />
      <div className="p-8 pt-20 md:p-8 md:w-8/12 md:m-auto md:pt-32 lg:pt-48 2xl:max-w-7xl">
        <Button primary>click me</Button>
        <InternetIdentityProvider
          authClientOptions={{
            maxTimeToLive: BigInt(Date.now() + 7 * 24 * 60 * 60 * 1e9),
            identityProvider: process.env.NEXT_PUBLIC_MP_ID_PROVIDER_URL,
            onSuccess: (principal) => {
              console.log(">> onSuccess:", { principal });
            },
          }}
        >
          <div className="pt-8">
            <MPAuthComponent />
          </div>
        </InternetIdentityProvider>
        <InternetIdentityProvider
          authClientOptions={{
            maxTimeToLive: BigInt(Date.now() + 7 * 24 * 60 * 60 * 1e9),
            identityProvider:
              process.env.NEXT_PUBLIC_ENV === "development"
                ? process.env.NEXT_PUBLIC_II_ID_PROVIDER_URL
                : "https://identity.ic0.app/#authorize",
            onSuccess: (principal) => {
              console.log(">> onSuccess:", { principal });
            },
          }}
        >
          <div className="pt-8">
            <IIAuthComponent />
          </div>
        </InternetIdentityProvider>
      </div>
    </div>
  );
}

export default App;
