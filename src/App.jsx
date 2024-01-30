import Card from "./components/Card";
import backgroundLarge from "./assets/images/background-pattern-desktop.svg";
import backgroundSmall from "./assets/images/background-pattern-mobile.svg";

function App() {
  return (
    <>
      <section className="h-screen w-screen flex flex-col justify-center items-center relative">
        {/* Large screen background */}
        <div
          style={{ backgroundImage: `url(${backgroundLarge})` }}
          className="hidden md:block w-full h-1/3 absolute -z-10 top-0 bg-cover"
          aria-hidden="true"
        ></div>

        {/* Small screen background */}
        <div
          style={{ backgroundImage: `url(${backgroundSmall})` }}
          className="block md:hidden w-full h-1/3 absolute -z-10 top-0 bg-cover"
          aria-hidden="true"
        ></div>


        {/* content */}
        <Card />
      </section>
    </>
  );
}

export default App;
