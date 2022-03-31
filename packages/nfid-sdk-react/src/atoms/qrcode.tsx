import clsx from "clsx"
import QR, { QRCodeRenderersOptions } from "qrcode"
import React from "react"

interface QRCodeProps {
  content: string
  options?: QRCodeRenderersOptions
}

export const QRCode: React.FC<QRCodeProps> = ({
  content,
  options,
}: QRCodeProps) => {
  const canvas = React.useRef<HTMLCanvasElement | null>(null)

  React.useEffect(() => {
    if (content) {
      QR.toCanvas(canvas.current, content, options || {}, function (
        error: any,
      ) {
        if (error) console.error(error)
      })
    }
  }, [content, options])

  return (
    <div className={clsx("center relative qrcode")}>
      <canvas ref={canvas} />
    </div>
  )
}
