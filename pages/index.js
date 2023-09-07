import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting_Coder - 1st Next App</title>
      </Head>
      {/* <Script src='../script.js' strategy='lazyOnload'/> */}
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-between lg:w-1/2">
            <a className="mr-5 hover:text-gray-900 font-bold">Home</a>
            <a className="mr-5 hover:text-gray-900 font-bold">About</a>
            <a className="mr-5 hover:text-gray-900 font-bold">Blogs</a>
            <a className="mr-5 hover:text-gray-900 font-bold">Contact Us</a>
          </nav>
        </div>
      </header>

      <main
        className={`min-h-screen text-gray-700 justify-between lg:py-16 ${inter.className}`}
      >
        <div className="w-screen flex flex-col jusitfy-center items-center">
          <p className="font-semibold text-3xl shadow-md shadow-gray-300 p-2">
            Hunting_Coder
          </p>
          <p className="text-xl py-8">All in One Solution for Hunting Coders</p>
        </div>
        <section className="text-gray-600 body-font w-screen">
          <div className="px-8 py-16 mx-auto">
            <div className="flex flex-wrap -m-4">
              <div className="p-3 lg:w-1/4">
                <div className="h-full bg-transparent bg-opacity-75 lg:p-8 shadow-md rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Javascript
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Learn JavaScript
                  </h1>
                  <a className="text-indigo-500 inline-flex items-center">
                    Start
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-3 lg:w-1/4">
                <div className="h-full bg-transparent bg-opacity-75 lg:p-8 shadow-md rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    Tailwind CSS
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Learn Tailwind
                  </h1>
                  <a className="text-indigo-500 inline-flex items-center">
                    Start
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-3 lg:w-1/4">
                <div className="h-full bg-transparent bg-opacity-75 lg:p-8 shadow-md rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    React
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Learn React
                  </h1>
                  <a className="text-indigo-500 inline-flex items-center">
                    Start
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="p-3 lg:w-1/4">
                <div className="h-full bg-transparent bg-opacity-75 lg:p-8 shadow-md rounded-lg overflow-hidden text-center relative">
                  <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
                    MERN Stack
                  </h2>
                  <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                    Learn MERN
                  </h1>
                  <a className="text-indigo-500 inline-flex items-center">
                    Start
                    <svg
                      className="w-4 h-4 ml-2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M5 12h14"></path>
                      <path d="M12 5l7 7-7 7"></path>
                    </svg>
                  </a>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
