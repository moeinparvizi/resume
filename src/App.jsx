import Profile from "./Components/profile";
import More from "./Components/more";
import Theme from "./Components/theme";
import { Fragment, useEffect } from "react";
import { useState } from "react";

export default function App() {
  // state for colors
  const [darkModeState, setDarkModeState] = useState({
    profileBgColor: "#000",
    profileTextColor: "#fff",
    mainButtonText: <i className="bi bi-brightness-high-fill"></i>,
    mainButtonColor: "#fff",
  });
  // const [flag, setFlag] = useState(true);

  // changer darkModeState function
  function stateChanger(profileBGC, profileTextC, mainButtonT, mainButtonC) {
    setDarkModeState({
      ...darkModeState,
      profileBgColor: profileBGC,
      profileTextColor: profileTextC,
      mainButtonText: mainButtonT,
      mainButtonColor: mainButtonC,
    });
  }

  // dark mode click
  let flag1 = true;
  function darkMode() {
    if (flag1) {
      stateChanger("#fff", "#000", <i className="bi bi-moon"></i>, "#000");
      flag1 = false;
    } else {
      stateChanger(
        "#000",
        "#fff",
        <i className="bi bi-brightness-high-fill"></i>,
        "#fff",
      );
      flag1 = true;
    }
  }

  useEffect(() => {
    return () => {
      document
        .querySelector(".theme-changer")
        .addEventListener("click", darkMode);
    };
  }, []);

  return (
    <Fragment>
      <div className="setting absolute w-screen flex justify-between items-center p-3">
        {/* Components */}
        <Theme
          mainText={darkModeState.mainButtonText}
          mainColor={darkModeState.mainButtonColor}
        />
      </div>

      <main className="flex flex-wrap w-full">
        <section
          className={
            "flex flex-col w-full md:w-[40%] h-screen text-[" +
            darkModeState.profileTextColor +
            "] bg-[" +
            darkModeState.profileBgColor +
            "] p-9 pt-20"
          }
        >
          {/* Components */}
          <Profile />
        </section>
        <section className={"w-full md:w-[60%] h-screen bg-[#2d2d] p-9 pt-20"}>
          {/* Components */}
          <More />
        </section>
      </main>
    </Fragment>
  );
}
