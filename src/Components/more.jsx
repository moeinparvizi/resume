import { Fragment } from "react";

export default function More({ glassColor }) {
  return (
    <Fragment>
      <div
        className="glass p-5"
        style={{ backgroundColor: glassColor, transition: "2s" }}
      >
        <h1 className="capitalize text-center font-bold moeinparvizi !text-[20px] md:!text-[35px]">
          skills
        </h1>
        <ul className="[&>li]:mb-5 [&>li>h4]:border-b [&>li>h4]:font-bold [&>li>h4]:text-[18px]">
          <li>
            <h4>languages</h4>
            <ul className="flex [&>li]:p-5 flex-wrap">
              <li className="list-none">html</li>
              <li className="list-none">css</li>
              <li className="list-none">sass</li>
              <li className="list-none">python</li>
              <li className="list-none">javascript</li>
            </ul>
          </li>
          <li>
            <h4>libraryes</h4>
            <ul className="flex [&>li]:p-5 flex-wrap">
              <li className="list-none">react</li>
              <li className="list-none">swipper</li>
              <li className="list-none">animejs</li>
              <li className="list-none">jquery</li>
              <li className="list-none">chartjs</li>
              <li className="list-none">aosjs</li>
              <li className="list-none">wowjs</li>
              <li className="list-none">sweetalert2</li>
              <li className="list-none">animatecss</li>
              <li className="list-none">tailwindcss</li>
              <li className="list-none">bootstrap</li>
              <li className="list-none">nextjs</li>
            </ul>
          </li>
          <li>
            <h4>applications</h4>
            <ul className="flex [&>li]:p-5 flex-wrap">
              <li className="list-none">photoshop</li>
              <li className="list-none">figma</li>
            </ul>
          </li>
        </ul>
      </div>

      <div
        className="glass p-5 mt-10"
        style={{ backgroundColor: glassColor, transition: "2s" }}
      >
        <h1 className="capitalize text-center font-bold moeinparvizi !text-[20px] md:!text-[35px]">
          experience
        </h1>
      </div>
    </Fragment>
  );
}
