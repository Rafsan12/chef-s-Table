import BannerImg from "../../assets/Rectangle 1.png";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url(${BannerImg})`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <h1 className="mb-5  text-xl font-bold">
              Learn to create delicious recipes while keeping track of calories
              to support your healthy lifestyle
            </h1>

            <div>
              <button
                style={{ "background-color": "#0be58a" }}
                className=" btn rounded-full p-4 text-white"
              >
                Explore Now
              </button>
              <button className=" btn rounded-full border p-4 ml-2">
                Our Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
