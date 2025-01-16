AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Technical Specialist | Software Engineer",
    cardImage: "assets/images/experience-page/Umbraco.jpg",
    place: "Umbraco A/S",
    time: "(May 2024 – Current)",
    desp: "<li>Developed and optimized file upload, media management, and content delivery workflows for Umbraco CMS using ASP.NET Core, C#, and Content Delivery API, resulting in a 30% improvement in content management efficiency.</li><li>Designed and implemented GraphQL APIs and reusable web components in Umbraco, streamlining dynamic content delivery and optimizing media performance with Cloudflare, resulting in a 20% faster load time and enhanced user experience on high-traffic sites.</li>",
  },
  {
    title: "Graduate Teaching Assistant",
    cardImage: "assets/images/experience-page/TA.jpg",
    place: "University of North Carolina at Charlotte",
    time: "(Jan 2024 - May 2024)",
    desp: "<li>Assisted in teaching ITCS 6114 (Algorithm & Data Structures), grading assignments, and leading study sessions.</li><li>Guided students in Java-based projects, focusing on algorithm optimization and data structure implementation.</li><li>Provided individualized support, improving student comprehension of complex topics like dynamic programming and graph theory.</li> ",
  },
  {
    title: "Software Developer",
    cardImage: "assets/images/experience-page/Hexagon.jpg",
    place: "Hexagon CCI Pvt. Ltd.",
    time: "(Aug 2021 – July 2023)",
    desp: "<li>On Call Dispatch Development Team: Fixed 30-50 percent of bugs on both the front-end and back-end as a member of the On Call Dispatch development team, using tools like Eclipse and NodeJs</li><li>Front-end Development: Developed the front-end of applications using JavaScript and React JS, resulting in a 20 percent improvement in reload time and a seamless, responsive user experience.</li><li>Back-end Development: Contributed to back-end development by setting up servers, creating APIs, integrating databases, solving 6-7 bugs a month, and improving the organization’s agile processes.</li><li>Technical Stack: Used JavaScript, React JS, and CSS for front-end development, and PowerShell for automation tasks, improving 7-10 features in the project.</li>",
  },
  {
    title: "Associate Software Engineer",
    cardImage: "assets/images/experience-page/Afluence.jpg",
    place: "Affluence Infosystems",
    time: "(Jan 2020 - Jun 2021)",
    desp: "<li>Developed and optimized API layers using Java, SpringBoot, and GraphQL, resulting in a 30% improvement in system performance and 20% higher data accuracy through schema models for ElasticSearch and validation tools for Oracle and Postgres databases.</li><li>Enhanced observability by adding loggers, building Splunk dashboards, and utilizing Kafka and Podman for microservices, which reduced debugging time by 40%. Improved code coverage by 35% with the integration testing framework.</li><li>Built Kafka producer/consumer libraries, reducing microservice onboarding time by 50%.</li>"
  },
  {
    title: "Software Engineering Intern",
    cardImage: "assets/images/experience-page/Afluence.jpg",
    place: "Affluence Infosystems",
    time: "(Dec 2018 - Dec 2019)",
    desp: "<li>Assisted in developing API endpoints using SpringBoot, contributing to backend development efforts and improving response times by 15%.</li><li>Gained experience in database management by supporting the creation of validation tools for Oracle databases, reducing error rates by 10%.</li><li>Collaborated with the team to troubleshoot and debug microservices, improving performance and functionality by 25%.</li>"
  }

];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

// const volunteership = document.querySelector(".volunteership");
// const volunteershipcards = [
//   {
//     title: "GirlScript Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/1.jpg",
//     description:
//       "Responsible for handling the projects GirlScript App and GirlScript Website Boilerplate.",
//   },
//   {
//     title: "StudentCode-in 2020",
//     cardImage: "assets/images/experience-page/2.jpg",
//     description:
//       "Responsible for handling open source contributions for the project Awesome Developer Portfolio.",
//   },
//   {
//     title: "PClub Summer Of Code 2020",
//     cardImage: "assets/images/experience-page/3.jpg",
//     description:
//       "Mentoring for the projects Deep Pixel, AutoVaidya, Just Resume and Doc2pen.",
//   },
//   {
//     title: "Hakin-Codes",
//     cardImage: "assets/images/experience-page/4.jpg",
//     description:
//       "Mentoring for the open source projects Deeppixel, Awesome Developer Portfolios and Doc2Pen.",
//   },
// ];

// const showCards = () => {
//   let output = "";
//   volunteershipcards.forEach(
//     ({ title, cardImage, description }) =>
//       (output += `        
//       <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
//       <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
//       <div class="content">
//           <h2 class="volunteerTitle">${title}</h2><br>
//           <p class="copy">${description}</p></div>
      
//       </div>
//       `)
//   );
//   volunteership.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

// const hackathonsection = document.querySelector(".hackathon-section");
// const mentor = [
//   {
//     title: "The Uplift Project",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/uplift.png",
//     desp: "I would be responsible for guiding 100s of participants across the globe in their first steps towards Applied Data Science and building end-to-end machine learning projects.",
//     href: "https://uplift.girlscript.tech/",
//   },
//   {
//     title: "ULHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/ulhacks.png",
//     desp: "ULHacks is a 36 hour long hackathon organized with an aim to enable students to create a project which empowers learning.",
//     href: "https://ulhacks.com/",
//   },
//   {
//     title: "WaffleHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/wafflehacks.png",
//     desp: "WaffleHacks 2021 is an upcoming 48-hour student-organized hackathon with an aim to bring technical solutions to local communities and small businesses.",
//     href: "https://wafflehacks.org/",
//   },
//   {
//     title: "Elevate Tech",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/elevate.png",
//     desp: "Elevate Hacks is an upcoming all-female virtual hackathon coming from AUGUST 14th to 15th.",
//     href: "https://elevatetech.codes/",
//   },
//   {
//     title: "PitchTeen",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/pitchteen.png",
//     desp: "PitchTeen 2.0 was a tech startup competition for female and non-binary communities in high school and college from all over the world with an aim to create a safe and encouraging place for women to help them explore tech and business fields.",
//     href: "https://www.linkedin.com/company/pitchteen/about/",
//   },
//   {
//     title: "Hack-A-Solution",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/hackasolution.png",
//     desp: "Hack-a-Solution 2021 is a 24 hour long hackathon organized by Frisco students to raise awareness of world issues through technology.",
//     href: "https://hackasolution.devpost.com/",
//   },
//   {
//     title: "UniGlobe Hacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/uniglobe.png",
//     desp: "UniGlobe Hacks 2.0 is an upcoming 4-day long hackathon run by high school students held during 28-31 July 2021.",
//     href: "https://uniglobe-hacks.devpost.com/",
//   },
//   {
//     title: "AtlasHacks",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/atlas.png",
//     desp: "AtlasHacks II is a 3-day virtual hackathon that aims to foster creativity within hackers all around the world.",
//     href: "https://atlashacks2.devpost.com/",
//   },
//   {
//     title: "NeoHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/neo.png",
//     desp: "NeoHacks is an upcoming 48-hour hackathon taking place July 23-25, 2021 where hundreds of students from around the world will come together virtually to learn new skills, meet new friends, and build awesome projects. We provide beginner-friendly workshops, mentorship, fun games, and more.",
//     href: "https://neohacks.org/",
//   },
//   {
//     title: "Mission Inspired",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/mission.png",
//     desp: "InspireEd Hacks is a nationwide initiative organized by the student-for-student nonprofit, Mission InspirEd, challenging students ages 10-18 to synthesize their creativity and coding experience into a product beneficial to the educational community.",
//     href: "https://www.missioninspired.org/hackathon",
//   },
//   {
//     title: "Hack3",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/hack3.png",
//     desp: "Hack3 2021 is an upcoming global online hackathon that aims to enable high school students to learn computer science, with a broader message of (everyone can code) targeting underrepresented demographics to improve diversity and inclusion of individuals in the computer technology space.",
//     href: "https://hack3.co/",
//   },
//   {
//     title: "JITHack",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/jithack.png",
//     desp: "JITHack is an upcoming virtual design and development hackathon organized by the students of Jyothy Institute of Technology, Bengaluru on June 26, 2021, where participants have 24 hours to build something incredible.",
//     href: "https://jithack.netlify.app/",
//   },
//   {
//     title: "Recess Hacks",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/recess.png",
//     desp: "Recess Hacks is an upcoming hackathon for high school students in the Greater Toronto Area that strives to encourage innovation among high school students and get involved in technology.",
//     href: "https://recesshacks.com/",
//   },
//   {
//     title: "Citro Tech",
//     subtitle: "Mentor",
//     image: "assets/images/experience-page/citro.png",
//     desp: "Citro Hacks 2021 is an upcoming all-inclusive online hackathon organized by Citro Tech, a student led organization dedicated to empowering minorities in the tech field</li>",
//     href: "https://citro.tech/",
//   },
//   {
//     title: "NHacks",
//     subtitle: "Judge",
//     image: "assets/images/experience-page/nhacks.png",
//     desp: "NHacks VI was a hackathon that aimed to encourage students everywhere to develop skills in computer science by creating tangible products that they're proud of. It initially started as Michigan's largest high school hackathon.",
//     href: "https://nhacks-vi.devpost.com/",
//   },
// ];

// const showCards3 = () => {
//   let output = "";
//   mentor.forEach(
//     ({ title, image, subtitle, desp, href }) =>
//       (output += `  
//       <div class="blog-slider__item swiper-slide">
//         <div class="blog-slider__img">
//             <img src="${image}" alt="">
//         </div>
//         <div class="blog-slider__content">
//           <div class="blog-slider__title">${title}</div>
//           <span class="blog-slider__code">${subtitle}</span>
//           <div class="blog-slider__text">${desp}</div>
//           <a href="${href}" class="blog-slider__button">Read More</a>   
//         </div>
//       </div>
//       `)
//   );
//   hackathonsection.innerHTML = output;
// };
// document.addEventListener("DOMContentLoaded", showCards3);
