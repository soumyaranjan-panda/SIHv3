import React from "react";
//import toast, { Toaster } from "react-hot-toast";



const Home = () => {
  
  return (
<div>
  <div id="home" className="h-[100vh] relative">
    {/* Add a block of text */}
    <div className="fixed z-10 w-4/12 mt-52 ml-32">
      <h1 className="text-5xl font-bold text-gray-800">RAKHSAK</h1>
      <h2 className=" text-[1rem]">Smart SOS System</h2>
      <p className="mt-4 text-lg text-gray-700">Our cutting-edge solution enhances two-wheeler safety in India, detecting accidents in real-time, issuing alerts, reducing response times, and offering anti-theft features, GPS tracking, and market potential.</p>
      <a href="#">
        <p className=" mt-4 text-blue-600">learn more...</p>
      </a>
    </div>
    
    <div className="bg-p6 fixed z-0" id="dd">
      <img src="./sdf.jpg" className="h-[100vh] w-[100vw] object-contain" alt="" />
    </div>
  </div>
</div>

  );
};

export default Home;


// <button className="text-black" onClick={notify}>
//           Make me a toast
//         </button>
//         const notify = () =>
//         toast.success("Look at my styles.", {
//           style: {
//             border: "1px solid #713200",
//             borderRadius: "12px",
//             padding: "16px",
//             color: "#713200",
//           },
//           iconTheme: {
//             primary: "#713200",
//             secondary: "#FFFAEE",
//           },
//         });



/* <div className="ml-[20vw]">
        <Earth/>
      </div> */