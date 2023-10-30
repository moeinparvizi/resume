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

      <div className='flex flex-col mt-20'>
        <div className='flex items-center justify-center text-[16px] md:text-[18px]'>
          <div className='me-40 lg:me-52 xl:me-80 capitalize font-bold'>call</div>
          <div>
            <a className='no-underline' href="tel:+989226756339">+989226756339</a>
          </div>
        </div>
      </div>

    </div>
  )
}
