import { PiMoonFill, PiStarFourFill } from "react-icons/pi";
import me from "./assets/pablo.png";
import violetTape from "./assets/violet_tape.png";
import subway1 from "./assets/subway1.jpg";
import { projects } from "./projects";
import "./global.css";
import { useEffect, useState } from "react";

function App() {
  const [randomName, setRandomName] = useState({
    1: "Ppabbloo",
    2: "Albbernnaaz",
  });
  const name = [
    { 1: "Ppabbloo", 2: "Albbernnaaz" },
    { 1: "Paabllo", 2: "AAlbeernaaz" },
    { 1: "Ppabloo", 2: "Albbernnaaz" },
    { 1: "Pablloo", 2: "Allberrnazz" },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      const random = Math.floor(Math.random() * name.length);
      setRandomName(name[random]);
    }, 5000);

    return () => clearInterval(timer);
  }, [name]);

  // document.addEventListener("wheel", (e) => {
  //   if (e.deltaY >= 0) {
  //     document
  //       .getElementById("projects")
  //       ?.scrollIntoView({ behavior: "smooth" });
  //   } else if (e.deltaY <= 0) {
  //     document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
  //   }
  // });

  return (
    <div className="w-full flex flex-col items-center">
      <div className="h-screen w-4/5 flex flex-col justify-between" id="home">
        <header className="w-full h-20 flex flex-col items-center justify-end">
          <div className="w-full h-full flex justify-between items-center font-source text-neutral-800">
            <div className="w-1/3 flex justify-start">
              <a href="http://github.com/pabloalbrnz" target="_blank">
                <PiMoonFill
                  size={24}
                  className="-rotate-90 hover:text-violet-800 ease-linear transition-colors"
                />
              </a>
            </div>
            <ul className="flex gap-8 items-center justify-center w-1/3">
              <div className="w-1/2 flex justify-end">
                <a href="/">
                  <li className="p-2 rounded-lg">Home</li>
                </a>
              </div>
              <li className="font-bold">×</li>
              <div className="w-1/2 flex justify-start">
                <a href="#projects">
                  <li className="p-2 rounded-lg">Projects</li>
                </a>
              </div>
            </ul>
            <div className="w-1/3 flex justify-end">
              <a
                href="https://instagram.com/pabloalbrnz"
                target="_blank"
                className="text-xs opacity-50"
              >
                @pabloalbrnz
              </a>
            </div>
          </div>
          <div className="w-full bg-neutral-800 h-px" />
        </header>
        <section className="w-full flex flex-col gap-8 justify-center px-24">
          <div className="flex gap-4">
            <div className="rounded hover:rounded-md w-52 bg-neutral-300 border border-neutral-800 hover:border-transparent h-80 flex overflow-hidden group/me noise-light hover:bg-purple-500 transition-all  shadow shadow-transparent hover:shadow-2xl hover:shadow-purple-400 ease-linear">
              <img
                alt="Pablo photo"
                src={me}
                className="h-72 self-end grayscale group-hover/me:grayscale-0 ease-linear drop-shadow-[0_0_12px_rgba(20,15,25,0.1)] group-hover/me:drop-shadow-[0_0_12px_rgba(200,155,255)] transition-all group-hover/me:rotate-[2deg] group-hover/me:scale-110"
              />
            </div>
            <div className="flex flex-col gap-8 text-neutral-800">
              <h2 className="font-stretch uppercase text-3xl">
                {randomName[1]}
                <br />
                {randomName[2]}
              </h2>
              <span className="font-source ml-1">
                Hello World!
                <span className="text-2xl -hue-rotate-[67.5deg] brightness-75">
                  👋
                </span>{" "}
                I am a{" "}
                <i>
                  <b>Web, UI/UX and Graphic Designer.</b>
                </i>
                <br />
                It will be a pleasure to be part of{" "}
                <b>
                  <i>your</i>
                </b>{" "}
                journey.
              </span>
              <button className="flex gap-4 w-fit font-stretch uppercase py-2 pl-8 pr-12 ml-1 bg-neutral-300 rounded hover:rounded-md border border-neutral-800 hover:border-transparent hover:bg-purple-500 noise-light hover:text-neutral-200 ease-linear transition-all shadow shadow-transparent hover:shadow-xl hover:shadow-purple-300 group/hire">
                Hire me{" "}
                <span className="-hue-rotate-[67.5deg] brightness-75 group-hover/hire:hue-rotate-0 group-hover/hire:brightness-100 ease-linear transition-all">
                  ✨
                </span>
              </button>{" "}
            </div>
          </div>
        </section>
        <footer className="w-full h-20 flex flex-col items-center justify-start">
          <div className="w-full bg-neutral-800 h-px" />
        </footer>
      </div>
      <div
        className="min-h-screen w-full bg-neutral-800 noise-dark px-20 py-12 flex flex-col gap-12"
        id="projects"
      >
        <span className="w-full uppercase text-center font-stretch text-neutral-200 text-lg">
          My proojeects
        </span>
        <div className="flex flex-col gap-8">
          {projects.map((project) => {
            return (
              project.thumb && (
                <div className="flex flex-col gap-2">
                  <div className="flex gap-4 overflow-scroll">
                    <div className="min-w-48 min-h-48 max-w-48 max-h-48 aspect-square rounded bg-neutral-200 flex flex-col overflow-hidden">
                      <img
                        src={project.thumb}
                        alt={project.name}
                        className="h-full object-cover"
                      />
                    </div>
                    {project.imgs &&
                      project.imgs.map((p) => {
                        return (
                          <div className="min-w-48 min-h-48 max-w-48 max-h-48 aspect-square rounded bg-neutral-200 flex flex-col overflow-hidden">
                            <img
                              src={p.img}
                              alt=""
                              className="h-full object-cover"
                            />
                          </div>
                        );
                      })}
                  </div>
                  <a
                    href={project.href || "#"}
                    target={project.href ? "_blank" : "_parent"}
                    className="w-fit font-source text-neutral-200 font-semibold px-0.5 underline"
                  >
                    {project.name || "Untitled project"}
                  </a>
                </div>
              )
            );
          })}
        </div>
      </div>
      <div className="fixed -z-10 noise-dark size-full opacity-25" />
      <span className="absolute leading-4 font-source text-2xl rotate-6 opacity-10 top-80 left-[64rem] text-center blur-[0.25px]">
        xxxxxxxxxx
        <br />
        xxxxxxxxxxxx
        <br />
        xxxxxxxxxxx
        <br />
        xxxxxxxxxxxx
        <br />
        xxxxxxxxxxx
        <br />
        xxxxxxxxxxxx
        <br />
        xxxxxxxxxxx
        <br />
        xxxxxxxxxx
        <br />
        xxxxxxxxxx
        <br />
        xxxxxxxxxxx
        <br />
      </span>
      <span className="absolute -z-20 leading-4 font-source text-2xl -rotate-[9deg] opacity-10 top-24 left-40 text-center blur-[0.75px]">
        xxxxxxxxxx
        <br />
        xxxxxxxxxxxx
        <br />
        xxxxxxxxxxx
        <br />
        xxxxxxxxxxxx
        <br />
        xxxxxxxxxxx
        <br />
        xxxxxxxxxxxx
        <br />
        xxxxxxxxxxx
        <br />
        xxxxxxxxxx
        <br />
        xxxxxxxxxx
        <br />
        xxxxxxxxxxx
        <br />
      </span>
      <div className="absolute top-96 left-[60rem] flex flex-col gap-1.5 -rotate-6 hover:-rotate-[5deg] ease-linear transition-transform">
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
        <div className="w-48 h-1 bg-neutral-800 hover:bg-purple-800 ease-linear transition-colors" />
      </div>
      <div className="absolute ml-[60rem] mt-32 w-48 drop-shadow-[1px_8px_8px_rgba(0,0,0,0.1)] group/polaroid  hover:drop-shadow-[2px_16px_8px_rgba(200,155,255,0.75)] ease-linear transition-all saturate-[0.38] hover:saturate-[0.8]">
        <img
          src={subway1}
          className="absolute p-2 pb-12 w-48 bg-neutral-200 -rotate-[8deg] blur-[0.75px] hover:blur-[0.25px] group-hover/polaroid:-rotate-[6deg] ease-linear transition-transform"
        />
        <img
          src={violetTape}
          className="absolute w-20 left-12 -top-2 -rotate-[12deg] opacity-75 contrast-150 brightness-[1.22] group-hover/polaroid:-rotate-[10deg] ease-linear transition-transform"
        />
        <span className="absolute font-source -rotate-[8deg] text-sm left-[3.5rem] top-[9.5rem] text-neutral-400 font-semibold italic opacity-40 group-hover/polaroid:-rotate-[6deg] ease-linear transition-transform">
          life is good
        </span>
      </div>
      <PiStarFourFill className="absolute top-36 left-20 text-6xl rotate-[28deg] text-neutral-800 hover:rotate-[12deg] ease-linear transition-[transform]" />
      <PiStarFourFill className="absolute top-96 left-[52rem] text-4xl rotate-[48deg] text-neutral-800 hover:-rotate-[24deg] ease-linear transition-[transform]" />
      <PiStarFourFill className="absolute top-[30rem] left-48 text-xl rotate-[8deg] text-purple-500 hover:-rotate-[90deg] ease-linear transition-[transform]" />
      <PiStarFourFill className="absolute top-28 left-[56rem] text-2xl text-purple-500 hover:animate-spin ease-linear transition-[transform]" />
      <span className="absolute text-3xl -hue-rotate-[67.5deg] brightness-75 top-[22rem] rotate-[12deg] hover:-rotate-6 ease-linear transition-transform">
        ✌️
      </span>
      <span className="absolute text-3xl -hue-rotate-[67.5deg] brightness-75 top-[28rem] left-[25.6rem] -rotate-[128deg] hover:-rotate-[102deg] ease-linear transition-transform">
        🤙
      </span>
    </div>
  );
}

export default App;
