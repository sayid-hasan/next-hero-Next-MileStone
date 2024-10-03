import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div>
      this is about page
      <ul>
        <li>
          <Link href={"/about/history"}>History</Link>
        </li>
        <li>
          <Link href={"/about/mission"}>Mission</Link>
        </li>
      </ul>
    </div>
  );
};

export default About;
