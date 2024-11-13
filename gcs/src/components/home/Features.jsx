export default function Features() {
  return (
    <div>
      <div className="flex flex-col py-4">
        <div className="flex justify-center items-center">
          <div className="my-12 font-bold text-2xl text-blue-600">
            YOUR BEST CHOICE
          </div>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3">
          {/* Best Quality */}
          <div className="flex flex-col">
            <div className="flex justify-center items-center">
              <div className="p-8 bg-gray-100 transition ease-in-out duration-500 rounded-full hover:bg-atlantis-500 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-16 w-16 transition duration-300 text-atlantis-500 group-hover:text-white"
                >
                  <path
                    fill="currentColor"
                    d="m10 17l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9m-6-8L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5z"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <p className="my-4 font-semibold uppercase text-blue-600">
                Best Quality
              </p>
            </div>
            <div>
              <p className="text-justify px-10 text-gray-500">
                Gemilang Cipta Sentosa are committed to meeting the highest
                quality standards without compromising our safety culture.
              </p>
            </div>
          </div>
          {/* ON TIME */}
          <div className="flex flex-col">
            <div className="flex justify-center items-center">
              <div className="p-8 bg-gray-100 transition duration-300 rounded-full hover:bg-atlantis-500 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 24 24"
                  className="h-16 w-16 transition duration-300 text-atlantis-500 group-hover:text-white"
                >
                  <path
                    fill="currentColor"
                    d="M5 22q-.825 0-1.412-.587T3 20V6q0-.825.588-1.412T5 4h1V2h2v2h8V2h2v2h1q.825 0 1.413.588T21 6v4.675q0 .425-.288.713t-.712.287t-.712-.288t-.288-.712V10H5v10h5.8q.425 0 .713.288T11.8 21t-.288.713T10.8 22zm13 1q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m1.675-2.625l.7-.7L18.5 17.8V15h-1v3.2z"
                  ></path>
                </svg>
              </div>
            </div>
            <div>
              <p className="my-4 font-semibold text-blue-600">ON TIME</p>
            </div>
            <div>
              <p className="text-justify px-10 text-gray-500">
                At our company, we respect the customer’s time and schedule and
                always complete the projects on timely fashion way.
              </p>
            </div>
          </div>
          {/* EXPERIENCED */}
          <div className="flex flex-col">
            <div className="flex justify-center items-center">
              <div className="p-8 bg-gray-100 transition duration-300 rounded-full hover:bg-atlantis-500 group">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 48 48"
                  className="h-16 w-16 transition duration-300 text-atlantis-500 group-hover:text-white"
                >
                  <g fill="currentColor" fillRule="evenodd" clipRule="evenodd">
                    <path d="M30.492 17.142a1 1 0 0 1 1.213.698a8 8 0 1 1-15.41 0a1 1 0 0 1 1.213-.698c3.722.96 9.262.96 12.984 0M18.04 19.314a6 6 0 1 0 11.923 0c-3.617.73-8.307.73-11.923 0"></path>
                    <path d="M19 28.49C13.013 29.535 6 32.203 6 36v6h36v-6c0-3.797-7.013-6.465-13-7.51V33H19zM13 42v-9h2v9zm21-9v9h2v-9zM25 6.058v4.422a1 1 0 0 1-2 0V6a8.9 8.9 0 0 0-3 .69v5.79a1 1 0 0 1-2 0V7.935c-1.37 1.178-2.16 2.706-2.411 4.045l-.024.14l-.02.02c-.089.629-.04 1.147.088 1.503a1 1 0 0 1-1.882.675l-.048-.14c-5.807 7.582 26.433 7.578 20.584-.013l-.048.146a1 1 0 0 1-1.887-.661c.144-.414.186-.93.108-1.5l-.018-.013C32.226 10.785 31.404 9.29 30 8.112v4.368a1 1 0 0 1-2 0V6.862a9.5 9.5 0 0 0-1.203-.445A10.7 10.7 0 0 0 25 6.057"></path>
                  </g>
                </svg>
              </div>
            </div>
            <div>
              <p className="my-4 font-semibold text-blue-600">EXPERIENCED</p>
            </div>
            <div>
              <p className="text-justify px-10 text-gray-500">
                As the saying goes practice makes perfect. With our years of
                experience you can bet on us to get the job done exactly to your
                specifications.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
