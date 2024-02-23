import ThemeLight from './Themes/light'
import ThemeDark from './Themes/dark'
import About from './containers/About'
import Projects from './containers/Projects'
import SideBar from './containers/SideBar'
import GlobalStyle, { Container } from './styled'
import { ThemeProvider } from 'styled-components'
import { useState } from 'react'
function App() {
  const [isThemeDark, setIsThemeDark] = useState(true)

  function changeTheme() {
    setIsThemeDark(!isThemeDark)
  }

  return (
    <ThemeProvider theme={isThemeDark ? ThemeDark : ThemeLight}>
      <GlobalStyle />
      <Container>
        <SideBar changeTheme={changeTheme} />
        <main>
          <About />
          <Projects />
        </main>
      </Container>
    </ThemeProvider>
  )
}
export default App
