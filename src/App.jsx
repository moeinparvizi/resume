import Profile from "./Components/profile";
import More from "./Components/more";
import Theme from "./Components/theme";
import Lang from "./Components/Language"
import { Fragment, useEffect } from "react";
import { useState } from "react";

export default function App() {
  //colors variable
  const color = {
    lightColor:'#FFF3B0',
    black: '#000',
    white: '#eee',
    pink: '#e2e',
    orange: '#E09F3E',
    blue: '#335C67',
    red: '#9E2A2B',
    redChocolate : '#FFF3B0',
  }
  const lightColor = '#FFF3B0'
  // state for colors
  const [darkModeState, setDarkModeState] = useState({
    profileBgColor: "#000",
    profileTextColor: "#fff",
    mainButtonText: (
      <i className="bi bi-brightness-high-fill grid place-items-center"></i>
    ),
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
      stateChanger(
        color.lightColor,
        color.black,
        <i className="bi bi-moon grid place-items-center"></i>,
        color.black,
      );
    } else {
      stateChanger(
        color.black,
        color.white,
        <i className="bi bi-brightness-high-fill grid place-items-center"></i>,
        color.white,
      );
    }
    flag1 = !flag1;
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
      {/* Components for theme */}
      <Theme
        mainText={darkModeState.mainButtonText}
        mainColor={darkModeState.mainButtonColor}
      />
      {/* Component for change language */}
      <Lang />

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
          {/* Components show profile */}
          <Profile />
        </section>
        <section className={"w-full md:w-[60%] h-screen bg-[#2d2d] p-9 pt-20"}>
          {/* Components show more information */}
          <More />
        </section>
      </main>
    </Fragment>
  );
}
