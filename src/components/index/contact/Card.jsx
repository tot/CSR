import React from "react"

const Card = ({ category, title }) => {
  return (
    <div className="">
      <h2 className="text-contact font-bold text-sm md:text-base uppercase tracking-widest">
        {category}
      </h2>
      <h1 className="text-black font-medium text-2xl md:text-4xl">{title}</h1>
      <div className="md:grid md:grid-cols-2 gap-x-2 lg:gap-x-20 gap-y-5 w-full text-gray-500 pt-8">
        <div className="pb-6 md:pb-0">
          <h3 className="text-gray-800 text-lg font-medium">
            General Inquiries
          </h3>
          <a
            className="text-paragraph text-base ease-in duration-100 transition-colors hover:text-primary"
            href="mailto:contact@wtwcsr.org"
          >
            contact@wtwcsr.org
          </a>
        </div>
        <div className="pb-6 md:pb-0">
          <h3 className="text-gray-800 text-lg font-medium">Sponsorships</h3>
          <a
            className="text-paragraph text-base ease-in duration-100 transition-colors hover:text-primary"
            href="mailto:frc@wtwcsr.org"
          >
            frc@wtwcsr.org
          </a>
        </div>
        <div className="pb-6 md:pb-0">
          <h3 className="text-gray-800 text-lg font-medium">
            FIRST Robotics Competition
          </h3>
          <a
            className="text-paragraph text-base ease-in duration-100 transition-colors hover:text-primary"
            href="mailto:frc@wtwcsr.org"
          >
            frc@wtwcsr.org
          </a>
        </div>
        <div className="pb-6 md:pb-0">
          <h3 className="text-gray-800 text-lg font-medium">
            AFA CyberPatriot
          </h3>
          <a
            className="text-paragraph text-base ease-in duration-100 transition-colors hover:text-primary"
            href="mailto:cyberpatriot@wtwcsr.org"
          >
            cyberpatriot@wtwcsr.org
          </a>
        </div>
        <div className="col-span-2">
          <h3 className="text-gray-900 text-lg font-medium">Mailing Address</h3>
          <a
            className="text-paragraph text-base ease-in duration-100 transition-colors hover:text-primary"
            href="https://www.google.com/maps/place/9525+Main+St,+Fairfax,+VA+22032/@38.8399134,-77.2773647,17z/data=!3m1!4b1!4m5!3m4!1s0x89b64c257d9af9d5:0x1cd1a81390493b9a!8m2!3d38.8399092!4d-77.275176"
          >
            9525 Main St, Fairfax, VA 22031
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
