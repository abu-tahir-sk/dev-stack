import banner from "../assets/banner-stack.png";

const Banner = () => {
  return (
    <section id="home" className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-10">

         
          <div className="w-full md:w-1/2">

            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Build Your Ideal
              <br />

              <span className="brand-gradient-text">
                Development Stack
              </span>
            </h1>

            <p className="mt-4 text-sm leading-6 text-gray-500 max-w-lg">
              Explore frontend, backend, database, and tooling
              options, compare them side by side, and build the
              perfect technology stack for your next project.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">

              <a
               
                className="brand-gradient text-white text-sm font-medium px-5 py-2.5 rounded-md"
              >
                Explore Technologies
              </a>

              <a
               
                className="border border-gray-300 text-gray-600 text-sm px-6 py-2.5 rounded-md hover:border-pink-400 hover:text-pink-500"
              >
                Learn More
              </a>

            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={banner}
              alt="Development Stack"
              className="w-[250px] md:w-[350px]"
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default Banner;