import Profile from "./Components/profile";
import More from "./Components/more";
import { Fragment } from "react";

export default function App() {
const profileColor = '#2d2d'
const moreColor = '#2d2d2d'

  return (
    <Fragment>
      <div className="setting absolute w-screen flex justify-between items-center p-3">
        <span className="lang-changer rounded-xl border p-3">
          farsi
        </span>
        <span className="theme-changer rounded-xl border p-3">
          light
        </span>
      </div>

      <main className="flex flex-wrap w-full">
        <section className={"flex flex-col w-full md:w-[40%] h-screen bg-["+profileColor+"] p-9 pt-20"}>
          <Profile />
        </section>
        <section className={"w-full md:w-[60%] h-screen bg-["+moreColor+"] p-9 pt-20"}>
          <More />
        </section>
      </main>
    </Fragment>
  );
}
