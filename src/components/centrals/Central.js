import About from "./about/About";
import Studies from "./studies/Studies";
// import Projects from "./projects/Projects";
import Contacts from "./contacts/Contacts";

export default function Central() {
  return (
    <div style={{ marginTop: 100 }}>
      <About />
      <Studies />
      {/* <Projects /> */}
      <Contacts />
    </div>
  );
}
