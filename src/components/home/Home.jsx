import React from "react";
//import toast, { Toaster } from "react-hot-toast";



const Home = () => {
  
  return (
<div>
  <div className="h-[100vh] relative">
    {/* Add a block of text */}
    <div className="fixed z-10 w-4/12  mt-52 ml-32">
      <h1 className="text-5xl font-bold text-gray-800">Smart SOS System</h1>
      <p className="mt-4 text-lg text-gray-700">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure, aliquam dolorum atque voluptatum ea dolor nulla iste repellat odio amet ex porro eius quis, harum nostrum, possimus vitae assumenda incidunt!</p>
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