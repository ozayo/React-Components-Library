import React from "react";
import Card from "../components/Card";
import Code from "../components/Code";

const CardPage = () => {
  return (
    <div>
      <div className="my-6">
        <h1>React Card Component</h1>
        <p>
          <strong>props:</strong> href, imgAlt, imgSrc, noimg, color, children
        </p>
      </div>

      <div className="my-7">
        <h2>Card component with image</h2>
        <div className="grid gap-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1">
          <Card
            href="#"
            imgSrc="https://directus.ozayozdemir.com/assets/5f8f44da-44ab-48c0-ad15-944bcc3071e0?width=600&height=300&quality=60&format=webp"
            imgAlt="A beautiful image"
          >
            <h3>Card default</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              mollitia labore repudiandae officiis, sapiente, beatae explicabo
              omnis quis corporis deleniti et blanditiis? Placeat totam dolorum,
              ea architecto tempore maxime cupiditate.
            </p>
          </Card>
          <Card
            color="secondary"
            imgSrc="https://directus.ozayozdemir.com/assets/5f8f44da-44ab-48c0-ad15-944bcc3071e0?width=600&height=300&quality=60&format=webp"
            imgAlt="A beautiful image"
          >
            <h3>Card secondary no link</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              mollitia labore repudiandae officiis, sapiente, beatae explicabo
              omnis quis corporis deleniti et blanditiis? Placeat totam dolorum,
              ea architecto tempore maxime cupiditate.
            </p>
          </Card>
          <Card
            color="accent"
            href="#"
            imgSrc="https://directus.ozayozdemir.com/assets/5f8f44da-44ab-48c0-ad15-944bcc3071e0?width=600&height=300&quality=60&format=webp"
            imgAlt="A beautiful image"
          >
            <h3>Card accent</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              mollitia labore repudiandae officiis, sapiente, beatae explicabo
              omnis quis corporis deleniti et blanditiis? Placeat totam dolorum,
              ea architecto tempore maxime cupiditate.
            </p>
          </Card>
          <Card
            color="bg-green-100 hover:bg-green-200"
            imgSrc="https://directus.ozayozdemir.com/assets/5f8f44da-44ab-48c0-ad15-944bcc3071e0?width=600&height=300&quality=60&format=webp"
            imgAlt="A beautiful image"
          >
            <div className="text-green-900">
              <h3>Card custom no link</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Possimus mollitia labore repudiandae officiis, sapiente, beatae
                explicabo omnis quis corporis deleniti et blanditiis? Placeat
                totam dolorum, ea architecto tempore maxime cupiditate.
              </p>
            </div>
          </Card>
        </div>
        <div className="my-4">
          <h3>Usage</h3>
          <Code language="javascript">
            {`
import Card from "./components/Card";

<Card
  href="#"
  imgSrc="https://directus.ozayozdemir.com/assets/5f8f44da-44ab-48c0-ad15-944bcc3071e0?width=600&height=300&quality=60&format=webp"
  imgAlt="A beautiful image"
>
  <h3>Card default</h3>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia labore repudiandae officiis, sapiente, beatae explicabo omnis quis corporis deleniti et blanditiis? Placeat totam dolorum, ea architecto tempore maxime cupiditate.</p>
</Card>

<Card
  color="secondary"
  imgSrc="https://directus.ozayozdemir.com/assets/5f8f44da-44ab-48c0-ad15-944bcc3071e0?width=600&height=300&quality=60&format=webp"
  imgAlt="A beautiful image"
>
  <h3>Card secondary no link</h3>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia labore repudiandae officiis, sapiente, beatae explicabo omnis quis corporis deleniti et blanditiis? Placeat totam dolorum, ea architecto tempore maxime cupiditate.</p>
</Card>
<Card
  color="accent"
  href="#"
  imgSrc="https://directus.ozayozdemir.com/assets/5f8f44da-44ab-48c0-ad15-944bcc3071e0?width=600&height=300&quality=60&format=webp"
  imgAlt="A beautiful image"
>
  <h3>Card accent</h3>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia labore repudiandae officiis, sapiente, beatae explicabo omnis quis corporis deleniti et blanditiis? Placeat totam dolorum, ea architecto tempore maxime cupiditate.</p>
</Card>
<Card
  color="bg-green-100 hover:bg-green-200"
  imgSrc="https://directus.ozayozdemir.com/assets/5f8f44da-44ab-48c0-ad15-944bcc3071e0?width=600&height=300&quality=60&format=webp"
  imgAlt="A beautiful image"
>
  <div className="text-green-900">
    <h3>Card custom no link</h3>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia labore repudiandae officiis, sapiente, beatae explicabo omnis quis corporis deleniti et blanditiis? Placeat totam dolorum, ea architecto tempore maxime cupiditate.</p>
</Card>
  </div>
</Card>
        `}
          </Code>
        </div>
      </div>

      <div className="my-7">
        <h2>Card component without image</h2>
        <div className="grid gap-5 md:grid-cols-3 sm:grid-cols-1">
          <Card noimg>
            <h3>Card default</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              mollitia labore repudiandae officiis, sapiente, beatae explicabo
              omnis quis corporis deleniti et blanditiis? Placeat totam dolorum,
              ea architecto tempore maxime cupiditate.
            </p>
          </Card>
          <Card noimg color="secondary" href="#">
            <h3>Card secondary with link</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              mollitia labore repudiandae officiis, sapiente, beatae explicabo
              omnis quis corporis deleniti et blanditiis? Placeat totam dolorum,
              ea architecto tempore maxime cupiditate.
            </p>
          </Card>
          <Card noimg color="accent">
            <h3>Card accent</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus
              mollitia labore repudiandae officiis, sapiente, beatae explicabo
              omnis quis corporis deleniti et blanditiis? Placeat totam dolorum,
              ea architecto tempore maxime cupiditate.
            </p>
          </Card>
        </div>
        <div className="my-4">
          <h3>Usage</h3>
          <Code language="javascript">
            {`
<Card noimg>
  <h3>Card default</h3>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia labore repudiandae officiis, sapiente, beatae explicabo omnis quis corporis deleniti et blanditiis? Placeat totam dolorum, ea architecto tempore maxime cupiditate.</p>
</Card>
<Card noimg color="secondary" href="#">
  <h3>Card secondary with link</h3>
 <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia labore repudiandae officiis, sapiente, beatae explicabo omnis quis corporis deleniti et blanditiis? Placeat totam dolorum, ea architecto tempore maxime cupiditate.</p>
</Card>
<Card noimg color="accent">
  <h3>Card accent</h3>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Possimus mollitia labore repudiandae officiis, sapiente, beatae explicabo omnis quis corporis deleniti et blanditiis? Placeat totam dolorum, ea architecto tempore maxime cupiditate.</p>
</Card>
        `}
          </Code>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
