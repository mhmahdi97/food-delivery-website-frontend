import banner from "../../assets/images/Image1.png";

const Hero = () => {
    return (
      <div className="flex flex-col lg:flex-row lg:items-center bg-secondary rounded-3xl p-6 lg:p-20 max-w-full lg:h-[314px]">
        <div className="hidden md:block lg:text-left text-center">
          <h1 className="text-heading-primary mb-6">
            Deliver Food to Your Doorstep!
          </h1>
          <p className="text-heading-secondary">
            Authentic Food, Quick Service, Fast Delivery
          </p>
        </div>
        <div className="mx-auto">
          <img src={banner} alt="banner" />
        </div>
      </div>
    );
};

export default Hero;