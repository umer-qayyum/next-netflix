import React from "react";
import Cardscontact from "../components/Cardscontact";
import ContactForm from "../components/ContactForm";

const page = () => {
  return (
    <>
      <div className="bg-white py-10">
        <div className="max-w-[1320px] mx-auto px-5">
          <div className="md:grid grid-cols-3 gap-5">
            <Cardscontact />
          </div>
          <section className="mx-auto  w-full text-center">
            <h2 className="text-3xl font-semibold my-12">
              We'd love to hear{" "}
              <span className="text-[#E50914]"> from you </span>
            </h2>

            <ContactForm />
          </section>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3404.9292012799447!2d73.06741687469177!3d31.416076652289004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x392242bef30a05ed%3A0x39e814b7f874c28d!2sGovernment%20College%20University%20Faisalabad!5e0!3m2!1sen!2s!4v1714687193150!5m2!1sen!2s" className="w-full border my-10" height="450" style={{border:"0;"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </>
  );
};

export default page;
