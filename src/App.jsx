import Profile from "./Components/profile";
import More from "./Components/more";
import Theme from "./Components/theme";
import Lang from "./Components/Language"
import { Fragment, useEffect } from "react";
import { useState } from "react";
import backgroundImageDark from "./assets/images/profilebackground/dark.png"
import backgroundImageLight from "./assets/images/profilebackground/light.png"

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
  // state for colors
  const [darkModeState, setDarkModeState] = useState({
    profileBgColor: color.black,
    profileTextColor: color.white,
    mainButtonText: (
      <i className="bi bi-brightness-high-fill grid place-items-center"></i>
    ),
    mainButtonColor: color.white,
    profileImageBg: backgroundImageDark,
    profileGlassColor: 'rgba(0,0,0,0.2)'
  });
  // const [flag, setFlag] = useState(true);

  // changer darkModeState function
  function stateChanger(profileBgC, profileTextC, mainButtonT, mainButtonC, profileBg, glassColor) {
    setDarkModeState({
      ...darkModeState,
      profileBgColor: profileBgC,
      profileTextColor: profileTextC,
      mainButtonText: mainButtonT,
      mainButtonColor: mainButtonC,
      profileImageBg : profileBg,
      profileGlassColor: glassColor,
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
        backgroundImageLight,
        'rgba(255,255,255,0.2)'
      );
    } else {
      stateChanger(
        color.black,
        color.white,
        <i className="bi bi-brightness-high-fill grid place-items-center"></i>,
        color.white,
        backgroundImageDark,
        'rgba(0,0,0,0.2)'
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

      <main className="flex flex-wrap w-full overflow-hidden" style={{
        transition: '1s',
              backgroundImage:'url('+darkModeState.profileImageBg+')',
              backgroundPosition: '100% 40%',
      }}>
        <section
          // style={
          //   {
          //     transition: '1s',
          //     backgroundImage:'url('+darkModeState.profileImageBg+')',
          //     backgroundPosition: '90% 50%',
          //   }
          // }
          className={
            "flex p-9 pt-20 flex-col w-full md:w-[40%] profile h-screen text-[" +
            darkModeState.profileTextColor +
            "] bg-[" //+
            // darkModeState.profileBgColor +
            // "]"
          }
        >
          {/* Components show profile */}
          <Profile glassColor={darkModeState.profileGlassColor} />
          {console.log(darkModeState.profileGlassColor)}
        </section>
       <section className={"w-full md:w-[60%] h-screen p-9 pt-20 border"}>
          {/* Components show more information */}
          <More />
        </section>
      </main>
    </Fragment>
  );
}
