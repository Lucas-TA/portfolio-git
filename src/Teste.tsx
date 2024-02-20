import styled from 'styled-components'

type btnProps = {
  principal: boolean
  fontSize?: string
}

const Btn = styled.button<btnProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`
const BtnDanger = styled(Btn)`
  background-color: red;
  color: #fff;
`

function Teste() {
  return (
    <>
      <Btn principal>Clique aqui</Btn>
      <Btn fontSize="16px" principal={false}>
        Clique aqui
      </Btn>
      <BtnDanger principal as="a">
        Não Clique Aqui
      </BtnDanger>
    </>
  )
}

export default Teste
