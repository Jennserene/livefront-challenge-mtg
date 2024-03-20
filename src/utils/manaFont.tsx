import { ReactNode } from "react"

type Options = {
  cast: boolean
  shadow?: boolean
}

const defaultOptions: Options = {
  cast: true,
  shadow: true
}

export const replaceMtgSymbols = (text: string, options: Options = defaultOptions): ReactNode => {
  const cast = !!options.cast ? ' ms-cost' : ''
  const shadow = !!options.shadow ? ' ms-shadow' : ''
  
  const mtgSymbolRegex = /{([^{}]+)}/g
  const bracesRegex = /{|}/g
  const matches = text.match(mtgSymbolRegex)
  if (!matches) return text
  
  let replacedText = text
  const replacement = `<i class="ms ms-$1${cast}${shadow}"></i>`
  replacedText = replacedText.replace(mtgSymbolRegex, replacement)
  replacedText = replacedText.replace(bracesRegex, '')
  const reactElement = <span dangerouslySetInnerHTML={{ __html: replacedText }} />

  return reactElement
}