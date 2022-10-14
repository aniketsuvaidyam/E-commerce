import React from 'react'

const Carousel = () => {
  return (
    <>
      <div className="w-full h-56 md:h-60 px-2 py-2 flex items-center mx-auto max-w-[1720px]">
        <div className="w-full h-full rounded-md">
          <div id="controls-carousel" className="relative" data-carousel="static">
            {/* Carousel wrapper */}
            <div className="relative h-52 overflow-hidden rounded-lg md:h-56">
              {/* Item 1 */}
              <div
                className="duration-700 ease-in-out absolute inset-0 transition-all transform -translate-x-full z-10"
                data-carousel-item=""
              >
                <img
                  src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* Item 2 */}
              <div
                className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-0 z-20"
                data-carousel-item="active"
              >
                <img
                  src="https://rukminim1.flixcart.com/fk-p-flap/844/140/image/816a263d7eaf3e96.jpg?q=50"
                  className="absolute block w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* Item 3 */}
              <div
                className="duration-700 ease-in-out absolute inset-0 transition-all transform translate-x-full z-10"
                data-carousel-item=""
              >
                <img
                  src="/docs/images/carousel/carousel-3.svg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* Item 4 */}
              <div
                className="hidden duration-700 ease-in-out absolute inset-0 transition-all transform"
                data-carousel-item=""
              >
                <img
                  src="/docs/images/carousel/carousel-4.svg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
              {/* Item 5 */}
              <div
                className="hidden duration-700 ease-in-out absolute inset-0 transition-all transform"
                data-carousel-item=""
              >
                <img
                  src="/docs/images/carousel/carousel-5.svg"
                  className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt="..."
                />
              </div>
            </div>
            {/* Slider controls */}
            <button
              type="button"
              className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-prev=""
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button
              type="button"
              className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
              data-carousel-next=""
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-white dark:text-gray-800"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>

        </div>
      </div>
    </>
  )
}

export default Carousel