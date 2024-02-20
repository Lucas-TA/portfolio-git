import Title from '../../components/Title'
import Paragraph from '../../components/Paragraph'
import { GithubSection } from './styles'
export default function About() {
  return (
    <>
      <section>
        <Title fontSize={16}>Sobre Mim</Title>
      </section>
      <Paragraph type="principal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        reiciendis deleniti excepturi voluptas optio eum id nostrum repudiandae
        consequuntur libero, quis adipisci expedita non doloribus sint nobis
        quasi recusandae voluptatibus.
      </Paragraph>
      <GithubSection>
        <img src="https://github-readme-stats.vercel.app/api?username=lucas-ta&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
        <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=lucas-ta&layout=compact&langs_count=7&theme=dracula" />
      </GithubSection>
    </>
  )
}
