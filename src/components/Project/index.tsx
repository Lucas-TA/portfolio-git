import Paragraph from '../Paragraph'
import Title from '../Title'
import { Card, LinkButton } from './styles'
export default function Project() {
  return (
    <>
      <Card>
        <Title>Projeto Lista de Tarefas</Title>
        <Paragraph type="secondary">
          Lista de Tarefas feita com Vue.js
        </Paragraph>
        <LinkButton>Visualizar</LinkButton>
      </Card>
    </>
  )
}
