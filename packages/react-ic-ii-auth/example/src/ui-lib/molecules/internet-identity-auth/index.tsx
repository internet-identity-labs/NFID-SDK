import clsx from 'clsx'
import React from 'react'
import { AuthIframe } from '@internet-identity-labs/react-ic-ii-auth'
import { Loader } from 'src/ui-lib/atoms/loader'

interface AuthContentProps {
  internetIdentityProvider: string
  onLoad: () => void
}

export const InternetIdentityIframe: React.FC<AuthContentProps> = ({
  internetIdentityProvider,
  onLoad
}) => {
  const [isLoading, loading] = React.useState(true)
  const handleOnLoad = React.useCallback(() => {
    loading(false)
    onLoad()
  }, [])
  return (
    <div className={clsx(['h-[90%] md:h-full md:overflow-scroll'])}>
      <Loader isLoading={isLoading} />
      <div className={clsx(['h-full pb-4'])}>
        <AuthIframe src={internetIdentityProvider} onLoad={handleOnLoad} />
      </div>
    </div>
  )
}
