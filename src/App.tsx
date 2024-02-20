import About from './containers/About'
import Projects from './containers/Projects'
import SideBar from './containers/SideBar'
import GlobalStyle, { Container } from './styled'
function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <SideBar />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </>
  )
}
export default App
