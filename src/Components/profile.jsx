import me from '../assets/images/me.jpeg'

// const personalInfo = {
//   fname: {
//     english: "moein",
//     farsi: "معین",
//   },
//   lname: {
//     english: "parvizi",
//     farsi: "پرویزی",
//   },
//   phone: "+989037215381",
//   email: "giventulip@gmail.com",
//   website: "https://moeinparvizi.github.io/personal-website",
//   home: {
//     english: "Tehran, IR",
//     farsi: "تهران",
//   },
//   linkedin: "filan.linkedin",
//   instagram: "filan.insta",
//   github: "github",
//   stackoverflow: "stack",
//   codepen: "codepen",
//   about: {
//     english: "lorem ipsum",
//     farsi: "لورم اپسام",
//   },
// };

export default function Profile() {
  return (
    <div className='flex flex-col'>

      <figure className='flex flex-wrap justify-center items-center'>
        <img className='m-2 rounded-full' src={me} alt="my picture" />
        <figcaption className='m-2'>
          <h1 className="moeinparvizi">moein parvizi</h1>
        </figcaption>
      </figure>

      <div className='flex flex-col mt-20 w-full [&>div]:border-b rounded-lg glass p-2'>
        <div className='flex items-center justify-between p-2 text-[16px] md:text-[18px]'>
          <div className='capitalize font-bold'>call</div>
          <div>
            <a className='' href="tel:+989226756339">+989226756339</a>
          </div>
        </div>
        <div className='flex items-center justify-between p-2 text-[16px] md:text-[18px]'>
          <div className='capitalize font-bold'>call</div>
          <div>
            <a className='' href="mail:giventulip@gmail.com">giventulip@gmail.com</a>
          </div>
        </div>
        <div className='flex items-center justify-between p-2 text-[16px] md:text-[18px]'>
          <div className='capitalize font-bold'>web</div>
          <div>
            <a rel='noreferrer' target='_blank' href="https://moeinparvizi.github.io/personal-website">https://moeinparvizi.github.io/personal-website</a>
          </div>
        </div>
        <div className='flex items-center justify-between p-2 text-[16px] md:text-[18px] !mb-0 !border-none'>
          <div className='capitalize font-bold'>home</div>
          <div>
            Tehran, IR
          </div>
        </div>
      </div>

    </div>
  )
}
