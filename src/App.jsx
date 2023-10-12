import ParticleRing from "./ParticleRing";
import "./App.css";
import qr from "./assets/frame(3).png";
import profile from "./assets/Profile.jpeg";
import { FaLinkedinIn } from "react-icons/fa";

function App() {
  return (
    <>
      <main className="h-screen z-20 flex flex-col justify-center w-screen">
      <div className=" flex items-center justify-center z-20">
        <div className="z-20 justify-center flex">
          <div className="w-[100px]  absolute rounded-full overflow-hidden lg:top-[160px] top-[100px] z-30 h-[100px]">
            <img
              className="z-30 top-0  relative"
              src={profile}
              alt="profile picture"
            />
          </div>
          <h1 className=" font-bold  lg:top-[280px] top-[225px] whitespace-nowrap text-center absolute text-white text-2xl z-30">
            Visit my LinkedIn
          </h1>
        </div>
        
          <div className="w-[200px] absolute rounded-3xl overflow-hidden z-20 bg-gray-950">
            <img src={qr} className="rounded-b-3xl" alt="Qr code" />
            <div
              onClick={() =>
                (location.href =
                  "https://www.linkedin.com/in/giancarlo-l%C3%B3pez-figueroa-462a781a6/")
              }
              className="text-white hover:bg-black flex items-center element justify-center"
            >
              <a
                href="https://www.linkedin.com/in/giancarlo-l%C3%B3pez-figueroa-462a781a6/"
                className="p-1 in"
              >
                <FaLinkedinIn></FaLinkedinIn>
              </a>
            </div>
          </div>
        </div>
      </main>
      <ParticleRing></ParticleRing>
    </>
  );
}

export default App;
