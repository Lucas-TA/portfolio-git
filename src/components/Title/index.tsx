import { Title as TitleStyle } from './styles'
export type Props = {
  children: string
  fontSize?: number
}
export default function Title(props: Props) {
  return (
    <>
      <TitleStyle fontSize={props.fontSize}>{props.children}</TitleStyle>
    </>
  )
}
