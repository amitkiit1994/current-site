import logo from '../images/logo.jpeg';
import fynd from '../images/fynd.jpg'
import microsoft from '../images/microsoft.webp'
import jio from '../images/jiologo.png'
import sas from '../images/saslogo.png'
import infosys from '../images/infosyslogo.png'

const experiences = [
    {
      id: 1,
      title: "Head of Engineering",
      company: "RATL.ai",
      duration: "January 2024 - Present",
      description: `In the dynamic world of software development, ensuring reliability and efficiency is paramount. 
      RATL.ai revolutionizes your development process by integrating intelligent automation, comprehensive testing, and continuous monitoring. 
      Our platform ensures that your software meets and exceeds industry standards for performance, security, and user satisfaction.`,
      image: logo
    },
    {
      id: 2,
      title: "Engineering Lead",
      company: "Fynd (Shopsense Retail Technologies Ltd.)",
      duration: "January 2024 - Present",
      description: `I lead the engineering productivity and reliability for e-commerce sales channels, including Jiomart, Tira, Jiomart Partners, Swadesh, Azorte, Gap, and Ajio. I architected and built Ratl, a Generative AI-powered test lab solution using technologies like Redis Search, Text Da Vinci Model, and OpenAI Engine. Rattle automates functional and load testing with tools like Rest Assured, Spring Boot, TestNG, Playwright, and Appium, integrated with platforms such as Headspin, BrowserStack, LambdaTest, and Applitools. The platform supports containerized test orchestration, visualizes reports through Slack, Report Portal, Grafana, and Geckoboard, and includes load testing powered by Gatling. Additionally, I developed the Jio Commerce Device Lab for remote testing on real devices and created Ratl CoPilot, a GPT-powered productivity tool that assists in test case generation, automation script creation, pipeline building, and enhancing release decision-making.`,
      image: fynd
    },
    {
      id: 3,
      title: "Software Engineer",
      company: "Microsoft",
      duration: "June 2021 - January 2022",
      description: `As an integral part of a team developing a cutting-edge direct-to-consumer platform, I am dedicated to delivering innovative fan engagement experiences and enhanced streaming capabilities, leveraging the robust power of Microsoft Azure and its AI capabilities. My core responsibility is to ensure the highest quality of the application by automating and enhancing frameworks for seamless Azure PAAS integrations, including Cosmos DB, Event Hubs, Event Grid, Service Bus, Azure Data Explorer (ADX), Function Apps, and Azure Web Apps. I am architecting an advanced in-house test automation framework that not only supports the programmatic execution of these integrations but also ensures efficient, reliable, and scalable testing processes. This framework is designed to facilitate comprehensive test coverage, optimize performance, and enhance the overall reliability of our platform, thereby ensuring a superior user experience.`,
      image: microsoft
    },
    {
      id: 4,
      title: "Software Development Engineer",
      company: "Jio",
      duration: "Feb 2021 - June 2021",
      description: `As a crucial member of the initial Quality Assurance team for the JioMart e-commerce application, I played a key role in developing bots using Spring Boot and HTTP client to automate APIs for end-to-end B2C order processing, aligning with the Software Testing as a Service (STAAS) model. I integrated this framework with MySQL for storing test data, InfluxDB for custom metrics, and Grafana for visualizing incoming order metrics. Additionally, I built an automation framework with Gatling and Maven to simulate load on high-traffic endpoints, ensuring robust load testing. I containerized the project using Docker, enabling seamless deployment and testing across all servers. Furthermore, I created and set up service virtualization using the Specmatic tool to mock external API responses, and containerized all test automation projects for consistent deployment across various environments.`,
      image: jio
    },
    {
      id: 5,
      title: "Senior Software Engineer",
      company: "SAS",
      duration: "May 2019 - Feb 2021",
      description: `I was responsible for testing various aspects of statistical calculations, data seeding, and the Grid and Visual Analytics interface from a functional perspective. This included data validations through database testing and backend validation for API requests and responses. I scrutinized logs for every microservice and pod in a container-orchestrated system and ensured the maintenance and RPM updates of microservices to maintain a CI/CD approach using Jenkins or the Linux terminal. Additionally, I created and administered Kubernetes clusters, troubleshooting pods, deployments, services, persistent volumes, and more. I wrote automation codes for both API (Groovy) and UI (Selenium) to support the CI/CD DevOps model, maintained clean BVT and sanity API automation reports, and regularly updated code against test case failures. I was solely responsible for the classic product version release, ensuring customer-reported defect fixes and thorough regression testing. Managing the UI automation team, I handled project planning through JIRA, created stories and test cases, validated code from a functional perspective, and interacted regularly with product management and stakeholders. Furthermore, I conducted performance testing, prepared comparison insight reports, and documented test cases and reports to ensure a comprehensive and agile testing approach.`,
      image: sas,
    },
    {
      id: 6,
      title: "Software Engineer",
      company: "Infosys",
      duration: "May 2017 - May 2019",
      description: `Starting my career with Infosys in the Mysuru Area, India, I received professional training in various fundamental technologies including Python, RDBMS (Oracle and MySQL), Data Structures, Core Java, JavaScript, HTML5, CSS, Spring Boot, Hibernate, and Servlets. Additionally, I gained expertise in automation testing tools such as Selenium, UFT, and ALM-QC. In my role as a Software Engineer from January 2017 to April 2017, I reviewed business requirements, prepared test plans and scripts, and identified and reported defects through smoke testing, continuous regression testing, and performance testing. I was responsible for migrating projects into Application Lifecycle Management (ALM) and developed a data-driven automation framework using the Page Object Design pattern. I identified automation scenarios from test cases and developed web automation scripts using Selenium WebDriver and TestNG. Furthermore, I integrated TestNG with Maven to create a robust framework, implementing the Listeners interface, Page Object pattern, Log4j, and Excel Data-Driven testing.`,
      image: infosys
    },
  ];
export default experiences;