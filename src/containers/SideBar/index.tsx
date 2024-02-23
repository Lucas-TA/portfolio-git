import Avatar from '../../components/Avatar'
import Paragraph from '../../components/Paragraph'
import Title from '../../components/Title'
import { BtnTheme, Description, SidebarContainer } from './styles'
export default function SideBar() {
  return (
    <>
      <aside>
        <SidebarContainer>
          <Avatar />
          <Title fontSize={20}>Lucas</Title>
          <Paragraph type="secondary" fontSize={16}>
            lucas-ta
          </Paragraph>
          <Description type="principal" fontSize={12}>
            Engenheiro Front-End
          </Description>
          <BtnTheme>Trocar Tema</BtnTheme>
        </SidebarContainer>
      </aside>
    </>
  )
}
