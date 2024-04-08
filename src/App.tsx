import { PiMoonFill } from "react-icons/pi";

function App() {
  return (
    <div className="h-screen flex flex-col justify-between">
      <header className="w-full h-20 flex flex-col items-center justify-end">
        <div className="w-4/5 h-full flex justify-between items-center font-source text-neutral-800">
          <a href="http://github.com/pabloalbrnz" target="_blank">
            <PiMoonFill
              size={24}
              className="-rotate-90 hover:text-violet-800 ease-linear transition-colors"
            />
          </a>
          <ul className="flex gap-8 items-center">
            <a href="/">
              <li className="p-2 rounded-lg">Home</li>
            </a>
            <li className="font-bold">×</li>
            <a href="/Projects">
              <li className="p-2 rounded-lg">Projects</li>
            </a>
          </ul>
          <a
            href="https://instagram.com/pabloalbrnz"
            target="_blank"
            className="text-xs"
          >
            @pabloalbrnz
          </a>
        </div>
        <div className="w-4/5 bg-neutral-800 h-px" />
      </header>
      <section className="flex flex-col gap-8 justify-center items-center">
        <div className="flex gap-4">
          <div className="rounded w-52 bg-neutral-300 border border-neutral-800 hover:border-transparent h-80 flex overflow-hidden group/me noise hover:bg-purple-500 transition-colors ease-linear">
            <img
              alt="Pablo photo"
              src="/pablo.png"
              className="h-72 self-end grayscale group-hover/me:grayscale-0 ease-linear drop-shadow-[0_0_12px_rgba(20,15,25,0.1)] group-hover/me:drop-shadow-[0_0_12px_rgba(200,155,255)] transition-[filter,transform] group-hover/me:rotate-[2deg] group-hover/me:scale-110 select-none"
            />
          </div>
          <div className="flex flex-col gap-8 text-neutral-800">
            <h2 className="font-stretch uppercase text-3xl">
              Ppabloo
              <br />
              Alberrnaaz
            </h2>
            <span className="font-source ml-1">
              Hello! 👋 I am a{" "}
              <i>
                Web, UI/UX and Graphic Designer. <br />
                It will be a pleasure to participate in <b>your</b> journey.
              </i>
            </span>
            <button className="w-fit font-stretch uppercase py-2 pl-8 pr-16 bg-neutral-300 rounded border border-neutral-800 hover:border-transparent hover:bg-purple-500 noise hover:text-neutral-200 ease-linear transition-colors select-none">
              Hire me
            </button>
          </div>
        </div>
      </section>
      <footer className="w-full h-20 flex flex-col items-center justify-start">
        <div className="w-4/5 bg-neutral-800 h-px" />
      </footer>
    </div>
  );
}

export default App;
