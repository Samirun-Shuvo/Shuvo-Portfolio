"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import Link from "next/link";

const TAB_DATA = [
  {
    title: "Experiences",
    id: "experiences",
    content: (
      <ul className="list-disc pl-2">
        <li>
          May-2022 to Present
          <ul>
            <li>
              <Link href="https://excelitai.com">
                <strong className="text-[gray]">Excel IT AI Ltd.</strong>
              </Link>
            </li>
            <li>Software Engnineer</li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>
          <b>Languages :</b> JavaScript (ES6+), HTML5, CSS3
        </li>
        <li>
          <b>Frameworks/Libraries :</b> React.js, Next.js, Node.js, Express.js
        </li>
        <li>
          <b>State Management :</b> Redux
        </li>
        <li>
          <b>Styling Tools :</b> Tailwind CSS, Bootstrap
        </li>
        <li>
          <b>Databases :</b> MongoDB, MySQL
        </li>
        <li>
          <b>Testing & Debugging :</b> Jest, Postman
        </li>
        <li>
          <b>Version Control :</b> Git, GitHub, GitLab
        </li>
        <li>
          <b>Other Skills:</b> REST APIs, Firebase, JWT Authentication, npm,
          Postman, cPanel, AWS, and various other useful libraries and tools.
        </li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>
          BSc in Computer Science and Engineering
          <ul>
            <li>
              <Link href="https://daffodilvarsity.edu.bd">
                <strong className="text-[gray]">
                  Daffodil International University | DIU
                </strong>
              </Link>
            </li>
            {/* <li>CGPA:3.06</li> */}
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Training",
    id: "training",
    content: (
      <ul className="list-disc pl-2">
        <li>
          Web Design And Development
          <ul>
            <li>
              <Link href="https://www.programming-hero.com">
                <strong className="text-[gray]">Programing Hero</strong>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Web Application
          <ul>
            <li>
              <Link href="https://www.ussoftwareltd.com">
                <strong className="text-[gray]">Us software limited</strong>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Mobile Application Development
          <ul>
            <li>
              <Link href="https://basis.org.bd">
                <strong className="text-[gray]">
                  BASIS Institute of Technology & Management (BITM)
                </strong>
              </Link>
            </li>
          </ul>
        </li>
        <li>
          Database management
          <ul>
            <li>
              <Link href="https://www.facebook.com/ntc.tangail/">
                <strong className="text-[gray]">
                  National Traning Centre (NTC)
                </strong>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    ),
  },
  {
    title: "Language",
    id: "language",
    content: (
      <ul className="list-disc pl-2">
        <li>Bengali (Native) </li>
        <li>English (Fluent) </li>
        <li>Hindi (Intermediate) </li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("experiences");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 overflow-hidden">
        <Image
          src="/images/about-image.png"
          className="opacity-90"
          width={500}
          height={500}
          alt="about-image"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a front-end web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Next, Redux, Node.js, Express,
            MongoDB, HTML, CSS, Git, Other Tools and Packages. I am a quick
            learner and I am always looking to expand my knowledge and skill
            set. I am a team player and I am excited to work with others to
            create amazing applications.
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton
              selectTab={() => handleTabChange("experiences")}
              active={tab === "experiences"}
            >
              {" "}
              Experiences{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("training")}
              active={tab === "training"}
            >
              {" "}
              Training{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("language")}
              active={tab === "language"}
            >
              {" "}
              Language{" "}
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
