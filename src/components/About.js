import "../styles/about.css";

const About = () => {
  return ( 
    <div className="about">
    <div className="about-wrapper">
      <div className="about-text">
        <p className="about-title">Hello</p>
        <div className="about-body">
          <p>
            I'm Dilara, a passionate senior software engineering student living in Turkey. Currently, I'm pursuing my studies at Middle East Technical University.
          </p>
          <p>
            From a young age, I've been captivated by the delight of reading and writing. Whether it's getting lost in a good book or expressing my thoughts through writing, these hobbies have always been my source of inspiration and creativity. I've finally decided to create a blog of my own where I aim to share my journey, my learnings in software development, and my thoughts on various topics that intrigue me.
          </p>
          <p>
            I hope you find my posts insightful and engaging. Thank you for visiting my blog, and happy reading!
          </p>
        </div>
      </div>
      <div className="grid-container">
        <img className="about-img img1" src={require("../static/about_images/books2.jpeg")} />
        <img className="about-img img2" src={require("../static/about_images/daisy.webp")} />
        <img className="about-img img3" src={require("../static/about_images/cosy4.jpeg")} />
        <img className="about-img img4" src={require("../static/about_images/travel.jpeg")} />
        <img className="about-img img5" src={require("../static/about_images/coding.jpeg")} />
        <img className="about-img img6" src={require("../static/about_images/sun3.jpeg")} />
      </div>
    </div> 
    </div>
  );
}
 
export default About;