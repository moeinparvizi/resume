import React from "react";

function Theme({ mainText, mainColor , darkMode }) {
  return (
    <div className="setting cursor-pointer absolute w-screen flex justify-between items-center p-3">
      <span  onClick={darkMode}
        className={
          "theme-changer flex justify-center items-center text-[" +
          mainColor +
          "] rounded-xl border p-3"
        }
      >
        {mainText}
      </span>
    </div>
  );
}

export default Theme;
