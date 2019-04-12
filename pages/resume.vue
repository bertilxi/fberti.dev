<template>
  <div>
    <a class="float-right btn btn-primary text-bold" href="/resume.pdf"
      >Get PDF</a
    >
    <div id="resume" class="resume">
      <Section>
        <h3 class="text-bold">Fernando Berti</h3>
      </Section>

      <Section title="Contact">
        <Entry
          label="Tel"
          href="tel:+5493425787183"
          value="+54 9 342 5787183"
        />
        <Entry
          label="Email"
          href="mailto:bertilxi@gmail.com"
          value="bertilxi@gmail.com"
        />
        <Entry
          label="Github"
          href="https://github.com/bertilxi"
          value="bertilxi"
        />
        <Entry
          label="LinkedIn"
          href="https://www.linkedin.com/in/fernando-ivan-berti-81717b37"
          value="fernando-ivan-berti"
        />
      </Section>

      <Section title="Profile">
        I am an UI engineer. I am flexible, pragmatic and a fast learner. I
        think the most important part of development is deliver added value and
        high quality solutions. I enjoy the most the design and the management
        of projects. I like to work in challenging environments and to learn new
        technologies. I have worked in different projects, with different
        technologies, frameworks and languages. I am proactive and I enjoy
        leading and working as part of a team.
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
          title="Bachelor of Science"
        />
      </Section>

      <Section title="Languages">
        <Entry label="Spanish" value="Native" />
        <Entry label="English" value="Fluid speaking and writing" />
      </Section>

      <Section title="Skills">
        <SkillSet
          title="Programming"
          :skills="[
            'Typescript',
            'JavaScript',
            'Java',
            'Kotlin',
            'Android',
            'Bash'
          ]"
        />
        <SkillSet
          title="Databases"
          :skills="['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB']"
        />
        <SkillSet
          title="Tools"
          :skills="[
            'Visual Studio Code',
            'Git',
            'Docker',
            'Intelli J',
            'Maven',
            'Gradle',
            'Jira',
            'Trello',
            'Jenkins'
          ]"
        />
      </Section>

      <Section title="Experience">
        <Experience
          name="Skybox"
          location="Chicago, USA"
          from="2018/06/01"
          position="Frontend Engineer"
          roles
          technologies="Javascript, Typescript, AngularJS, React, Webpack, Bootstrap, MySQL, Java, MyBatis, Jersey."
          team="5 developers, 1 PM, 2 QA, 1 Team Leader, 1 Designer."
        >
          SkyBox from Vivid Seats is a cloud-based ticket resale platform,
          designed to be the most convenient and effective way to increase sales
          volume, profit margins, and automate your entire business.
          <br />
          My tasks consist in reviewing pull requests, benchmarking the app
          performance, I strive to deliver the less code possible for a full
          featured and interactive UI, and the smoothest user experience
          possible. Monitoring error reports (using Sentry) Actively improve
          code quality (I refactor all I can) and build tools (I love to have
          the latest and fastest tools for the job) keeping it up to date with
          the latest technologies and library versions.
        </Experience>
        <Experience
          name="Folder IT"
          location="Santa Fe, Argentina"
          from="2016/11/01"
          to="2018/06/01"
          position="Full Stack Developer"
          roles
          technologies="Javascript, Typescript, Angular, Vue, Webpack, Bootstrap, Bulma, MySQL, Postgres Java, SpringBoot, Hibernate."
          team="The team sizes went from 3 people up to 20, depending on the project."
        >
          Folder IT is an offshore software services company that offers a
          variety of software development services.
          <br />
          I was involved in many projects in a short time lapse, mainly
          JavaScript, Typescript, Java and Angular. Here is where i found my
          vocation as a frontend developer.
        </Experience>
      </Section>
    </div>
  </div>
</template>
<script>
import Entry from "@/components/resume/Entry.vue";
import Section from "@/components/resume/Section.vue";
import Education from "@/components/resume/Education.vue";
import SkillSet from "@/components/resume/SkillSet.vue";
import Experience from "@/components/resume/Experience.vue";

export default {
  components: {
    Entry,
    Section,
    Education,
    SkillSet,
    Experience
  }
};
</script>
