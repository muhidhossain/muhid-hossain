import React from "react";
import { CardDeck } from "react-bootstrap";
import CardDetails from "../Card/CardDetails";
import amazonImg from "../../images/portfolio/amazon-clone.png";
import powerXImg from "../../images/portfolio/power-x-gym.jpg";
import boiwalaImg from "../../images/portfolio/boiwala.png";
import doctorsPortalImg from "../../images/portfolio/doctor's-portal.jpg";
import airbnbCloneImg from "../../images/portfolio/airbnb-clone.png";
import redOnionImg from "../../images/portfolio/red-onion.png";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <div className="container portfolio-area">
      <div className="portfolio-heading">
        <h4>PORTFOLIO</h4>
      </div>
      <CardDeck className="portfolios">
        <CardDetails
          image={amazonImg}
          title="Amazon clone"
          details="Full-Stack Amazon clone. Developed with React JS, hosted to firebase,
          accept payment with Stripe."
          liveWebsite="https://emazon-clone.web.app"
          git="https://github.com/muhidhossain/amazon-clone"
        />
        <CardDetails
          image={powerXImg}
          title="Power X Gym"
          details="Developed with most popular JavaScript framework React JS. Accept
          payment with Stripe and PayPal."
          liveWebsite="https://power--x--gym.web.app"
          git="https://github.com/muhidhossain/powerxgym"
        />
        <CardDetails
          image={boiwalaImg}
          title="Boiwla"
          details="Boiwala the place where you buy knowledge. Develop with React JS,
          MongoDB, Node JS."
          liveWebsite="https://boii-wala.web.app"
          git="https://github.com/muhidhossain/boiwala"
        />
      </CardDeck>
      <CardDeck className="portfolios">
        <CardDetails
          image={doctorsPortalImg}
          title="Doctor's Portal"
          details="Web application for taking care for your teeth. Make your
          appointment now. We will take care of your precious smile."
          liveWebsite="https://doctors-portal-visit.web.app"
          git="https://github.com/muhidhossain/doctors-portal-app"
        />
        <CardDetails
          image={airbnbCloneImg}
          title="Airbnb Clone"
          details="Front-End clone of Airbnb developed with React JS, Firebase and
          CSS Flexbox."
          liveWebsite="https://airbnb-clone-challenge.web.app"
          git="https://github.com/muhidhossain/airbnb-clone"
        />
        <CardDetails
          image={redOnionImg}
          title="Red Onion Restaurant"
          details="A restaurant web application build with React JS. Ordering food is
          available but delivery process is closed now."
          liveWebsite="https://red-onion-food1.web.app"
          git="https://github.com/muhidhossain/red-onion-restaurant"
        />
      </CardDeck>
    </div>
  );
};

export default Portfolio;
