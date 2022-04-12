import React from 'react'

interface AuthIframeProps
  extends React.DetailedHTMLProps<
    React.IframeHTMLAttributes<HTMLIFrameElement>,
    HTMLIFrameElement
  > {
  src: string
  onLoad: () => void
}

export const AuthIframe: React.FC<AuthIframeProps> = ({
  src,
  onLoad,
  title = 'idpWindow',
  name = 'idpWindow',
  width = '100%',
  height = '100%',
  allow = 'publickey-credentials-get',
  ...props
}) => {
  return (
    <iframe
      title={title}
      name={name}
      width={width}
      height={height}
      allow={allow}
      src={src}
      onLoad={onLoad}
      {...props}
    />
  )
}
