import { ParagraphStyle } from './styles'
export type Props = {
  children: string
  type?: 'secondary' | 'principal'
}
export default function Paragraph({ children, type = 'principal' }: Props) {
  return (
    <>
      <ParagraphStyle type={type}>{children}</ParagraphStyle>
    </>
  )
}
