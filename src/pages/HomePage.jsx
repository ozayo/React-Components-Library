import React from "react";
import mainimg from "../assets/homepage.jpeg";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import Badge from "../components/Badge";
import { FaCheck, FaGithub } from "react-icons/fa";

const HomePage = () => {
  return (
    <>
      <div className="lg:flex lg:flex-row items-center md:flex md:flex-col gap-5 my-8">
        <div className="lg:w-1/2 md:w-full">
          <div className="bg-violet-400 pointer-events-none absolute start-60 aspect-square w-96 rounded-full opacity-20 blur-3xl [transform:translate3d(0,0,0)]"></div>
          <Badge icon={<FaCheck />} color="success">
            <strong>New!</strong> Card component ready to used
          </Badge>
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
          <Link className="button large primary rm mt-5" to="/buttons">
            Start here
          </Link>
          <a
            className="button large secondary rm mt-5 ml-2"
            href="https://github.com/ozayo/React-Components-Library"
            target="_blank"
          >
            <FaGithub />
            Github page
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

      <div className="mt-16">
        <h2>Our components</h2>
        <p>You can find our latest components here..</p>
        <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-4 mb-14">
          <Card
            color="secondary"
            imgSrc="https://directus.ozayozdemir.com/assets/fad318d6-2791-4172-a200-ce9341cc3ea9?width=600&height=300&quality=60&format=webp"
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
            imgSrc="https://directus.ozayozdemir.com/assets/a1dd35c4-8838-4dfb-8e01-af81aa924ff1?width=600&height=300&quality=60&format=webp"
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
            imgSrc="https://directus.ozayozdemir.com/assets/05de08b6-7098-47c6-9484-432fbd6126e1?width=600&height=300&quality=60&format=webp"
            imgAlt="A beautiful image"
          >
            <h3>Badge component</h3>
            <p>Check out all Badge alternatives.</p>
            <Link to="/badges" className="button base accent rm mt-2">
              See badges
            </Link>
          </Card>
        </div>
      </div>
    </>
  );
};

export default HomePage;
