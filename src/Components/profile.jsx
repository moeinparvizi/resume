import me from "../assets/images/me.jpeg";

function Me({ glassColor }) {
  return (
    <figure
      className="flex flex-wrap justify-center items-center p-3 mb-5 rounded-2xl glass shadow-2xl"
      style={{ backgroundColor: glassColor, transition: "2s" }}
    >
      <img
        className="shadow-2x m-2 rounded-full w-20 h-20 md:w-52 md:h-52"
        src={me}
        alt="my picture"
      />
      <figcaption className="m-2">
        <h1 className="moeinparvizi !text-[25px] md:!text-[60px]">
          moein parvizi
        </h1>
      </figcaption>
    </figure>
  );
}

function Info({ glassColor }) {
  return (
    <div
      style={{
        backgroundColor: glassColor,
        transition: "2s",
      }}
      className="flex flex-col mt-15 w-full [&>div]:border-b rounded-lg glass p-2"
    >
      <div className="flex items-center justify-between p-2 text-[16px] md:text-[18px]">
        <div className="capitalize font-bold">call</div>
        <div>
          <a className="" href="tel:+989226756339">
            +989226756339
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 text-[16px] md:text-[18px]">
        <div className="capitalize font-bold">call</div>
        <div>
          <a className="" href="mail:giventulip@gmail.com">
            giventulip@gmail.com
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 text-[16px] md:text-[18px]">
        <div className="capitalize font-bold">web</div>
        <div>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://moeinparvizi.github.io/personal-website"
          >
            personal website
          </a>
        </div>
      </div>
      <div className="flex items-center justify-between p-2 text-[16px] md:text-[18px] !mb-0 !border-none">
        <div className="capitalize font-bold">home</div>
        <div>Tehran, IR</div>
      </div>
    </div>
  );
}

function About({ glassColor }) {
  return (
    <div
      style={{
        backgroundColor: glassColor,
        transition: "2s",
      }}
      className="glass mt-10 md:mt-20 p-5"
    >
      <h4 className="capitalize font-bold moeinparvizi !text-[20px] md:!text-[35px]">
        about me
      </h4>
      <p className="text-[15px] md:text-[18px]">
        Since 2017, I started learning programming, but with textbooks at
        school. In 2021, I wrote my first project (not to mention, I was not
        interested), I became interested over time, and in 2023, I continued my
        activity seriously.
      </p>
    </div>
  );
}

function Social({ glassColor }) {
  return (
    <div
      style={{
        backgroundColor: glassColor,
        transition: "2s",
      }}
      className="glass mt-10 md:mt-20 p-5 flex justify-evenly items-center text-[30px]"
    >
      <i className="bi bi-github"></i>
      <i className="bi bi-instagram"></i>
      <i className="bi bi-linkedin"></i>
    </div>
  );
}

export default function Profile({ glassColor }) {
  return (
    <div className="flex flex-col">
      <Me glassColor={glassColor} />

      <Info glassColor={glassColor}></Info>

      <About glassColor={glassColor}></About>

      <Social glassColor={glassColor} />
    </div>
  );
}
