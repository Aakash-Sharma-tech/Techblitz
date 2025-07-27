import React, { useEffect } from 'react';
// import { motion } from 'framer-motion';
// import { div } from 'three/tsl';


const Speakers: React.FC = () => {
    useEffect(() => {
        const style = document.createElement('style');
        style.innerHTML = `
      @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

      * {
        font-family: 'Poppins', sans-serif;
      }
    `;
        document.head.appendChild(style);

        return () => {
            document.head.removeChild(style);
        };
    }, []);

    return (
        < div>
            <div className="flex items-center gap-6 h-[400px] w-full max-w-3xl mt-10 mx-auto">
                {[
                    {
                        name: 'Dr. Deepak Shrivastava',
                        title: 'Senior Scientist',
                        img: './Deepak.jpg',
                        comp: 'ISRO',
                        position: 'object-center',
                    },
                    {
                        name: 'Pragati Saraf',
                        title: 'Data scientist',
                        img: './Pragati.jpg',
                        comp: 'Google, Ex Microsoft',
                        position: 'object-left',
                    }
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className="relative group flex-grow transition-all w-56 h-[300px] duration-500 hover:w-full"
                    >
                        <img
                            className={`h-full w-full object-cover ${item.position}`}
                            src={item.img}
                            alt={item.title}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h1 className="text-3xl">{item.name}</h1>
                            <h2>{item.title}</h2>
                             <p className="text-sm bg-gray-300 text-black">
                                {item.comp}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="flex items-center gap-6 h-[200px] w-full max-w-3xl mt-10 mx-auto">
                {[
                    {
                        name: 'Sanjeev Kumar',
                        title: 'Android Developer',
                        img: './Sanjeev.jpg',
                        comp: 'Bharti Airtel',
                        position: 'object-center',
                    },
                    {
                        name: 'Pratyush Pare',
                        title: 'ASIC Design Engineer',
                        img: './Pratyush.jpg',
                        comp: 'NVIDIA',
                        position: 'object-top',
                    }
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className="relative group flex-grow transition-all w-56 h-[300px] duration-500 hover:w-full"
                    >
                        <img
                            className={`h-full w-full object-cover ${item.position}`}
                            src={item.img}
                            alt={item.title}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h1 className="text-3xl">{item.name}</h1>
                            <h2>{item.title}</h2>
                             <p className="text-sm bg-gray-300 text-black">
                                {item.comp}
                            </p>
                        </div>
                    </div>
                ))}


            </div>
            <div className="flex items-center gap-6 h-[400px] w-full max-w-3xl mt-10 mx-auto">
                {[
                    {
                        name: 'Ankit Yadav',
                        title: 'Professional Information Security Engineer',
                        img: 'https://media.licdn.com/dms/image/v2/D5603AQFIBykwy9nr_Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1705560045439?e=1756339200&v=beta&t=S79n9XpDEty2N2mjwI6e6-PdJcxre3RjcbGk7cGfljE',
                        comp: 'Fiserv',
                        position: 'object-top',
                    },
                    {
                        name: 'Pavan Sharma',
                        title: 'Research Scholar',
                        img: './Pavan.jpg',
                        comp: 'IIT Roorkee',
                        position: 'object-center',
                    }
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className="relative group flex-grow transition-all w-56 h-[300px] duration-500 hover:w-full"
                    >
                        <img
                            className={`h-full w-full object-cover ${item.position}`}
                            src={item.img}
                            alt={item.title}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h1 className="text-3xl">{item.name}</h1>
                            <h2>{item.title}</h2>
                             <p className="text-sm bg-gray-300 text-black">
                                {item.comp}
                            </p>
                        </div>
                    </div>
                ))}


            </div>
            <div className="flex items-center gap-6 h-[200px] w-full max-w-3xl mt-10 mx-auto">
                {[
                    {
                        name: 'Arideep Dutta',
                        title: 'Software Engineer',
                        img: 'https://media.licdn.com/dms/image/v2/D5603AQEGmkBy6DBr7g/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1728210775899?e=1756339200&v=beta&t=OcUXKXacCCtcB_cOX40UxGAPtxzbnQCatatP2FrSX8U',
                        comp: 'Rippling, Ex Amazon',
                        position: 'object-top',
                    },
                    {
                        name: 'Ratnesh Patel',
                        title: 'IT Analyst',
                        img: './Ratnesh.jpg',
                        comp: 'Tata Consultancy Services',
                        position: 'object-center',
                    }
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className="relative group flex-grow transition-all w-56 h-[300px] duration-500 hover:w-full"
                    >
                        <img
                            className={`h-full w-full object-cover ${item.position}`}
                            src={item.img}
                            alt={item.title}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                            <h1 className="text-3xl">{item.name}</h1>
                            <h2>{item.title}</h2>
                            <p className="text-sm bg-gray-300 text-black">
                                {item.comp}
                            </p>
                        </div>
                    </div>
                ))}


            </div>

            {/* <div className="flex items-center gap-6 h-[400px] w-full max-w-3xl mt-10 mx-auto">
                {[
                    {
                        name: 'Satyam Patidar',
                        title: 'Senior Data Scientist',
                        img: 'https://media.licdn.com/dms/image/v2/D5635AQGoVIiYUZuSlg/profile-framedphoto-shrink_400_400/B56ZgeUQZuH0Ac-/0/1752855283710?e=1753984800&v=beta&t=I86VB0CqDoztfAf6MzUn_Cz58Zb_9lYRD5b_fusEQP8',
                        comp: 'EY, Ex Intel',
                        position: 'object-top',
                    },
                    {
                        name: 'Sanjeev Kumar',
                        title: 'Android Developer',
                        img: './Sanjeev.jpg',
                        comp: 'Bharti Airtel',
                        position: 'object-center',
                    }
                ].map((item, idx) => (
                    <div
                        key={idx}
                        className="relative group flex-grow transition-all w-56 h-[300px] duration-500 hover:w-full"
                    >
                        <img
                            className={`h-full w-full object-cover ${item.position}`}
                            src={item.img}
                            alt={item.title}
                        />
                        <div className="absolute inset-0 flex flex-col justify-end text-white bg-black/50 opacity-0 group-hover:opacity-100 transition-all duration-300">
                           <h1 className="text-3xl">{item.name}</h1>
                            <h2>{item.title}</h2>
                             <p className="text-sm bg-gray-300 text-black">
                                {item.comp}
                            </p>
                        </div>
                    </div>
                ))}
            </div> */}
        </div>
    );
};

export default Speakers;
