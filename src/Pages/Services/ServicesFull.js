import React, { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const ServicesFull = () => {
  //   const { title, description, img, price } = service;
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/services")
      .then(res => res.json())
      .then(data => {
        setServices(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="my-20">
      <div className="text-center">
        <p className="text-2xl font-bold text-orange-600">Service</p>
        <h2 className="text-5xl font-semibold">Services We Offer</h2>
        <p className="my-4">
          We don't want to push our ideas on to customers, we simply want to
          make what they want.
        </p>
      </div>
      <div className="mb-20 ml-20 grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-8  ">
        {services.map(service => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>
    </div>
  );
};

export default ServicesFull;
