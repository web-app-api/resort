import React from "react";
import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Banner from "../components/Banner";
import Servicehome from "../components/Servicehome";
import FeaturedRooms from "../components/FeaturedRooms";
import RoomsContainer from "../components/RoomsContainer";

const home = () => {
  return (
    <>
      <Hero>
        <Banner
          title="luxurious rooms"
          subtitle="deluxe rooms starting at $299"
        >
          <Link to="/rooms" className="btn-primary">
            our rooms
          </Link>
        </Banner>
      </Hero>
      <Servicehome />
      <FeaturedRooms />
      <RoomsContainer />
    </>
  );
};

export default home;
