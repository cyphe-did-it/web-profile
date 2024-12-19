import type { Metadata } from "next";
import "./globals.css";

import Header from "./components/Header";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Cyphil Raven Midsapak",
  description: "My Profile",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased h-[100%] bg-gradient-to-tl from-[#006F66] to-[#004D40] `}
      >

        <div className="flex flex-col items-center justify-center gap-8 m-[2rem] 
        lg:flex-row ">
          {/* Left section */}
          <div className="shadow shadow-white">
            <Header />
          </div>
          
          {/* Right section */}
          <div className="lg:flex lg:flex-col lg:items-center lg:justify-center border-[2px] border-teal-600 bg-white  lg:bg-teal-600 w-[400px] shadow shadow-white
          md:w-[400px] lg:w-[800px] lg:h-[675.2px] ">
            <div className="flex items-center justify-center lg:w-[780px] lg:h-[8%] lg:mt-2 bg-white ">
              <Navigation />
            </div>
            
            <div className=" lg:h-[90%] lg:overflow-y-auto lg:m-2  lg:p-2 lg:border-[2px] bg-white lg:border-teal-600">
              {children}
            </div>
            
          </div>
        </div>
        


        {/* <div className="flex flex-col items-center justify-center h-screen w-screen">
          <div className="grid gap-3 h-screen w-[90%]
            lg:grid-cols-12 lg:gap-3 lg:items-center lg:text-center  lg:m-0 lg:p-0 lg:h-[90%]
          ">
            
              <div className="
                bg-white border-[2px] border-orange-600 rounded-[20px] shadow-xl h-full w-full
                lg:col-span-4 lg:m-0 
              ">
                <Header />
              </div>

         
              <div className="
                  bg-white border-[2px] border-teal-600 rounded-[20px] shadow-xl h-full w-full 
                  grid grid-rows-2 gap-0
                  lg:col-span-8 lg:m-0
              ">
                  <div className="h-[46px] bg-red-500">
                    <Navigation />
                  </div>

                  <div className="h-full rounded-b-[18px] text-teal-600 bg-red-500  ">
                    {children}
                  </div>                            
              </div>
          </div>
        </div> */}
      </body>

       
        
    </html>
  );
}
