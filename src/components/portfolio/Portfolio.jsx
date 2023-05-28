import React from "react";
import "./portfolio.css";
import IMG1 from "../../assets/Library.png";
import IMG2 from "../../assets/sneakers_ecommerce.png";
import IMG3 from "../../assets/Bicycle.png";
// import IMG4 from "../../assets/portfolio4.jpg";
// import IMG5 from "../../assets/portfolio5.png";
// import IMG6 from "../../assets/portfolio6.jpg";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Library Management System",
    description: "The Library Management System Project utilizes XML and XSLT to manage book borrowing. Students and faculty can issue books with certain limitations. Each book has a unique ID, even if they share the same name and author. The system tracks book entry, release dates, and borrowing duration. It also records fine details like damages and late returns." , 
    github: "https://github.com/tyermercado/Library-management-system",
  },
  {
    id: 2,
    image: IMG2,
    title: "E-Commerce",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores architecto earum iste quasi obcaecati a dolor, perferendis quis praesentium in nam voluptas, sit qui harum quisquam quam nobis nisi eveniet beatae alias natus! Nihil, eligendi laborum enim maiores culpa atque quas, asperiores vitae dicta odio qui unde quia ut voluptas." , 
    github: "https://github.com/tyermercado/sneakers-eCommerce",
  },
  {
    id: 3,
    image: IMG3,
    title: "E-Commerce featuring a bicycle store",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores architecto earum iste quasi obcaecati a dolor, perferendis quis praesentium in nam voluptas, sit qui harum quisquam quam nobis nisi eveniet beatae alias natus! Nihil, eligendi laborum enim maiores culpa atque quas, asperiores vitae dicta odio qui unde quia ut voluptas." , 
    github: "https://github.com",
  },
  // {
  //   id: 4,
  //   image: IMG4,
  //   title: "Maintaining tasks and tracking progress",
  //   github: "https://github.com",

  // },
  // {
  //   id: 5,
  //   image: IMG5,
  //   title: "Charts templates & infographics in Figma",
  //   github: "https://github.com",
  //   demo: "https://dribbble.com/shots/16541289-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  // },
  // {
  //   id: 6,
  //   image: IMG6,
  //   title: "Charts templates & infographics in Figma",
  //   github: "https://github.com",
  //   demo: "https://dribbble.com/shots/15887665-Orion-UI-kit-Charts-templates-infographics-in-Figma",
  // },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div
        className="container 
      portfolio__container"
      >
        {data.map(({ id, image, title, description, github }) => {
          return (
            <article className="portfolio__item" key={id}>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <p>{description}</p>
              <div className="portfolio__item-cta">
                <a href={github} className="btn">
                  Github
                </a>
                {/* <a
                  href={demo}
                  className="btn btn-primary"
                  target="_blank"
                  rel="noreferrer"
                >
                  Live Demo
                </a> */}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
