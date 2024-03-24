import React from "react";
import Card from "./card";
function About() {
  return (
    <div>
      <div className="about_content">
        <h1>About our Venture</h1>
        <p>
          At Sole Haven, we're more than just a sneaker shop—we're a destination
          for sneaker enthusiasts, collectors, and casual wearers alike. Step
          into a world where comfort meets style, where performance merges with
          fashion, and where your sneaker journey begins.At Sole Haven, customer
          satisfaction is our top priority. Our knowledgeable team is here to
          assist you in finding the ideal sneakers for your lifestyle, whether
          you're hitting the gym, strolling through the city, or making a
          fashion statement.
        </p>
        <p>
          Whether you're on the hunt for the latest releases from top brands or
          seeking classic kicks that never go out of style, we've got you
          covered. Explore our carefully curated collection of sneakers from
          iconic brands like Nike, Adidas, Jordan, New Balance, and more. Don't
          miss out on the latest drops, exclusive releases, and special offers.
          Sign up for our newsletter and follow us on social media to stay in
          the loop with all things Sole Haven.
        </p>
      </div>
      <h1>Meet our team</h1>
      <div className="cards-2">
        <Card
          img="https://media.istockphoto.com/id/613531310/photo/young-and-handsome.jpg?s=612x612&w=0&k=20&c=RJVt3sQQ6uhh9JPSBjgTnnKrYlexIJHLsYMHOr_Dskg="
          title="Mr. Joe White"
          sub="Co-founder"
          description='"Success is no accident. It is hard work, perseverance, learning, studying, sacrifice, and most of all, love of what you are doing or learning to do."'
        ></Card>
        <Card
          img="https://media.istockphoto.com/id/455586203/photo/mature-businessman-portrait-isolated.jpg?s=612x612&w=0&k=20&c=Ff5Ki25rSu2jecBeMxrJX8I4qjs18RKmkQA5-p5HKFo="
          title="Mr. Samuel Ponting"
          sub="Director"
          description='"The price of success is hard work, dedication to the job at hand, and the determination that whether we win or lose, we have applied the best of ourselves to the task at hand."'
        ></Card>
        <Card
          img="https://media.istockphoto.com/id/520860375/photo/hes-got-business-handled.jpg?s=612x612&w=0&k=20&c=s1UL-_LKLDrL1V9EQkpIokOlU3veGeUcS1AaeqKiH_o="
          title="Mr. Ash Bobbins"
          sub="CEO"
          description='"Opportunities are usually disguised as hard work, so most people dont recognize them."'
        ></Card>
        <Card
          img="https://3.imimg.com/data3/QE/WD/MY-10556739/50111_worn_365-500x500.jpg"
          title="Mrs. Susan Sprouse"
          sub="Head Manager"
          description='"The only place where success comes before work is in the dictionary"'
        ></Card>
      </div>
    </div>
  );
}

export default About;
