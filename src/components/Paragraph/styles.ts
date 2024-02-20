import styled from 'styled-components'
import { Props } from '.'
export const ParagraphStyle = styled.p<Props>`
  color: ${(props) => (props.type === 'secondary' ? '#949494' : '#282a35')};
  font-size: 14px;
  line-height: 22px;
`
