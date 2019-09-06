<script>
  import Section from "../components/Section.svelte";
  import Entry from "../components/Entry.svelte";
  import Education from "../components/Education.svelte";
  import SkillSet from "../components/SkillSet.svelte";
  import Experience from "../components/Experience.svelte";
  import Icon from "../components/Icon.svelte";
  import { mdiEmail, mdiGithubBox, mdiLinkedinBox } from "@mdi/js";

  const printPdf = () => {
    window.print();
  };
</script>

<svelte:head>
  <title>Fernando Berti | Resume</title>
</svelte:head>

<div>
  <div class="relative">
    <Section>
      <button
        type="button"
        class="print-button absolute top-0 right-0 mr-4 btn btn-blue"
        on:click={printPdf}>
        Print PDF
      </button>
    </Section>
    <Section>
      <h3 class="text-center text-3xl pb-4">Fernando Berti</h3>
      <div class="justify-center text-gray-600 flex flex-wrap mb-4 text-lg">
        <a
          href="mailto:bertilxi@gmail.com"
          target="_blank"
          class="inline-flex hover:text-gray-800">
          <Icon src={mdiEmail} title="Email" />
          bertilxi@gmail.com
        </a>
        <span class="px-2">|</span>
        <a
          href="https://github.com/bertilxi"
          target="_blank"
          class="inline-flex hover:text-gray-800">
          <Icon src={mdiGithubBox} title="Github" />
          bertilxi
        </a>
        <span class="px-2">|</span>
        <a
          href="https://www.linkedin.com/in/fernando-berti-81717b37"
          target="_blank"
          class="inline-flex hover:text-gray-800">
          <Icon src={mdiLinkedinBox} title="LinkedIn" />
          Fernando Berti
        </a>
      </div>
    </Section>
    <div class="flex flex-wrap mb-16">
      <div class="w-full lg:w-1/3 lg:border-r-2 border-gray-600">
        <Section title="Education">
          <Education
            institute="Universidad Tecnológica Nacional"
            location="Santa Fe, Argentina"
            from="2013"
            to="2018"
            title="Information Systems Engineering" />
          <span class="mb-4" />
          <Education
            institute="Liceo Militar General Belgrano"
            location="Santa Fe, Argentina"
            from="2008"
            to="2012"
            title="Bachelor of Science" />
        </Section>

        <Section title="Skills">
          <SkillSet
            title="Programming"
            skills={['Typescript', 'JavaScript', 'Java', 'Kotlin', 'Android', 'Bash']} />
          <span class="mb-4" />
          <SkillSet
            title="Databases"
            skills={['PostgreSQL', 'MySQL', 'SQLite', 'MongoDB']} />
          <span class="mb-4" />
          <SkillSet
            title="Tools"
            skills={['VS Code', 'Git', 'Docker', 'Intelli J', 'Maven', 'Gradle', 'Jira', 'Jenkins']} />
        </Section>

        <Section title="Languages">
          <div class="flex-1 flex-col justify-start">
            <Entry label="Spanish" value="Native" />
            <Entry label="English" value="Fluid speaking and writing" />
          </div>
        </Section>
      </div>
      <div class="w-full lg:w-2/3">
        <Section title="Profile">
          Fernando is a flexible, pragmatic and proactive software engineer and
          team player.
          <br />
          He thinks the most important part of development process is deliver
          quality.
          <br />
          Challenging environments and new technologies are his strength.
          <br />
          Always striving for simplest solutions for a full featured and smooth
          user experience.
        </Section>
        <Section title="Experience">
          <Experience
            name="Skybox"
            location="Chicago, USA"
            from="2018/06/01"
            position="Frontend Engineer"
            technologies="Javascript, Typescript, AngularJS, React, Webpack,
            Bootstrap, MySQL, Java, MyBatis, Jersey."
            team="5 developers, 1 PM, 2 QA, 1 Team Leader, 1 Designer.">
            SkyBox from Vivid Seats is a cloud-based ticket resale platform.
            <div class="font-bold mt-4">Duties:</div>
            <ul class="list-disc pl-4">
              <li>Code review.</li>
              <li>Benchmark app performance.</li>
              <li>Monitor error reports (using Sentry).</li>
              <li>Actively improve code quality (I refactor all I can).</li>
              <li>
                Build tools (I love to have the latest and fastest tools for the
                job).
              </li>
              <li>
                Keeping it up to date with the latest technologies and library
                versions.
              </li>
            </ul>
          </Experience>
          <Experience
            name="Folder IT"
            location="Santa Fe, Argentina"
            from="2016/11/01"
            to="2018/06/01"
            position="Full Stack Developer"
            technologies="Javascript, Typescript, Angular, Vue, Webpack,
            Bootstrap, Bulma, MySQL, Postgres Java, SpringBoot, Hibernate."
            team="The team sizes went from 3 people up to 20, depending on the
            project.">
            Folder IT is an offshore software services company that offers a
            variety of software development services.
            <br />
            I was involved in many projects in a short time lapse, mainly
            JavaScript, Typescript, Java and Angular. Here is where I found my
            vocation as a software developer.
          </Experience>
        </Section>
      </div>
    </div>
  </div>
</div>
