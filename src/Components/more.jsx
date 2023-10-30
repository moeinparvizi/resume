export default function More({ glassColor }) {
  return (
    <div
      className="glass p-5"
      style={{ backgroundColor: glassColor, transition: "2s" }}
    >
      <h1 className="capitalize text-center font-bold moeinparvizi !text-[20px] md:!text-[35px]">
        skills
      </h1>
      <ul>
        <li>
          <h4>languages</h4>
          <ul className="flex [&>li]:p-5">
            <li className="list-none">html</li>
            <li className="list-none">css</li>
            <li className="list-none">sass</li>
            <li className="list-none">python</li>
            <li className="list-none">javascript</li>
          </ul>
        </li>
        <li>
          <h4>libraryes</h4>
          <ul className="flex [&>li]:p-5">
            <li className="list-none">react</li>
            <li className="list-none">swipper</li>
            <li className="list-none">animejs</li>
            <li className="list-none">jquery</li>
            <li className="list-none">chartjs</li>
          </ul>
        </li>
        <li>
            <h4>applications</h4>
            <ul className="flex [&>li]:p-5">
                <li className="list-none">photoshop</li>
            </ul>
        </li>
      </ul>
    </div>
  );
}
