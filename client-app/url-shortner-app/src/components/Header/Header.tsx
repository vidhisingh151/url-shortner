// import * as React from 'react';


// interface IHeaderProps {

// }

// const Header: React.FunctionComponent<IHeaderProps> = () => {
//     return (
//         <div className=" bg-slate-900 shadow-md">
//             <div className="container p-2 mx-auto">
//                 <nav className="py-5 flex">

//                     <div className="text-base text-blue-400 text-2xl font-bold ">URL Shortner</div>
//                     <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
//                         <path stroke-linecap="round" stroke-linejoin="round" d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 
//                         1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244" />
//                     </svg>

//                 </nav>
//             </div>
//         </div>
//     );
// }

// export default Header;












// import * as React from 'react';

// const Header: React.FunctionComponent = () => {
//     return (
//         <div className="bg-slate-900 shadow-md">
//             <div className="container mx-auto p-2">
//                 <nav className="py-5 flex items-center">

//                     {/* Logo */}
//                     <div className="flex items-center gap-2 text-blue-400 text-2xl font-bold ">
//                         <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             strokeWidth={1.5}
//                             stroke="currentColor"
//                             className="w-6 h-6 text-blue-400"
//                         >
//                             <path
//                                 strokeLinecap="round"
//                                 strokeLinejoin="round"
//                                 d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 
//                            1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
//                             />
//                         </svg>

//                         <span>URL Shortner</span>

//                         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-6">
//                             <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
//                         </svg>

//                     </div>

//                 </nav>
//             </div>
//         </div>
//     );
// };

// export default Header;












import * as React from "react";

const Header: React.FunctionComponent = () => {
  return (
    <div className="bg-slate-900 shadow-md">
      <div className="container mx-auto px-4">
        <nav className="py-5 flex items-center justify-between">

          {/* LEFT: Logo + icon */}
          <div className="flex items-center gap-2 text-blue-400 text-2xl font-bold">
            {/* First icon (before U) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-blue-400"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.19 8.688a4.5 4.5 0 0 1 1.242 7.244l-4.5 4.5a4.5 4.5 0 0 1-6.364-6.364l1.757-1.757m13.35-.622 
                1.757-1.757a4.5 4.5 0 0 0-6.364-6.364l-4.5 4.5a4.5 4.5 0 0 0 1.242 7.244"
              />
            </svg>

            <span>URL Shortner</span>
          </div>

          {/* RIGHT: Settings icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 text-slate-300 hover:text-blue-400 cursor-pointer transition"

          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>

        </nav>
      </div>
    </div>
  );
};

export default Header;
