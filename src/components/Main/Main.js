import Intro from "../Intro/Intro";
import Projects from "../Projects/Projects";
import Skills from "../Skills/Skills";
import Contacts from "../Contacts/Contacts";
import GoUp from "../GoUp/Goup";
import Test from '../Test/Test'

function Main({cards}) {
  return(
    <main className="main">
      <Intro />
      <Skills />
      <Projects cards={cards}/>
      <Contacts />
      <GoUp />
    </main>
  )
}

export default Main;