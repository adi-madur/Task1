import Cards from "@/components/Cards";
import React from "react";
import cardsIcon1 from "@/assets/cards/cardsIcon1.svg";
import cardsIcon2 from "@/assets/cards/cardsIcon2.svg";
import cardsIcon3 from "@/assets/cards/cardsIcon3.svg";
import cardsIcon4 from "@/assets/cards/cardsIcon4.svg";

const page = () => {
  return (
    <div className="container-lg row row-cols-md-2 mx-auto gap-4 gap-md-4 my-5">
      <div className="row col-md-12 gap-4 gap-md-0 gy-md-0 mx-auto">
        <Cards
          backgroundColor="#8064a2"
          textColor="white"
          title={"People"}
          text={
           "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
          }
          imageURL={cardsIcon1}
        />
        <Cards
          backgroundColor="#77933C"
          textColor="white"
          title={"Place"}
          text={
           "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
          }
          imageURL={cardsIcon2}
        />
      </div>
      <div className="row col-md-12 gap-4 gap-md-0 gy-md-0 mx-auto">
        <Cards
          backgroundColor="#C0504D"
          textColor="white"
          title={"Product"}
          text={
           "Find equipment or supplies required for your hobby.  Buy, rent or borrow from shops, online stores or from community members."
          }
          imageURL={cardsIcon3}
        />
        <Cards
          backgroundColor="#0096C8"
          textColor="white"
          title={"Program"}
          text={
           "Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
          }
          imageURL={cardsIcon4}
        />
      </div>
    </div>
  );
};

export default page;
