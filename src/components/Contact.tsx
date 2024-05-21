import { faEnvelope, faFlag, faMobile } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const Contact = () => {
  return (
    <section className='pt-20 pb-28 px-6 lg:px-0' id='contact'>
      <div className='mx-auto max-w-8xl grid grid-cols-1 md:grid-cols-2 gap-9'>
        {/* contact form start */}
        <div className='space-y-4 col-span-1'>
          <h1 className='text-port-black text-3xl font-bold capitalize'>Send me a Message</h1>
          <form action='' className='rounded-lg bg-white p-8 border space-y-5'>
            <div className='space-y-2'>
              <label htmlFor='full-name' className='block text-lg font-semibold text-gray-500'>
                Your Full Name *
              </label>
              <input
                type='text'
                aria-label='full-name'
                className='px-4 py-4 border border-gray-300 w-full block rounded-md focus:ring-1 focus:ring-port-yellow outline-port-yellow outline-1 text-xl font-medium text-gray-700'
              />
            </div>

            <div className='space-y-2'>
              <label htmlFor='email' className='block text-lg font-semibold text-gray-500'>
                Your Email *
              </label>
              <input
                type='email'
                aria-label='email'
                className='px-4 py-4 border border-gray-300 w-full block rounded-md focus:ring-1 focus:ring-port-yellow outline-port-yellow outline-1 text-xl font-medium text-gray-700'
              />
            </div>

            <div className='space-y-2'>
              <label htmlFor='subject' className='block text-lg font-semibold text-gray-500'>
                Subject
              </label>
              <input
                type='text'
                aria-label='subject'
                className='px-4 py-4 border border-gray-300 w-full block rounded-md focus:ring-1 focus:ring-port-yellow outline-port-yellow outline-1 text-xl font-medium text-gray-700'
              />
            </div>

            <div className='space-y-2'>
              <label htmlFor='message' className='block text-lg font-semibold text-gray-500'>
                Your Message
              </label>
              <textarea
                cols={10}
                rows={10}
                aria-label='message'
                className='px-4 py-4 border border-gray-300 w-full block rounded-md focus:ring-1 focus:ring-port-yellow outline-port-yellow outline-1 text-xl font-medium text-gray-700'></textarea>
            </div>

            <button className='text-xl font-semibold text-gray-700 uppercase bg-port-yellow rounded-lg py-3.5 px-6'>
              Send Message
            </button>
          </form>
        </div>
        {/* contact form ends */}

        {/* contact information start */}
        <div className='space-y-4 col-span-1'>
          <h1 className='text-port-black text-3xl font-bold capitalize'>Contact Information</h1>
          <div className='space-y-4'>
            <div className='rounded-lg bg-white p-8 border space-y-8'>
              <div className='flex items-center justify-center h-20 w-20 bg-port-yellow rounded-full mx-auto'>
                <FontAwesomeIcon icon={faFlag} className='text-gray-700 h-10 text-center' />
              </div>
              <div className=''>
                <p className='text-xl text-gray-500 font-semibold flex justify-between items-center'>
                  <span>Country :</span>
                  <span>Nigeria</span>
                </p>
              </div>

              <div className=''>
                <p className='text-xl text-gray-500 font-semibold flex justify-between items-center'>
                  <span>City :</span>
                  <span>Ogbomoso</span>
                </p>
              </div>

              <div className=''>
                <p className='text-xl text-gray-500 font-semibold flex justify-between items-center'>
                  <span>State:</span>
                  <span>Oyo state, Nigeria</span>
                </p>
              </div>
            </div>

            <div className='rounded-lg bg-white p-8 border space-y-8'>
              <div className='flex items-center justify-center h-20 w-20 bg-port-yellow rounded-full mx-auto'>
                <FontAwesomeIcon icon={faEnvelope} className='text-gray-700 h-10 text-center' />
              </div>
              <div className=''>
                <p className='text-xl text-gray-500 font-semibold flex justify-between items-center'>
                  <span>Email :</span>
                  <span>opeyemiakanbi328@gmail.com</span>
                </p>
              </div>

              <div className=''>
                <p className='text-xl text-gray-500 font-semibold flex justify-between items-center'>
                  <span>Github :</span>
                  <a href='https://github.com/springboot20'>https://github.com/springboot20</a>
                </p>
              </div>
            </div>

            <div className='rounded-lg bg-white p-8 border space-y-8'>
              <div className='flex items-center justify-center h-20 w-20 bg-port-yellow rounded-full mx-auto'>
                <FontAwesomeIcon icon={faMobile} className='text-gray-700 h-10 text-center' />
              </div>
              <div className=''>
                <p className='text-xl text-gray-500 font-semibold flex justify-between items-center'>
                  <span>Personal :</span>
                  <span>07086807968</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* contact information start */}
      </div>
    </section>
  );
};
