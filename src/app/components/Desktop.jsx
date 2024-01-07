import Image from 'next/image'
import React from 'react'

const Desktop = () => {
  return (
    <div>
    <hr className='mb-3'/>
    <div className=' flex flex-col md:flex-row mb-6 md:mb-2 items-center gap-24 justify-center'>
    <div className=' w-full md:w-1/2 '>
            <span className='text-base opacity-60'>Project 1</span>
            <h1 className='text-3xl text-red-400 font-bold'>Food Delivery App</h1>
            <span className=' text-base opacity-70 text-justify'><span className=' font-bold'>Domain:</span> Mobile Application</span>
            <br />
            <span className=' text-base opacity-70 text-justify'><span className=' font-bold'>Programming Language:</span> React Native, JavaScript, MongoDB, Node.js, Express.
            </span>
            <br />
            <br />
            <span className=' text-base opacity-70 text-justify'>
            <li>Developed a feature-rich Eat App UI from the ground up, utilizing cutting-edge technologies such as React Native, MongoDB, Node.js, Express, JSON Web Token(JWT), and Bcrypt.js.</li> <br />
            <li>Designed and implemented a responsive and highly interactive front-end using React
            Native, ensuring seamless user experiences across various devices and screen sizes.
            Built a scalable and robust back-end using Node.js and Express, enabling efficient
            handling of user requests, data management, and API integrations with third-party
            services.</li>  <br />
            <li>Implemented secure user authentication and authorization mechanisms using JSON
            Web Tokens (JWT) and Bcrypt.js, safeguarding user data and enhancing overall
            platform security.</li> <br />
            <li>Utilized MongoDB as the database solution, designing an efficient schema for storing
            product listings, user profiles, order histories, and customer reviews, resulting in
            optimized data retrieval.</li>
            </span>
        </div>
        <div>
            <Image src="https://i.imgur.com/gkbn2jS.jpg" alt='datingapp' height={300} width={300} className='w-[300px] cursor-pointer h-[500px] md:w-[300px] md:h-[500px] object-fill'/>
        </div>
    </div>
    <hr className='mb-3'/>

    <div className=' flex flex-col md:flex-row mb-6 md:mb-2 items-center gap-24 justify-center'>
        <div>
            <Image src="https://i.imgur.com/gkbn2jS.jpg" alt='datingapp' height={300} width={300} className='w-[300px] cursor-pointer h-[500px] md:w-[300px] md:h-[500px] object-fill'/>
        </div>
        <div className=' w-full md:w-1/2 '>
            <span className='text-base opacity-60'>Project 2</span>
            <h1 className='text-3xl text-red-400 font-bold'>Income Expense Management</h1>
            <span className=' text-base opacity-70 text-justify'><span className=' font-bold'>Domain:</span> Mobile Application, Website, Desktop</span>
            <br />
            <span className=' text-base opacity-70 text-justify'><span className=' font-bold'>Programming Language:</span> React Native, Next.js, Tauri, JavaScript, MongoDB, Node.js, Express.
            </span>
            <br />
            <br />
            <span className=' text-base opacity-70 text-justify'>
            <li>Designed and developed a comprehensive income and expense tracker mobile
                application using React Native, MongoDB, Node.js, Express, JSON Web Token (JWT), and Bcrypt.js.
            </li> <br />

            <li>Created an intuitive and user-friendly mobile interface that allows users to efficiently manage their finances, monitor income, and track expenses with ease.</li>  <br />

            <li>Implemented robust user authentication and authorization features using JSON Web Token (JWT) and Bcrypt.js, ensuring the security and privacy of user data.</li> <br />

            <li>Leveraged MongoDB to establish a highly efficient database system capable  of handling income, expense records, and user profiles while optimizing data retrieval.
            </li> <br />

            <li>Integrated secure encryption techniques and best practices to safeguard sensitive financial information, prioritizing the confidentiality and integrity of user data.
            </li> <br />

            <li>Collaborated with a multidisciplinary team to ensure seamless integration between front-end and back-end components, ensuring a cohesive and responsive user experience.
            </li> <br />

            <li>Conducted extensive testing and debugging to identify and rectify any issues, guaranteeing the reliability and stability of the mobile application.
            </li> <br />


            </span>
        </div>
        
    </div>

    <hr className='mb-3'/>

    <div className=' flex flex-col md:flex-row mb-6 md:mb-2 items-center gap-24 justify-center'>
    <div className=' w-full md:w-1/2 '>
            <span className='text-base opacity-60'>Project 3</span>
            <h1 className='text-3xl text-red-400 font-bold'>Dating App</h1>
            <span className=' text-base opacity-70 text-justify'><span className=' font-bold'>Domain:</span> Mobile Application</span>
            <br />
            <span className=' text-base opacity-70 text-justify'><span className=' font-bold'>Programming Language:</span> React Native, JavaScript, MongoDB, Node.js, Express.
            </span>
            <br />
            <br />
            <span className=' text-base opacity-70 text-justify'>
            <li>Developed a feature-rich Eat App UI from the ground up, utilizing cutting-edge technologies such as React Native, MongoDB, Node.js, Express, JSON Web Token(JWT), and Bcrypt.js.</li> <br />
            <li>Designed and implemented a responsive and highly interactive front-end using React
            Native, ensuring seamless user experiences across various devices and screen sizes.
            Built a scalable and robust back-end using Node.js and Express, enabling efficient
            handling of user requests, data management, and API integrations with third-party
            services.</li>  <br />
            <li>Implemented secure user authentication and authorization mechanisms using JSON
            Web Tokens (JWT) and Bcrypt.js, safeguarding user data and enhancing overall
            platform security.</li> <br />
            <li>Utilized MongoDB as the database solution, designing an efficient schema for storing product listings, user profiles, order histories, and customer reviews, resulting in
            optimized data retrieval.</li>
            </span>
        </div>
        <div>
            <Image src="https://i.imgur.com/gkbn2jS.jpg" alt='datingapp' height={300} width={300} className='w-[300px] cursor-pointer h-[500px] md:w-[300px] md:h-[500px] object-fill'/>
        </div>
    </div>
    <hr className='mb-3'/>

</div>
  )
}

export default Desktop