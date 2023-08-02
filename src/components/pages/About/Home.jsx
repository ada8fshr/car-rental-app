import React, { useState, useEffect } from "react";
import Button from "./Button/Button";
import Booking from "../Booking/Booking"
import dodgeChallenger from "../../../assets/images/Red-Dodge-Challenger-PNG-Pic.png"; // Replace with the actual path to your car image
import jeepCherokee from "../../../assets/images/2018-Jeep-Cherokee-Firecracker-Red.png";
import volkswagen from "../../../assets/images/main-car.png";
import heroBg from "../../../assets/images/hero-bg.png";
const carImages = [dodgeChallenger, jeepCherokee, volkswagen];

const Home = () => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [fadeTransition, setFadeTransition] = useState(false);

    useEffect(() => {
        // Change image every 5 seconds
        const interval = setInterval(() => {
            setFadeTransition(true);
            setTimeout(() => {
                setCurrentImageIndex((prevIndex) => (prevIndex + 1) % carImages.length);
                setFadeTransition(false);
            }, 500); // Set this value to match your CSS transition duration
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const currentImage = carImages[currentImageIndex];

    return (
      <section className="p-6">
        <div className="flex flex-wrap md:px-4 mb-8">
          <div className="w-full md:w-1/2 leading-relaxed">
            <div className="md:mx-4">
              <h3 className="text-2xl text-gray-800 font-bold mb-4">Plan your trip now</h3>
              <h1 className="text-5xl text-gray-800 font-bold">
                Save{" "}
                <a className="text-red-500">big</a>
                {" "} with our car rental
              </h1>
              <p className=" my-4 text-gray-500">
                Rent the car of your dreams. Unbeatable prices, unlimited miles, flexible pick-up options and much more.
              </p>
              <Button />
            </div>
          </div>
            <div className="w-full md:w-1/2">
                <div className="md:mx-4 flex items-center justify-center relative" style={{ height: "400px" }}>
                    <img
                        src={currentImage}
                        alt="Car"
                        className={`max-w-full h-auto ${fadeTransition ? "fade-out" : "fade-in"}`}
                    />
                </div>
            </div>
        </div>
        <div className="flex flex-wrap">
            <div className="w-full leading-relaxed">
                <div className="md:mx-4">
                    <div className="w-full leading-relaxed">
                        <div className="md:mx-4">
                            <Booking />
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
  );
};

export default Home;