// eslint-disable-next-line no-unused-vars
import { Principal } from "@dfinity/principal"
import { useInternetIdentity } from "@identity-labs/react-ic-ii-auth"
import { Loader } from "@identity-labs/nfid-sdk-react"
import clsx from "clsx"
import React from "react"
import { useProfile } from "src/ic-utils/profile"
import { Button } from "src/ui-lib/atoms/button"
import { IIAuth } from "src/ui-lib/molecules/ii-auth"

export const IIAuthComponent = () => {
  const [isLoading, setIsLoading] = React.useState(false)
  const [iam, setIam] = React.useState("")
  const { identity, isAuthenticated, signout } = useInternetIdentity()

  const { whoami } = useProfile({ identity })

  const handleWhoami = React.useCallback(async () => {
    setIsLoading(true)
    const response = await whoami()
    setIam((response as Principal).toString())
    setIsLoading(false)
  }, [whoami])

  return !isAuthenticated ? (
    <IIAuth />
  ) : (
    <div className={clsx("flex flex-col")}>
      <div className={clsx("flex flex-col")}>
        <h2 className={clsx("font-bold text-lg uppercase mb-4")}>
          Delegate: Internet Identity
        </h2>
        {iam ? (
          <>
            <div className={clsx("font-bold mb-2")}>your identity is:</div>
            <div className={clsx("mb-6")}>{iam}</div>
          </>
        ) : (
          <Button onClick={handleWhoami}>
            <span>whoami</span>
          </Button>
        )}
        <Button className="px-10 py-2 mt-2" onClick={signout}>
          signout
        </Button>
        <Button className="px-10 py-2 mt-2" onClick={() => setIam("")}>
          clear
        </Button>
        <Loader isLoading={isLoading} />
      </div>
    </div>
  )
}
