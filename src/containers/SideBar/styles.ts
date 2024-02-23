import styled from 'styled-components'
import { ParagraphStyle } from '../../components/Paragraph/styles'
export const Description = styled(ParagraphStyle)`
  margin-top: 24px;
  margin-bottom: 40px;
`
export const BtnTheme = styled.button`
  border-radius: 12px;
  padding: 8px;
  color: ${(props) => props.theme.backgroundColor};
  font-size: 10px;
  font-weight: bold;
  background-color: ${(props) => props.theme.mainColor};
  cursor: pointer;
  @media (max-width: 768px) {
    padding: 12px;
    font-size: 12px;
  }
`
export const SidebarContainer = styled.div`
  position: sticky;
  top: 80px;
  left: 0;

  @media (max-width: 768px) {
    margin-bottom: 40px;
    text-align: center;
  }
`
