import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Disclosure } from '@headlessui/react'
import { Link } from 'react-router-dom'
import ProfileImage from '../assets/img-03.png'
import { scrollReveal } from '../utils/scrollreveal.config'
import { useEffect } from 'react'
import { useTypeWriter } from '../hooks/useTypeWriter'

export const HeroSection = () => {
  useEffect(() => {
    scrollReveal.reveal('#developer-name', { delay: 250 })
    scrollReveal.reveal('#developer-description', { delay: 300 })
    scrollReveal.reveal('#developer-img', { delay: 400 })
    scrollReveal.reveal('#hire-button', { delay: 400 })
  }, [])

  const { textToDisplay } = useTypeWriter()

  return (
    <Disclosure
      as="section"
      id="home"
      className="flex justify-center items-center mt-12 px-8 lg:px-0"
    >
      <div className="relative mt-24">
        <div className="absolute bg-gradient-to-r inset-5 z-0 from-port-yellow to-port-yellow/20 transform -skew-y-6 md:skew-y-0 md:-rotate-6 rounded-lg"></div>
        <div className="relative z-10 max-w-9xl flex items-center justify-center flex-col md:flex-row bg-white p-12 rounded-lg">
          <div className="space-y-10">
            <h1
              className="text-5xl font-bold text-port-black capitalize leading-snug"
              id="developer-name"
            >
              i'm yunus abbas opeyemi <br />{' '}
              <small className="text-port-yellow inline-block text-5xl">
                front-end
              </small>{' '}
              <span className='border-r-4 border-port-black '>{textToDisplay}</span>
            </h1>

            <p
              className="text-2xl font-medium text-port-gray"
              id="developer-description"
            >
              A passionate Front-end developer with a zeal for crafting
              intuitive and responsive digital experience. With a strong
              foundation in HTML, CSS, Javascript, React/Typescript , Tailwind
              and others...
            </p>

            <Link to="#" className="block" id="hire-button">
              <button className="text-xl font-semibold py-3.5 px-8 space-x-5 rounded-md bg-port-yellow flex items-center justify-center uppercase">
                <span>hire me</span>
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="h-6 text-port-black"
                />
              </button>
            </Link>
          </div>
          <div className="">
            <img
              src={ProfileImage}
              alt="profile avatar"
              className="block h-full"
              id="developer-img"
            />
          </div>
        </div>
      </div>
    </Disclosure>
  )
}
