<script setup>
import { reactive } from 'vue';

const skills = reactive(['HTML', 'CSS/SASS', 'JAVASCRIPT', 'PostgreSQL', 'Git/GitHub', 'Node.js', 'Vue.js/Nuxt.js', 'Jest', 'REST API', 'Serverless API', 'ELECTRON', 'Webpack', 'AWS', 'DigitalOcean/Docker/Kubernetes', 'GraphQL'])
const skillsNow = reactive(['React.js/Next.js', 'Tailwind'])
const languages = reactive(['French (C2)', 'English (B1)'])
</script>

<template>
  <main>
    <div class="container-main">
      <div class="skills-experience">
        <div class="experience">
          <div class="title-experience">
            <h3>Professional experience</h3>
            <i class="fas fa-external-link-alt"></i>
          </div>
          <div class="experience-block">
            <h4>Full Stack Engineer - IT Digital Technology <br><small>(Jan 2023 - Apr 2023)</small></h4>
            <p>
              Throughout the 4 month mission, I was responsible for developing and delivering a high-quality web application.
              <ul class="listStyleLink">
                <li>Built a responsive and dynamic user interface using Nuxt.js</li>
                <li>Implemented Vuex store for state management</li>
                <li>Integrated with GraphQL API for data display and PostgreSQL</li>
                <li>Utilized AWS Lambda and API Gateway for serverless backend and improved API response time by 30%</li>
                <li>Integrated Jest.js with Continuous Integration (CI) tools CircleCI to automate the testing process and improve the development workflow.</li>
              </ul>
              I leveraged my expertise in frontend and backend development to design and implement scalable and efficient solutions that met business requirements.
            </p>
          </div>
          <div class="experience-block">
            <h4>Full Stack Engineer - Funding Invoice LTD <br><small>(Aug 2019 - Dec 2022)</small></h4>
            <p>
              As a Full-stack Developer with expertise in a range of technologies, including:
              <ul class="listStyleLink">
                <li>GraphQL</li>
                <li>Vue.js</li>
                <li>PostgreSQL</li>
                <li>JavaScript</li>
                <li>Electron</li>
                <li>Webpack</li>
              </ul>
              I have · Designed and implemented complex, scalable, and secure web applications · Developed unit tests for front-end components using to ensure code quality and prevent bugs · Focused on optimizing user experience and performance · Collaborated with cross-functional teams to translate business requirements into technical solutions · Stayed up-to-date with the latest technologies and trends to deliver innovative and impactful solutions
            </p>
          </div>
          <div class="experience-block">
            <h4>Junior Web Developer - House London Trip <br><small>(Jun 2018 - Jun 2019)</small></h4>
            <p>
              As a Junior Web Developer, I specialize in designing and implementing websites using HTML, CSS, and WordPress.
              With a solid understanding of front-end development, I create clean, responsive, and user-friendly interface.
            </p>
          </div>
          <div class="experience-block">
            <h4>Frontend Web Developer - TheTwoW LTD <br><small>(Apr 2017 - Jun 2018)</small></h4>
            <p>
              As a Frontend Web Developer, I specialized in creating dynamic, responsive, and user-friendly websites using HTML, CSS, JavaScript, jQuery and implementing intuitive and efficient user interfaces.
              I collaborated with a team of developers to create innovative solutions that made a positive impact on users.
            </p>
          </div>
        </div> 
        <div class="skills">
          <div class="title-skills">
            <h3>Skills</h3>
            <i class="fas fa-terminal"></i>
          </div>
          <div class="skills-block">
            <h4 style="margin: 0;">DEVELOPMENT</h4>
            <p>Language I use and some key points</p>
            <p>Vue: Experience building responsive and dynamic user interfaces using Vue.js framework. Familiarity with Vue.js components, Vuex, Vue Router, and Vue CLI. Ability to integrate Vue.js with other frontend libraries such as Bootstrap or Tailwind CSS.</p>
            <p>JavaScript: Proficiency in core JavaScript concepts and modern features like ES6 syntax, Promises, and Async/Await. Experience with frontend JavaScript frameworks like React, Vue.js or Next/Nuxt as well as backend frameworks like Node.js or Express.js.</p>
            <p>AWS: Experience deploying applications on AWS cloud services like EC2, S3, RDS, and Lambda. Familiarity with AWS CLI, IAM roles, and security best practices for cloud computing.</p>
            <p>Node: Proficiency in server-side JavaScript development with Node.js. Experience with creating RESTful APIs using Express.js or other Node.js frameworks. Familiarity with Node.js ecosystem tools like NPM, Yarn, or PM2.</p>
            <p>Webpack: Experience configuring Webpack for different environments, including production and development, and optimizing build performance through code splitting, caching, and minimizing bundle size. I am also proficient in integrating Webpack with other technologies such as Babel and ESLint for transpilation and code linting.</p>
            <p>Docker: Knowledge of containerization concepts and experience using Docker to deploy applications. Ability to write Dockerfiles and Docker Compose configurations for development and production environments.</p>
            <p>GraphQL: Familiarity with GraphQL schema design and implementation using Apollo Server or other GraphQL frameworks. Experience with optimizing GraphQL queries and mutations for performance.</p>
            <p>PostgreSQL: Experience designing and querying relational databases using PostgreSQL. Familiarity with PostgreSQL features like CSV data types, full-text search, and stored procedures. Ability to optimize database performance using indexing and query optimization techniques.</p>
            <p style="margin-top: 10px;">
              <small>List of all the languages: </small>
              <span
                class="list-of-skills cursor-pointer"
                v-for="(skill, indexSkill) in skills"
                :key="indexSkill"
              >
                {{ (indexSkill + 1) !== skills.length ? `${skill} | ` : `${skill}` }}
              </span>
            </p>
          </div>
          <div class="skills-block">
            <h4>LEARNING NOW</h4>
            <span
              class="list-of-skills cursor-pointer"
              v-for="(skillNow, indexSkillNow) in skillsNow"
              :key="indexSkillNow"
            >
              {{ (indexSkillNow + 1) !== skillsNow.length ? `${skillNow} | ` : `${skillNow}` }}
            </span>
          </div>
          <div class="skills-block">
            <h4>LANGUAGES</h4>
              <span
                class="list-of-skills cursor-pointer"
                v-for="(language, indexLanguage) in languages"
                :key="indexLanguage"
              >
                {{ (indexLanguage + 1) !== languages.length ? `${language} | ` : `${language}` }}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div class="studies-hobbies">
      <div class="studies-interest">
        <div class="studies-top">
          <h3>EDUCATIONS</h3>
          <i class="fas fa-graduation-cap"></i>
        </div>
        <div class="studies-skills">
          <ul>
            <li><span>2016 - 2017</span>Training 3WAcademy Web developer and integrator Lyon, France</li>
            <li><span>2013 - 2015</span>Faculty of computer science Nice, France</li>
            <li><span>2012 - 2013</span>Baccalaureate in Science and Technology of management, Calmette Nice, France</li>
          </ul>
        </div>
      </div>
      <div class="hobbies-interests">
        <div class="interests-top">
          <h3>INTERESTS AND HOBBIES</h3>
          <i class="fas fa-american-sign-language-interpreting"></i>
        </div>
        <p class="interests-top-p">I like to learn new technology like ‘Frameworks‘ and programming Python...</p>
        <div class="hobbies">
          <ul>
            <li><span>Sports</span>martial arts, swimming, football</li>
            <li><span>Passion</span>music, movies, pictures</li>
            <li><span>Other</span>new technologies, graphics, culture</li>
          </ul>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.listStyleLink {
  list-style: disc;
  margin: 10px 26px;
}
.cursor-pointer {
  cursor: pointer;
}
</style>
