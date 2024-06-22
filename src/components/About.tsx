import ProfileImage from '../assets/my-pics.jpg'
import { scrollReveal } from '../utils/scrollreveal.config'
import { useEffect } from 'react'

export const About = () => {
  useEffect(() => {
    scrollReveal.reveal('#profile-image', { delay: 250 })
    scrollReveal.reveal('#about-title', { delay: 300 })
    scrollReveal.reveal('#about-description', { delay: 350 })
  })

  return (
    <section className="pt-20 pb-28 px-6 lg:px-0">
      <div className="mx-auto max-w-8xl">
        <h1 className="text-port-black text-3xl font-bold capitalize text-center mb-10">
          about me
        </h1>

        <div className="bg-white rounded-lg border grid sm:grid-cols-1 md:grid-cols-2 p-9 gap-8">
          <div className="space-y-4 h-full flex flex-col justify-center">
            <h3
              className="text-2xl font-semibold text-gray-700 uppercase text-center"
              id="about-title"
            >
              about me
            </h3>
            <p
              className="text-gray-500 text-xl font-semibold text-justify"
              id="about-description"
            >
              A passionate Front-end developer with a zeal for crafting
              intuitive and responsive digital experience. With a strong
              foundation in HTML, CSS, Javascript, React/Typescript , Tailwind
              and others... I bring ideas to life through clean code , modern
              design principles, and a user-centers approach. I'm dedicated to
              continuously learning and pushing the boundaries of what's
              possible in the web development world.Explore my portfolio to see
              my project so far!.
            </p>
          </div>
          <div className="rounded-xl relative  w-full overflow-hidden h-[44rem]">
            <img
              src={ProfileImage}
              alt=""
              id="profile-image"
              className="absolute"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
