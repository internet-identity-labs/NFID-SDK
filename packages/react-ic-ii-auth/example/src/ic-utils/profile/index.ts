import React from 'react'
import { createActor } from 'src/ic-utils/create-actor'
import { idlFactory } from 'ic/profile.did'

// TODO: fix this
// eslint-disable-next-line no-unused-vars
import { Identity } from '@dfinity/agent'

interface UseProfileProps {
  identity?: Identity | null
}
export const useProfile = ({ identity }: UseProfileProps) => {
  const profileActor = React.useMemo(() => {
    const profileCanister = process.env.NEXT_PUBLIC_PROFILE_CANISTER_ID

    return createActor(profileCanister, idlFactory, {
      agentOptions: {
        identity,
        host: process.env.NEXT_PUBLIC_IC_HOST || 'http://localhost:8000'
      }
    })
  }, [identity])

  const whoami = React.useCallback(async () => {
    return await profileActor.whoami()
  }, [profileActor])

  return { whoami }
}
