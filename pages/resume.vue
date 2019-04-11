<template>
  <div>
    <a class="float-right btn btn-primary text-bold" href="/resume.pdf"
      >Get PDF</a
    >
    <div id="resume" class="resume">
      <Section title="Resume">
        <h3 class="text-bold text-primary">Fernando Berti</h3>
      </Section>

      <Section title="Contact">
        <Entry label="Tel" href="tel:+5493425787183" value="54 9 342 5787183" />
        <Entry
          label="Email"
          href="mailto:bertilxi@gmail.com"
          value="bertilxi@gmail.com"
        />
        <Entry label="Github" value="https://github.com/bertilxi" />
        <Entry
          label="LinkedIn"
          value="https://www.linkedin.com/in/fernando-ivan-berti-81717b37"
        />
      </Section>

      <Section title="Profile">
        I am a software developer. I am willing to learn and improve the quality
        work that I do. I am flexible, pragmatic and a fast learner. I think the
        most important part of development is deliver added value and high
        quality solutions to the client. I enjoy the most the design and the
        management of projects. I like to work in a challenging environment and
        to learn new technologies. I have worked in different projects, with
        different technologies, frameworks and languages. So I have learned to
        adapt quickly. I like to be proactive and I enjoy leading and working as
        part of a team.
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
            'Java',
            'Kotlin',
            'Android',
            'JavaScript',
            'Typescript',
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
            'Intelli J',
            'Visual Studio Code',
            'Git',
            'Maven',
            'Gradle',
            'Jira',
            'Trello',
            'Jenkins',
            'Docker'
          ]"
        />
      </Section>

      <Section title="Experience">
        <Experience
          name="Skybox"
          location="Chicago, Illinois"
          from="2018/06/01"
          position="Frontend Engineer"
          description="SkyBox from Vivid Seats is a cloud-based ticket resale platform, designed to be the most convenient and effective way to increase sales volume, profit margins, and automate your entire business. Built on the cloud, SkyBox is compatible on any device, providing you the freedom to manage your business from the office or on the beach. Most importantly, SkyBox continuously evolves with the ticket industry to deliver the features you need."
          roles
          technologies="Javascript, Typescript AngularJS, React, Webpack, Bootstrap, MySQL, Java, MyBatis, Jersey"
          team="5 developers, 1 PM, 2 QA, 1 Team Leader, 1 Designer"
        />
        <Experience
          name="Folder IT"
          location="Santa Fe, Argentina"
          from="2016/11/01"
          to="2018/06/01"
          position="Full Stack Developer"
          description="Folder IT is an offshore software services company."
          roles
          technologies="..."
          team
        />
      </Section>
    </div>
  </div>
</template>
<script>
import Entry from "@/components/resume/Entry.vue";
import Header from "@/components/resume/Header.vue";
import Section from "@/components/resume/Section.vue";
import Education from "@/components/resume/Education.vue";
import SkillSet from "@/components/resume/SkillSet.vue";
import Experience from "@/components/resume/Experience.vue";

export default {
  components: {
    Entry,
    Header,
    Section,
    Education,
    SkillSet,
    Experience
  }
};
</script>
