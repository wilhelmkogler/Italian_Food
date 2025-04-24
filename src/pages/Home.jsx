import Featured from "../components/Featured.jsx";
import Story from "../components/Story.jsx";
import Menu from "../components/Menu.jsx";
import Hero from "../components/Hero.jsx";
import Restaurant from "../components/Restaurant.jsx";

function Home() {
  return (
    <>
      <Hero />
      <Featured />
      <Menu />

      <Story />
      <Restaurant />
    </>
  );
}

export default Home;
