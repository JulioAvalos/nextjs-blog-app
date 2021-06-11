import Image from "next/image";
import classes from "./hero.module.css";

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image
          src="/images/site/author.png"
          alt="An image showing the author"
          width={300}
          height={300}
        />
      </div>
      <h1>Hi, I'm Julio</h1>
      <p>
        I blog about web development - especially frontend and backend frameworks like
        Angular, React, Express, Spring Boot
      </p>
    </section>
  );
}

export default Hero;
