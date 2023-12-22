import './App.css';
import { motion } from 'framer-motion'
import logo from './images/logo.png'
import { CiMenuFries } from "react-icons/ci";
import p1 from './images/p1.png'
import p2 from './images/p2.png'
import p3 from './images/p3.png'
import { FaArrowRight } from "react-icons/fa";
import header from './images/header.png'
import meter1 from './images/meter1.svg'
import meter2 from './images/meter2.svg'
import meter3 from './images/meter3.svg'
import pro1 from './images/pro1.png'
import pro2 from './images/pro2.png'
import pro3 from './images/pro3.png'
import contact from './images/contact.svg'
import { useState } from 'react';
import { TypeAnimation } from 'react-type-animation';


function App() {
  const [id, setId] = useState('Tab 1')
  const arr = [
    {
      id: 'Tab 1'
    },
    {
      id: 'Tab 2'
    },
    {
      id: 'Tab 3'
    }
  ]
  const [project, setProject] = useState(true)
  const [text, setText] = useState(false)
  const projecton = () => {
    setProject(true)
    setText(false)
  }
  const texton = () => {
    setProject(false)
    setText(true)
  }
  const handleid = (id) => {
    setId(id)
    if (id === 'Tab 1') {
      projecton()
    }
    else {
      texton()
    }
  }
  return (
    <>
      <div className="nav sticky z-20 top-0   flex justify-between items-center  py-4 px-4 lg:px-14">
        <div className="img ">
          <img src={logo} alt="" className=' w-20' />
        </div>
        <div className="hamburger flex lg:hidden justify-center items-center border-white border-[2px] border-solid w-8 h-8">
          <CiMenuFries className=' font-bold text-xl text-white' />
        </div>
        <div className="navforlargerscreen hidden  lg:flex items-center">
          <ul className='flex  mr-7'>
            <a href="#home"><li className=' mr-7 text-lg text-gray-300 hover:text-white' >Home</li></a>
            <a href="#skill"><li className=' mr-7  text-lg text-gray-300  hover:text-white'>Skills</li></a>
            <a href="#project"><li className='    text-lg text-gray-300 hover:text-white'>Projects</li></a>
          </ul>
          <ul className='flex mr-5'>
            <li className=' mr-3 w-8 h-8 rounded-full border-gray-300 border-[2px] border-solid  flex justify-center items-center px-2 py-2'><img src={p1} alt="" /></li>
            <li className=' mr-3 w-8 h-8 rounded-full border-gray-300 border-[2px] border-solid  flex justify-center items-center px-2 py-2'><img src={p2} alt="" /></li>
            <li className=' w-8 h-8 rounded-full border-gray-300 border-[2px] border-solid  flex justify-center items-center px-2 py-2'><img src={p3} alt="" /></li>
          </ul>
          <button className='relative connect border-gray-300 text-gray-300 font-medium border-[2px] border-solid px-4 py-3 ' >
            <p className='relative z-10'>Let's Connect</p>
            <div className='whiteback absolute top-0 left-0 h-full w-0 bg-white'>

            </div>
          </button>
        </div>
      </div>
      <div className="firstsection w-full  text-white" id="home">
        <div className="herosection  px-4 lg:px-14 py-7 sm:flex  sm:items-center sm:justify-between">
          <div className='content sm:w-[50rem] lg:w-[41rem]'>
            <motion.button
              animate={{
                x: 0,
                opacity: 1
              }}
              initial={{
                x: "-100vw",
                opacity: 0
              }}
              transition={{
                type: "spring",
                duration: 2
              }}
              className="welcome tracking-wide font-semibold px-2 py-2 border-gray-300 border-solid border-[2px] lg:text-xl">
              Welcome to my Portfolio
            </motion.button>
            <motion.h1
              animate={{
                x: 0,
                opacity: 1
              }}
              initial={{
                x: "-100vw",
                opacity: 0
              }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 0.5
              }}
              className=' font-semibold text-3xl my-3 tracking-wide'>Hii I'm Mike
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  ' UI/UX designer',
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  ' FullStack Developer',
                  1000
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              /></motion.h1>
            <motion.p
              animate={{
                x: 0,
                opacity: 1
              }}
              initial={{
                x: "-100vw",
                opacity: 0
              }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 1
              }}
              className=' text-gray-300 xl:text-2xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas iusto necessitatibus excepturi harum magnam, dolor quos, accusamus perferendis expedita ipsum praesentium, autem deleniti aut quam ab quis.</motion.p>
            <motion.button
              animate={{
                x: 0,
                opacity: 1
              }}
              initial={{
                x: "-100vw",
                opacity: 0
              }}
              transition={{
                type: "spring",
                duration: 2,
                delay: 1.5
              }}
              className=' mt-3 sm:mt-12 flex items-center lg:text-3xl'>
              <p>Let's Connect</p>
              <div className=' border-solid ml-2 border-white rounded-full border-[2px] px-1 py-1'>
                <FaArrowRight className=' text-white' />
              </div>
            </motion.button>
          </div>
          <motion.div
            animate={{
              scale: 1,
              opacity: 1
            }}
            initial={{
              scale: 0,
              opacity: 0
            }}
            transition={{
              type: "spring",
              duration: 2,
              delay: 1

            }}
            className="heroimg mt-6 sm:mt-0 lg:w-[33rem]  ">
            <img src={header} alt="" className='headerimg' />
          </motion.div>
        </div>
      </div>
      <div className='secondsection px-4 xl:flex xl:justify-center'>
        <motion.div
          whileInView={{
            x: 0,
            opacity: 1
          }}
          initial={{
            x: "-60vw",
            opacity: 0
          }}
          transition={{
            type: "spring",
            duration: 3
          }}
          id='skill'
          className='bg-[#151414] xl:w-[75rem] relative bottom-7 px-4 lg:px-0 text-white rounded-3xl flex flex-col items-center py-6'>
          <h1 className='  text-2xl lg:text-3xl font-semibold tracking-wider'>Skills</h1>
          <p className=' py-2 text-center lg:px-16'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Molestias accusantium id, ullam quidem consectetur harum pariatur et blanditiis doloribus repellat, porro nisi neque voluptatum quae, officia similique. Tenetur, exercitationem magn
          </p>
          <ul className=' grid grid-cols-1 gap-y-4 sm:grid-cols-3 sm:gap-y-0 sm:gap-x-7 mt-3 sm:mt-0 sm:py-10 lg:gap-x-11'>
            <li className='flex flex-col items-center '><img src={meter1} alt="" />
              <p className=' mt-3 font-medium text-lg'>Web Development</p></li>
            <li className='flex flex-col items-center '><img src={meter2} alt="" />
              <p className=' mt-3 font-medium text-lg'>Brand Identitiy</p></li>
            <li className='flex flex-col items-center '><img src={meter3} alt="" />
              <p className=' mt-3 font-medium text-lg'>Logo Design</p></li>
          </ul>
        </motion.div>
      </div>
      <div className="thirdsection bg-black text-white px-4 py-7" id='project'>
        <div className="project flex flex-col items-center ">
          <h1 className='text-2xl lg:text-3xl font-semibold tracking-wider'>Projects</h1>
          <p className=' text-center py-5 md:px-20 lg:px-48 text-gray-300 lg:text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum dicta perspiciatis quae itaque natus veniam reprehenderit porro qui modi iusto facilis, tempora facere ut nulla doloribus. Recusandae omnis modi laborum quas. Minus doloribus fugit optio laborum distinctio ad accusantium necessitatibus nulla voluptatum. Aliquam, repellendus deserunt!</p>
          <ul className='flex w-full sm:w-96 lg:w-[41rem] text-gray-300  border-gray-300 border-[1px] border-solid '>

            {
              arr.map((i) => <li className='relative border-gray-300 border-solid border-[0.4px] cursor-pointer  font-medium tab w-full flex justify-center py-4 ' onClick={() => handleid(i.id)} style={i.id === id ? { background: 'linear-gradient(to left , purple , blue)' } : { backgroundColor: "transparent" }}>
                <p className=' z-10'>{i.id}</p>
                <div className='listanimate  w-0 h-full  absolute top-0 left-0 '>
                </div>
              </li>)
            }


          </ul>
          {project && <motion.div
            animate={{
              scale: 1,
              opacity: 1
            }}
            initial={{
              scale: 0,
              opacity: 0
            }}
            transition={{
              type: "spring",
              duration: 1.5
            }}
            className='grid grid-cols-1 lg:px-9 gap-y-4 mt-7 md:mt-6 md:grid-cols-2 md:gap-x-4 lg:grid-cols-3'>
            <div className='box relative'>
              <img src={pro1} alt="" />
              <div className='animate w-full h-0  absolute top-0 rounded-3xl flex  justify-center items-center '>
                <div className='hide flex scale-0 flex-col justify-center items-center absolute '>
                  <h1 className=' text-xl'>Business Startup</h1>
                  <p>Design & Development</p>
                </div>
              </div>
            </div>
            <div className='box relative'>
              <img src={pro2} alt="" />
              <div className='animate w-full h-0  absolute top-0 rounded-3xl flex  justify-center items-center '>
                <div className='hide flex scale-0 flex-col justify-center items-center absolute '>
                  <h1 className=' text-xl'>Business Startup</h1>
                  <p>Design & Development</p>
                </div>
              </div>
            </div>
            <div className='box relative'>
              <img src={pro3} alt="" />
              <div className='animate w-full h-0  absolute top-0 rounded-3xl flex  justify-center items-center '>
                <div className='hide flex scale-0 flex-col justify-center items-center absolute '>
                  <h1 className=' text-xl'>Business Startup</h1>
                  <p>Design & Development</p>
                </div>
              </div>
            </div>
            <div className='box relative'>
              <img src={pro1} alt="" />
              <div className='animate w-full h-0  absolute top-0 rounded-3xl flex  justify-center items-center '>
                <div className='hide flex scale-0 flex-col justify-center items-center absolute '>
                  <h1 className=' text-xl'>Business Startup</h1>
                  <p>Design & Development</p>
                </div>
              </div>
            </div>
            <div className='box relative'>
              <img src={pro2} alt="" />
              <div className='animate w-full h-0  absolute top-0 rounded-3xl flex  justify-center items-center '>
                <div className='hide flex scale-0 flex-col justify-center items-center absolute '>
                  <h1 className=' text-xl'>Business Startup</h1>
                  <p>Design & Development</p>
                </div>
              </div>
            </div>
            <div className='box relative'>
              <img src={pro3} alt="" />
              <div className='animate w-full h-0  absolute top-0 rounded-3xl flex  justify-center items-center '>
                <div className='hide flex scale-0 flex-col justify-center items-center absolute '>
                  <h1 className=' text-xl'>Business Startup</h1>
                  <p>Design & Development</p>
                </div>
              </div>
            </div>
          </motion.div>}
          {text && <motion.div
            animate={{
              scale: 1,
              opacity: 1
            }}
            initial={{
              scale: 0,
              opacity: 0
            }}
            transition={{
              type: "spring",
              duration: 1.5
            }}
            className=' mt-7  text-center md:px-20 lg:px-48 text-gray-300 lg:text-xl'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ea, dolorum blanditiis. Quidem maxime laboriosam quasi repellat, vero cum nam quia nemo accusantium iusto facilis accusamus. Id dolores ad quia, magni eaque quidem repudiandae at sapiente dolore molestias omnis corporis. Iste error molestiae itaque voluptates ea odit ratione saepe vel expedita et, officia optio deserunt fugiat nesciunt.
          </motion.div>}
        </div>
      </div>
      <div className="fourtsection px-4 py-7 xl:py-12 text-white">
        <div className=' sm:flex  sm:justify-evenly sm:items-center '>
          <motion.div
            whileInView={{
              x: 0,
              opacity: 1
            }}
            initial={{
              x: "60vw",
              opacity: 0
            }}
            transition={{
              type: "spring",
              duration: 2
            }}
            className=' hidden sm:block sm:w-[25rem] xl:w-[30rem] '>
            <img src={contact} alt="" />
          </motion.div>
          <motion.form
            whileInView={{
              x: 0,
              opacity: 1
            }}
            initial={{
              x: "-60vw",
              opacity: 0
            }}
            transition={{
              type: "spring",
              duration: 2
            }}
            className='mt-4   xl:w-[31rem] '>
            <h1 className=' font-semibold text-2xl mb-4 lg:text-5xl'>Get In Touch</h1>
            <div className="firstlastname grid grid-cols-2 gap-x-2 gap-y-4">
              <input type="text" placeholder='First name' className='lg:py-3  outline-none py-2 pl-2 bg-[#add8e63b] border-gray-300 border-[1px] border-solid rounded' />
              <input type="text" placeholder='Last name' className=' lg:py-3 outline-none py-2 pl-2 bg-[#add8e63b] border-gray-300 border-[1px] border-solid rounded' />
              <input type="email" placeholder='Email Address' className='lg:py-3  outline-none py-2 pl-2 bg-[#add8e63b] border-gray-300 border-[1px] border-solid rounded' />
              <input type="text" placeholder='Phone No.' className='lg:py-3  outline-none py-2 pl-2 bg-[#add8e63b] border-gray-300 border-[1px] border-solid rounded' />
            </div>
            <textarea name="" id="" cols="30" rows="8" placeholder='Message' className=' lg:py-3 w-full py-2 pl-2 bg-[#add8e63b] outline-none border-gray-300 mt-4 border-[1px] border-solid rounded'></textarea>
            <button className='flex justify-center w-28 rounded py-2 bg-white text-black font-medium mt-4'>Send</button>
          </motion.form>
        </div>

      </div>
      <div className="sixthsection px-4 lg:px-10">
        <div className="subscribe relative bottom-4 px-3 lg:px-16 xl:px-32 text-lg w-full bg-white rounded-3xl py-6 lg:py-12 flex flex-col sm:flex-row sm:items-center sm:justify-center ">
          <h1 className='  font-semibold text-2xl xl:w-[45rem] md:pr-2 md:text-4xl lg:text-5xl'>Subscribe to our Newsletter  & Never miss latest updates</h1>
          <form action="" className='flex flex-col sm:flex-row '>
            <input type="email" placeholder='Email Address' className='mt-3 border-gray-500 border-[1px] border-solid rounded py-2 pl-3 lg:w-64' />
            <button className='sm:ml-2 px-2 py-2 bg-red-200 mt-3 submitbtn rounded font-medium text-white lg:w-52'>Submit</button>
          </form>
        </div>
        <div className="footer  text-white py-6 sm:py-10 lg:py-20 sm:flex sm:flex-row sm:justify-between">
          <div className="footerlogo w-28 sm:w-32 lg:w-36">
            <img src={logo} alt="" />
          </div>
          <div className="rightsection mt-10 sm:mt-0 ">
            <ul className='flex  '>
              <li className=' mr-3   rounded-full border-gray-300 border-[2px] border-solid  flex justify-center items-center px-2 py-1 w-9 h-9 lg:w-12 lg:h-12'><img src={p1} alt="" className='z-10' />
              </li>
              <li className=' mr-3  rounded-full border-gray-300 border-[2px] border-solid  flex justify-center items-center px-2 py-1 w-9 h-9 lg:w-12 lg:h-12'><img src={p2} alt="" /></li>
              <li className='  rounded-full border-gray-300 border-[2px] border-solid  flex justify-center items-center px-2 py-2 w-9 h-9 lg:w-12 lg:h-12'><img src={p3} alt="" /></li>
            </ul>
            <p className=' mt-4 lg:text-xl'>Copyright 2023 . All rights reserved</p>
          </div>
        </div>
      </div>
    </>
  
}

export default App;
