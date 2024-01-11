import {motion} from 'framer-motion';
import {styles} from '../styles';
import { ComputersCanvas } from './canvas';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="relative w-full h-screen 
    mx-auto">
      <div className={`${styles.paddingX} 
      absolute inset-0 top-[120px] max-w-7xl 
      mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#ffffff]' />
          <div className='w-1 sm:h-80 h-40 white-gradient ' />
        </div>

        <div>
        <h1 className={`${styles.heroHeadText} text-[#a8a8a8]`}>
            Hi, I'm <span className='text-[#ffffff]'>
                <TypeAnimation
                sequence={[
                  "Vis Budati.",
                  1500,
                  "a Data Specialist.",
                  1300,
                  "a Software Engineer.",
                  1300,
                  "a Data Scientist.",
                  1500,
                ]}
                wrapper="span"
                speed={22}
                repeat={Infinity}
                />
              </span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-[#a8a8a8]-100`}>
            I am a Data Scientist with a MS in Data Science <br className='sm:block hidden'/> from Stevens 
            Institute of Technology and <br className='sm:block hidden'/>  BS in Physics and Applied Mathematics from Seton Hall University. 
            </p>
        </div>
      </div>
      <ComputersCanvas />
      <div style={{ bottom: '20px' }} className='absolute xs:bottom-10 bottom-30 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  )
}

export default Hero