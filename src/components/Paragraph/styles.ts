import styled from 'styled-components'
import { Props } from '.'
export const ParagraphStyle = styled.p<Props>`
  color: ${(props) =>
    props.type === 'secondary'
      ? props.theme.secondaryColor
      : props.theme.mainColor};
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  line-height: 22px;
`
