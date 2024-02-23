import { ParagraphStyle } from './styles'
export type Props = {
  children: string
  type?: 'secondary' | 'principal'
  fontSize?: number
}
export default function Paragraph({
  children,
  type = 'principal',
  fontSize
}: Props) {
  return (
    <>
      <ParagraphStyle type={type} fontSize={fontSize}>
        {children}
      </ParagraphStyle>
    </>
  )
}
