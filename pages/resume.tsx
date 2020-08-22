import { mdiEmail, mdiGithub, mdiLinkedin } from "@mdi/js";
import React from "react";
import Experience from "../components/Experience";
import Icon from "../components/Icon";
import Section from "../components/Section";
import SkillSet from "../components/SkillSet";
import Link from "../components/Link";
import Education from "../components/Education";

const Resume: React.FC = () => (
  <div>
    <Section>
      <div className="flex flex-wrap relative">
        <div className="w-full print:w-1/3 md:w-1/3 flex items-center justify-center">
          <img src="/images/profile.jpg" className="rounded-full w-56" />
        </div>
        <div className="w-full print:flex-1 md:flex-1 flex flex-col items-center justify-center">
          <div className="text-5xl">Fernando Berti</div>
          <div className="text-4xl mb-2">Software Developer</div>
          <div className="flex flex-wrap text-lg items-center justify-center">
            <a
              href="mailto:bertilxi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:text-indigo-500 p-1"
            >
              <Icon src={mdiEmail} title="Email" />
              bertilxi@gmail.com
            </a>
            <span className="px-2" />
            <a
              href="https://github.com/bertilxi"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:text-indigo-500 p-1"
            >
              <Icon src={mdiGithub} title="Github" />
              bertilxi
            </a>
            <span className="px-2" />
            <a
              href="https://www.linkedin.com/in/fernando-berti-81717b37"
              target="_blank"
              rel="noopener noreferrer"
              className="flex hover:text-indigo-500 p-1"
            >
              <Icon src={mdiLinkedin} title="LinkedIn" />
              Fernando Berti
            </a>
          </div>

          <a
            id="print-button"
            className="absolute top-0 right-0 bg-indigo-500 text-gray-200 hover:bg-indigo-600 font-semibold py-2 px-4 rounded-full inline-flex items-center block"
            href="/resume.pdf"
          >
            <span>Download</span>
          </a>
        </div>
      </div>
    </Section>

    <div className="flex flex-wrap">
      <div className="w-full print:w-1/3 md:w-1/3">
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

        <Section title="Education">
          <Education
            institute="Universidad Tecnológica Nacional"
            location="Santa Fe, Argentina"
            from="2013"
            to="2018"
            title="Information Systems Engineering"
          />

          <Education
            institute="Liceo Militar General Belgrano"
            location="Santa Fe, Argentina"
            from="2008"
            to="2012"
            title="Bachelor of Natural Sciences"
          />
        </Section>
      </div>

      <div className="w-full print:flex-1 md:flex-1">
        <Section title="Experience">
          <Experience
            name="National Home Rentals"
            href="https://www.nationalhomerentals.com/"
            from="2020/02/10"
            to=""
            position="Frontend Developer"
            technologies="Typescript, React."
          >
            <ul className="list">
              <li>
                Development of the Admin and Tenant UI for their new real state
                management platform.
              </li>
              <li>IOT integration for remote property management.</li>
            </ul>
          </Experience>

          <Experience
            name="Freelance crypto research"
            from="2020/01/07"
            to=""
            position="Developer and Data Analyst"
            technologies="Python, Node, React, web3 js, Graph protocol, Uniswap, Kyber, Balancer."
          >
            <ul className="list">
              <li>
                Contributed to{" "}
                <Link href="https://github.com/threelab/wini-recovery">
                  <a className="hover:font-semibold text-indigo-500">
                    Wini recovery
                  </a>
                </Link>
                .
              </li>
              <li>Developed stablecoins arbitrage bot.</li>
              <li>
                Participated in Loopring liquidity mining bot competition and
                Loopring pay gitcoin grant.
              </li>
              <li>
                Scripted Node js service to monitor Balancer protocol and send
                telegram notifications.
              </li>
              <li>
                Constantly researching and analyzing flash loan arbitrage
                opportunities.
              </li>
              <li>Currently learning solidity.</li>
            </ul>
          </Experience>

          <Experience
            name="Scratchpay"
            href="https://scratchpay.com/"
            from="2019/09/23"
            to="2019/12/31"
            position="Fullstack Developer"
            technologies="Javascript, Aurelia, Node, ActionHero, Knex, PHP, Laravel, MySQL."
          >
            <ul className="list">
              <li>
                Developed and maintained their dashboard and users platform for
                veterinary clinics.
              </li>
              <li>
                Implemented pdf generation service from web platform documents.
              </li>
            </ul>
          </Experience>

          <Experience
            name="Skybox"
            href="https://skybox.vividseats.com/"
            from="2018/06/01"
            to="2019/09/23"
            position="Frontend Developer"
            technologies="Javascript, Typescript, AngularJS, React, Webpack, Bootstrap, MySQL, Java, MyBatis, Jersey."
          >
            <ul className="list">
              <li>Developed and maintained their ticket resale platform.</li>
              <li>Optimized and improved client UI.</li>
            </ul>
          </Experience>

          <Experience
            name="Folder IT"
            href="https://folderit.net/"
            from="2016/11/01"
            to="2018/06/01"
            position="Fullstack Developer"
            technologies="Javascript, Typescript, Angular, Vue, Webpack, Bootstrap, Bulma, MySQL, Postgres Java, SpringBoot, Hibernate."
          >
            <ul className="list">
              <li>
                I was involved in many projects both with Frontend and Backend
                technologies for USA and Argentina clients mainly.
              </li>
              <li>
                Contributed in the making and maintenance of internal tools.
              </li>
            </ul>
          </Experience>
        </Section>
      </div>
    </div>
  </div>
);

export default Resume;
