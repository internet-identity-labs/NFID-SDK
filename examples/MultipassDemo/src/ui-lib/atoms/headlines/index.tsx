interface BaseProps<C extends React.ElementType> {
  as?: C
  children: React.ReactNode
  className?: string
}

type TextProps<C extends React.ElementType> = BaseProps<C> &
  Omit<React.ComponentPropsWithRef<C>, keyof BaseProps<C>>

const headlineStyles = {
  H1: "font-lato uppercase font-bold text-black tracking-wider",
  H2: "font-lato uppercase font-bold text-black tracking-wider",
  H3: "font-lato uppercase text-black tracking-wider",
  H4: "font-lato text-black tracking-wider",
  H5: "font-lato text-black tracking-wide",
}

const headlineSizes = {
  H1: "text-4xl",
  H2: "text-3xl",
  H3: "text-xl",
  H4: "text-lg",
  H5: "text-md",
}

const H1 = <C extends React.ElementType = "h1">({
  children,
  title,
  as,
  className = "",
}: TextProps<C>): JSX.Element => {
  const Component = as || "h1"
  return (
    <Component
      className={`${headlineStyles.H1} ${headlineSizes.H1} ${className || ""}`}
      title={title}
    >
      {children}
    </Component>
  )
}

const H2 = <C extends React.ElementType = "h2">({
  children,
  title,
  as,
  className = "",
}: TextProps<C>): JSX.Element => {
  const Component = as || "h2"
  return (
    <Component
      className={`${headlineStyles.H2} ${headlineSizes.H2} ${className || ""}`}
      title={title}
    >
      {children}
    </Component>
  )
}

const H3 = <C extends React.ElementType = "h3">({
  children,
  title,
  as,
  className = "",
}: TextProps<C>): JSX.Element => {
  const Component = as || "h3"
  return (
    <Component
      className={`${headlineStyles.H3} ${headlineSizes.H3} ${className || ""}`}
      title={title}
    >
      {children}
    </Component>
  )
}

const H4 = <C extends React.ElementType = "h4">({
  children,
  title,
  as,
  className = "",
}: TextProps<C>): JSX.Element => {
  const Component = as || "h4"
  return (
    <Component
      className={`${headlineStyles.H4} ${headlineSizes.H4} ${className || ""}`}
      title={title}
    >
      {children}
    </Component>
  )
}

const H5 = <C extends React.ElementType = "h5">({
  children,
  title,
  as,
  className = "",
}: TextProps<C>): JSX.Element => {
  const Component = as || "h5"
  return (
    <Component
      className={`${headlineStyles.H5} ${headlineSizes.H5} ${className || ""}`}
      title={title}
    >
      {children}
    </Component>
  )
}

export { H1, H2, H3, H4, H5 }
