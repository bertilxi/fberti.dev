import { mdiEmail, mdiGithubBox, mdiLinkedinBox } from "@mdi/js";
import React from "react";
import Experience from "../components/Experience";
import Icon from "../components/Icon";
import Section from "../components/Section";
import SkillSet from "../components/SkillSet";

const Resume: React.FC = () => {
  return (
    <div>
      <Section>
        <h3 className="text-center text-5xl pb-4">Fernando Berti</h3>
        <div className="justify-center text-gray-700 flex flex-wrap text-lg">
          <a
            href="mailto:bertilxi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex hover:text-gray-900"
          >
            <Icon src={mdiEmail} title="Email" />
            bertilxi@gmail.com
          </a>
          <span className="px-2" />
          <a
            href="https://github.com/bertilxi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex hover:text-gray-900"
          >
            <Icon src={mdiGithubBox} title="Github" />
            bertilxi
          </a>
          <span className="px-2" />
          <a
            href="https://www.linkedin.com/in/fernando-berti-81717b37"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex hover:text-gray-900"
          >
            <Icon src={mdiLinkedinBox} title="LinkedIn" />
            Fernando Berti
          </a>
        </div>
      </Section>

      <Section title="Profile">
        <p className="text-justify">
          Fernando is a flexible, pragmatic and proactive software engineer and
          team player. He thinks the most important part of development process
          is deliver quality. Challenging environments and new technologies are
          his strength. Always striving for simplest solutions for a full
          featured and smooth user experience.
        </p>
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
            "Bash"
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
            "Jenkins"
          ]}
        />
      </Section>

      <Section title="Experience">
        <Experience
          name="Scratchpay"
          href="https://scratchpay.com/"
          from="2019/09/23"
          to="2019/12/31"
          position="Fullstack Engineer"
          technologies="Javascript, Aurelia, Node, ActionHero, Knex, PHP, Laravel, MySQL."
        />

        <Experience
          name="Skybox"
          href="https://skybox.vividseats.com/"
          from="2018/06/01"
          to="2019/09/23"
          position="Frontend Engineer"
          technologies="Javascript, Typescript, AngularJS, React, Webpack,
            Bootstrap, MySQL, Java, MyBatis, Jersey."
        />

        <Experience
          name="Folder IT"
          href="https://folderit.net/"
          from="2016/11/01"
          to="2018/06/01"
          position="Full Stack Developer"
          technologies="Javascript, Typescript, Angular, Vue, Webpack,
            Bootstrap, Bulma, MySQL, Postgres Java, SpringBoot, Hibernate."
        />
      </Section>
    </div>
  );
};

export default Resume;
