import { mdiEmail, mdiGithub, mdiLinkedin } from "@mdi/js";
import React from "react";
import Experience from "../components/Experience";
import Icon from "../components/Icon";
import Section from "../components/Section";
import SkillSet from "../components/SkillSet";

const Resume: React.FC = () => {
  return (
    <div>
      <Section>
        <h3 className="text-center pb-4 relative">
          <span className="text-5xl">Fernando Berti</span>{" "}
          <a
            id="print-button"
            className="absolute top-0 right-0 bg-blue-500 text-gray-200 hover:bg-blue-600 font-semibold py-2 px-4 rounded inline-flex items-center hidden md:block"
            href="/resume.pdf"
          >
            <span>Download</span>
          </a>
        </h3>
        <div className="justify-center flex flex-wrap text-lg">
          <a
            href="mailto:bertilxi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex hover:text-blue-500 p-1"
          >
            <Icon src={mdiEmail} title="Email" />
            bertilxi@gmail.com
          </a>
          <span className="px-2" />
          <a
            href="https://github.com/bertilxi"
            target="_blank"
            rel="noopener noreferrer"
            className="flex hover:text-blue-500 p-1"
          >
            <Icon src={mdiGithub} title="Github" />
            bertilxi
          </a>
          <span className="px-2" />
          <a
            href="https://www.linkedin.com/in/fernando-berti-81717b37"
            target="_blank"
            rel="noopener noreferrer"
            className="flex hover:text-blue-500 p-1"
          >
            <Icon src={mdiLinkedin} title="LinkedIn" />
            Fernando Berti
          </a>
        </div>
      </Section>

      <Section title="Skills">
        <SkillSet
          title="Programming"
          skills={[
            "Typescript",
            "JavaScript",
            "Java",
            "Kotlin",
            "Android",
            "Bash",
          ]}
        />
        <span className="mb-4" />
        <SkillSet
          title="Databases"
          skills={["PostgreSQL", "MySQL", "SQLite", "MongoDB"]}
        />
        <span className="mb-4" />
        <SkillSet
          title="Tools"
          skills={[
            "VS Code",
            "Git",
            "Docker",
            "Intelli J",
            "Maven",
            "Gradle",
            "Jira",
            "Jenkins",
          ]}
        />
      </Section>

      <Section title="Experience">
        <Experience
          name="National Home Rentals"
          href="https://www.nationalhomerentals.com/"
          from="2020/02/10"
          to=""
          position="Frontend Developer"
          technologies="Typescript, React."
        />

        <Experience
          name="Scratchpay"
          href="https://scratchpay.com/"
          from="2019/09/23"
          to="2019/12/31"
          position="Fullstack Developer"
          technologies="Javascript, Aurelia, Node, ActionHero, Knex, PHP, Laravel, MySQL."
        />

        <Experience
          name="Skybox"
          href="https://skybox.vividseats.com/"
          from="2018/06/01"
          to="2019/09/23"
          position="Frontend Developer"
          technologies="Javascript, Typescript, AngularJS, React, Webpack, Bootstrap, MySQL, Java, MyBatis, Jersey."
        />

        <Experience
          name="Folder IT"
          href="https://folderit.net/"
          from="2016/11/01"
          to="2018/06/01"
          position="Fullstack Developer"
          technologies="Javascript, Typescript, Angular, Vue, Webpack, Bootstrap, Bulma, MySQL, Postgres Java, SpringBoot, Hibernate."
        />
      </Section>
    </div>
  );
};

export default Resume;
