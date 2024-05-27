import Image from"next/image";
import Header from"@/components/Header";
import Cards from"@/components/Cards";
import add from"@/assets/addSection/addBtn.svg";
import quotation from"@/assets/testimonials/quotation.svg";
import media from"@/assets/testimonials/testimonialsMediaPlayer.png";
import mediaIcon from"@/assets/testimonials/mediaIcon.svg";
import bottomSVG1 from"@/assets/bottomSection/bottomSVG1.svg";
import bottomSVG2 from"@/assets/bottomSection/bottomSVG2.svg";
import cardsIcon1 from"@/assets/cards/cardsIcon1.svg";
import cardsIcon2 from"@/assets/cards/cardsIcon2.svg";
import cardsIcon3 from"@/assets/cards/cardsIcon3.svg";
import cardsIcon4 from"@/assets/cards/cardsIcon4.svg";

import Link from"next/link";

export default function Home() {
  return (

    <div>

      {/* Header Section */}
      <div className="p-3 p-md-5 pb-md-0" style={{ background:"#F7F5F9" }}>
        <Header />
      </div>

      {/* Cards Section */}
      <div className="container-lg row row-cols-md-2 mx-auto gap-4 gap-md-4 my-5">
        <div className="row col-md-12 gap-4 gap-md-0 gy-md-0 mx-auto">
          <Cards
            backgroundColor="#007bff"
            textColor="white"
            title={"People"}
            text={
             "Find a teacher, coach, or expert for your hobby interest in your locality.  Find a partner, teammate, accompanist or collaborator."
            }
            buttonText={"Connect"}
            imageURL={cardsIcon1}
          />
          <Cards
            backgroundColor="#77933C"
            textColor="white"
            title={"Place"}
            text={
             "Find a class, school, playground, auditorium, studio, shop or an event venue.  Book a slot at venues that allow booking through hobbycue."
            }
            buttonText={"Meet up"}
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
            buttonText={"Get it"}
            imageURL={cardsIcon3}
          />
          <Cards
            backgroundColor="#0096C8"
            textColor="white"
            title={"Program"}
            text={
             "Find events, meetups and workshops related to your hobby.  Register or buy tickets online."
            }
            buttonText={"Attend"}
            imageURL={cardsIcon4}
          />
        </div>
      </div>

      {/* Add new section */}
      <div
        className=""
        style={{
          background:"#F7FDFF",
          paddingTop:"100px",
          paddingBottom:"100px",
        }}
      >
        <div className="container-lg p-3">
          <div className="card gap-5 p-4">
            <div className="card-body d-flex flex-column gap-3">
              <h5 className="card-title d-flex align-items-center gap-3 justify-content-center justify-content-md-start">
                <Image src={add} alt="cardsIcon1" width={0} height={0} />
                <span className="fw-bold">Add your own</span>
              </h5>
              <p className="card-text text-center text-md-start">
                Are you a teacher or expert? Do you sell or rent out equipment,
                venue or event tickets? Or, you know someone who should be on
                hobbycue? Go ahead and Add your Own page
              </p>
              <div className="" style={{ minWidth:"100%" }}>
                <Link href="/AddNew" className="text-decoration-none">
                  <button
                    className="btn btn-outline-primary px-4 py-2 d-md-none"
                    style={{ width:"100%" }}
                  >
                    Add new
                  </button>

                  <button className="btn btn-outline-primary px-4 py-2 d-none d-md-block">
                    Add new
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="p-3"
        style={{
          paddingTop:"100px",
          paddingBottom:"100px",
        }}
      >
        {/* testimonials */}

        <div
          className="container  card border-0 px-3 py-4"
          style={{ background:"#F7F5F9" }}
        >
          <div className="card-body d-flex flex-column gap-3">
            <h5 className="card-title d-flex align-items-center gap-3  justify-content-center  justify-content-md-start ">
              <Image src={quotation} alt="quotation" width={0} height={0} />
              <span className="fw-bold" style={{ fontSize:"24px" }}>
                Testimonials
              </span>
            </h5>
            <p
              className="card-text text-center text-md-start"
              style={{ color:"#6D747A", fontWeight: 300, fontSize:"16px" }}
            >
              In a fast growing and ever changing city like Bangalore, it
              sometimes becomes very difficult to find or connect with like
              minded people. Websites like hobbycue.com is a great service which
              helps me get in touch with, communicate, connect, and exchange
              ideas with other dancers. It also provides the extra benefit of
              finding products and services that I can avail, which I can be
              assured is going to be of great quality as it comes recommended by
              people of the hobbycue community. To have discussions, to get
              visibility, and to be able to safely explore various hobbies and
              activities in my city, all under one roof, is an excellent idea
              and I highly recommend it.
            </p>
            <div className="d-flex flex-column-reverse flex-xl-row  justify-content-between gap-3 gap-xl-0">
              <Image
                src={media}
                alt="media"
                width={0}
                height={0}
                className="w-auto object-fit-contain"
              />
              <div className="d-flex align-items-center  gap-3 justify-content-center  justify-content-xl-start">
                <Image
                  src={mediaIcon}
                  alt="media"
                  width={100}
                  height={100}
                  className="w-auto custom-image-class"
                />
                <div className="d-flex flex-column justify-content-center">
                  <div className="d-flex flex-column">
                    <h3
                      className="fw-semibold"
                      style={{ color:"#8064A2", fontSize:"18px" }}
                    >
                      Shubha Nagarajan
                    </h3>
                    <p style={{ color:"#0096C8", fontSize:"14px" }}>
                      Classical Dancer
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bottom section */}
      <div
        className="py-md-5"
        style={{
          background:"#F7FDFF",
        }}
      >
        <div className="container row mx-auto gap-3 gap-md-5">
          <div>
            <h1 className="fst-italic fw-semibold bottom-style-h1">
              Your <span style={{ color:"#8064A2" }}>Hobby</span> , Your{" "}
              <span style={{ color:"#0096C8" }}>Community...</span>
            </h1>
            <button className="btn btn-primary px-4 py-2 mt-4 fw-semibold">
              Get started
            </button>
          </div>

          <div className="row">
            <Image
              src={bottomSVG1}
              alt="bottomSVG1"
              width={0}
              height={0}
              className="col-6"
            />
            <Image
              src={bottomSVG2}
              alt="bottomSVG2"
              width={0}
              height={0}
              className="col-6"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
