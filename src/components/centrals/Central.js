import About from "./about/About";
import Studies from "./studies/Studies";
// import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";

export default function Central() {
  return (
    <div style={{ marginTop: 100 }}>
      <div id="about" />
      <About />
      <div id="studies" />
      <Studies />
      <div id="projects" />
      {/* <Projects /> */}
      <div id="contacts" />
      <Contacts />
    </div>
  );
}
