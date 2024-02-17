import Image from "next/image";

export default function Home() {
  return (
    <div>
      {/* <div className="flex justify-center md:justify-end">
        <a
          href="#"
          className="text-primary btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
        >
          Login
        </a>
        <a
          href="#"
          className="text-primary ml-2 btn border-primary md:border-2 hover:bg-primary hover:text-white transition ease-out duration-500"
        >
          Sign up
        </a>
      </div> */}
      <header>
        <h2 className="text-gray-700 text-6xl font-semibold">Portfolio</h2>
        <h3 className="text-2xl font-semibold">For the world</h3>
      </header>

      <div>
        <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Latest projects
        </h4>

        <div className="mt-8 grid lg:grid-cols-3 gap-10">
          <div className="card hover:shadow-lg">
            <img
              src="images/adoptme.jpg"
              alt="3dchess"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Adopt Me</span>
              <span className="block text-gray-500 text-sm">
                <svg
                  className="w-4 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                  />
                </svg>

                <span> GitHub: </span>
                <a
                  target="_blank"
                  href="https://github.com/olganovichkova/Adopt-me"
                  className="underline"
                >
                  AdoptMe
                </a>
              </span>
            </div>
            <div className="badge">
              <span>Javascript</span>
            </div>
          </div>

          <div className="card hover:shadow-lg">
            <img
              src="images/brightfox.jpg"
              alt="brightfox"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Checkin app</span>
              <span className="block text-gray-500 text-sm">
                <svg
                  className="w-4 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                  />
                </svg>

                <span> GitHub: </span>
                <a
                  target="_blank"
                  href="https://github.com/olganovichkova/BrightFox"
                  className="underline"
                >
                  BrightFox
                </a>
              </span>
            </div>
            <div className="badge">
              <span>Javascript</span>
            </div>
          </div>
          <div className="card hover:shadow-lg">
            <img
              src="images/accuire.png"
              alt="accuire"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">Accuire game</span>
              <span className="block text-gray-500 text-sm">
                <svg
                  className="w-4 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                  />
                </svg>

                <span> GitHub: </span>
                <a
                  target="_blank"
                  href="https://github.com/olganovichkova/BrightFox"
                  className="underline"
                >
                  Accuire
                </a>
              </span>
            </div>
            <div className="badge">
              <span>Java</span>
            </div>
          </div>
          <div className="card hover:shadow-lg">
            <img
              src="images/3dchess.jpg"
              alt="3dchess"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">3D chess game</span>
              <span className="block text-gray-500 text-sm">
                <svg
                  className="w-4 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                  />
                </svg>

                <span> GitHub: </span>
                <a
                  target="_blank"
                  href="https://github.com/olganovichkova/BrightFox"
                  className="underline"
                >
                  3D Chess
                </a>
              </span>
            </div>
            <div className="badge">
              <span>C++</span>
            </div>
          </div>

          <div className="card hover:shadow-lg">
            <img
              src="images/dnamapping.jpg"
              alt="3dchess"
              className="w-full h-32 sm:h-48 object-cover"
            />
            <div className="m-4">
              <span className="font-bold">DNA mapping tool</span>
              <span className="block text-gray-500 text-sm">
                <svg
                  className="w-4 inline-block"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 15a4.5 4.5 0 0 0 4.5 4.5H18a3.75 3.75 0 0 0 1.332-7.257 3 3 0 0 0-3.758-3.848 5.25 5.25 0 0 0-10.233 2.33A4.502 4.502 0 0 0 2.25 15Z"
                  />
                </svg>

                <span> GitHub: </span>
                <a
                  target="_blank"
                  href="https://github.com/olganovichkova/DubSeq"
                  className="underline"
                >
                  DubSeq
                </a>
              </span>
            </div>
            <div className="badge">
              <span>Phyton</span>
            </div>
          </div>
        </div>

        {/* <h4 className="font-bold mt-12 pb-2 border-b border-gray-200">
          Most Popular
        </h4>

        <div className="mt-8"></div>

        <div className="flex justify-center">
          <div className="bg-secondary-100 text-secondary-200 btn hover:shadow-inner transform hover:scale-125 hover:bg-opacity-50 transition ease-out duration-300">
            Load more
          </div>
        </div> */}
      </div>
    </div>
  );
}
