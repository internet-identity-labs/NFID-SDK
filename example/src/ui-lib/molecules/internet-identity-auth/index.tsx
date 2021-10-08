import clsx from "clsx";
import React from "react";
import { Loader } from "src/ui-lib/atoms/loader";

interface AuthContentProps {
  internetIdentityProvider: string;
}

export const InternetIdentityIframe: React.FC<AuthContentProps> = ({
  internetIdentityProvider,
}) => {
  const [isLoading, loading] = React.useState(true);
  return (
    <div className={clsx(["h-[90%] md:h-full md:overflow-scroll"])}>
      <div className={clsx(["h-full w-full", isLoading ? "block" : "hidden"])}>
        <Loader />
      </div>
      <div className={clsx(["h-full pb-4"])}>
        <iframe
          title="idpWindow"
          name="idpWindow"
          src={internetIdentityProvider}
          width="100%"
          height="100%"
          allow="publickey-credentials-get"
          onLoad={() => loading(false)}
        />
      </div>
    </div>
  );
};
