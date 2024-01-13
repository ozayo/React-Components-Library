import React from "react";
import mainimg from "../assets/homepage.jpeg";
import Card from "../components/Card";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <>
      <div className="lg:flex lg:flex-row items-center md:flex md:flex-col gap-5 my-8">
        <div className="lg:w-1/2 md:w-full">
          <h1 className="text-5xl">
            React{" "}
            <span className="bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
              Component
            </span>{" "}
            Library
          </h1>
          <p className="text-lg text-slate-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, modi
            id ipsa consequuntur corporis voluptates odio eaque tempore!
            Voluptatibus quia repellat deserunt est in dolores? Quam modi neque
            vitae voluptas?
          </p>
          <a className="button large accent rm mt-5" href="#">
            See details
          </a>
        </div>
        <div className="lg:w-1/2 md:w-full">
          <img
            className="headerimg rounded-lg"
            src={mainimg}
            alt="Home page image"
          />
        </div>
      </div>

      <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-14">
        <Card
          color="secondary"
          imgSrc="https://directus.ozayozdemir.com/assets/5f8f44da-44ab-48c0-ad15-944bcc3071e0?width=600&height=300&quality=60&format=webp"
          imgAlt="A beautiful image"
        >
          <h3>Button component</h3>
          <p>Check out all button alternatives.</p>
          <Link to="/buttons" className="button base accent rm mt-2">
            See buttons
          </Link>
        </Card>
        <Card
          color="secondary"
          imgSrc="https://directus.ozayozdemir.com/assets/5f8f44da-44ab-48c0-ad15-944bcc3071e0?width=600&height=300&quality=60&format=webp"
          imgAlt="A beautiful image"
        >
          <h3>Card component</h3>
          <p>Check out all Card alternatives.</p>
          <Link to="/cards" className="button base accent rm mt-2">
            See cards
          </Link>
        </Card>
        <Card
          color="secondary"
          imgSrc="https://directus.ozayozdemir.com/assets/5f8f44da-44ab-48c0-ad15-944bcc3071e0?width=600&height=300&quality=60&format=webp"
          imgAlt="A beautiful image"
        >
          <h3>Alert component</h3>
          <p>Check out all Alert alternatives.</p>
          <Link to="/alerts" className="button base accent rm mt-2">
            See alerts
          </Link>
        </Card>
        <Card
          color="secondary"
          imgSrc="https://directus.ozayozdemir.com/assets/5f8f44da-44ab-48c0-ad15-944bcc3071e0?width=600&height=300&quality=60&format=webp"
          imgAlt="A beautiful image"
        >
          <h3>Badge component</h3>
          <p>Check out all Badge alternatives.</p>
          <Link to="/badges" className="button base accent rm mt-2">
            See badges
          </Link>
        </Card>
      </div>
    </>
  );
};

export default HomePage;
