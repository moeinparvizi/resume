import Profile from "./Components/profile";
import More from "./Components/more";
import Theme from "./Components/theme";
import Lang from "./Components/Language"
import { Fragment, useEffect } from "react";
import { useState } from "react";

export default function App() {
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
        "#fff",
        "#000",
        <i className="bi bi-moon grid place-items-center"></i>,
        "#000",
      );
    } else {
      stateChanger(
        "#000",
        "#fff",
        <i className="bi bi-brightness-high-fill grid place-items-center"></i>,
        "#fff",
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
