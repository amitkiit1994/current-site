"use client";
import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Timeline } from "@/components/ui/timeline";

export function JourneyTimeline() {
  const data = [
    {
      title: "Cofounder and Head of Engineering",
      image: "/ratl_logo.png", // Replace with your actual image path
      companyLink: "https://ratl.ai",
      content: (
        <div>
          <p className="text-purple text-xs md:text-sm font-normal mb-1">
            January 2024 - Present
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            In the dynamic world of software development, ensuring reliability
            and efficiency is paramount. RATL.ai revolutionizes your development
            process by integrating intelligent automation, comprehensive testing,
            and continuous monitoring. Our platform ensures that your software meets
            and exceeds industry standards for performance, security, and user satisfaction.
          </p>
          <Link href="https://ratl.ai" target="_blank" rel="noopener noreferrer">
            <Image
              src="/ratl-logo.png"
              alt="ratl.ai"
              width={600}
              height={350}
              className="rounded-lg shadow-lg mt-4 p-4"
            />
          </Link>
        </div>
      ),
    },
    {
      title: "Engineering Lead",
      image: "/fynd.png",
      companyLink: "https://fynd.com",
      content: (
        <div>
          <p className="text-purple text-xs md:text-sm font-normal mb-1">
            January 2024 - Present
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            I lead the engineering productivity and reliability for e-commerce sales channels, including Jiomart, Tira, Jiomart Partners, Swadesh, Azorte, Gap, and Ajio. I architected and built Ratl, a Generative AI-powered test lab solution using technologies like Redis Search, Text Da Vinci Model, and OpenAI Engine. Rattle automates functional and load testing with tools like Rest Assured, Spring Boot, TestNG, Playwright, and Appium, integrated with platforms such as Headspin, BrowserStack, LambdaTest, and Applitools. The platform supports containerized test orchestration, visualizes reports through Slack, Report Portal, Grafana, and Geckoboard, and includes load testing powered by Gatling. Additionally, I developed the Jio Commerce Device Lab for remote testing on real devices and created Ratl CoPilot, a GPT-powered productivity tool that assists in test case generation, automation script creation, pipeline building, and enhancing release decision-making.
          </p>
          <Link href="https://fynd.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/fynd.png"
              alt="Fynd.com"
              width={600}
              height={350}
              className="rounded-lg shadow-lg mt-4 p-4"
            />
          </Link>
        </div>
      ),
    },
    {
      title: "Software Engineer",
      image: "/microsoft.png",
      companyLink: "https://microsoft.com",
      content: (
        <div>
          <p className="text-purple text-xs md:text-sm font-normal mb-1">
            June 2021 - January 2022
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            As an integral part of a team developing a cutting-edge direct-to-consumer platform, I am dedicated to delivering innovative fan engagement experiences and enhanced streaming capabilities, leveraging the robust power of Microsoft Azure and its AI capabilities. My core responsibility is to ensure the highest quality of the application by automating and enhancing frameworks for seamless Azure PAAS integrations, including Cosmos DB, Event Hubs, Event Grid, Service Bus, Azure Data Explorer (ADX), Function Apps, and Azure Web Apps. I am architecting an advanced in-house test automation framework that not only supports the programmatic execution of these integrations but also ensures efficient, reliable, and scalable testing processes. This framework is designed to facilitate comprehensive test coverage, optimize performance, and enhance the overall reliability of our platform, thereby ensuring a superior user experience.
          </p>
          <Link href="https://microsoft.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/microsoft.png"
              alt="Microsoft Azure Architecture"
              width={600}
              height={350}
              className="rounded-lg shadow-lg mt-4 p-4"
            />
          </Link>
        </div>
      ),
    },
    {
      title: "Software Development Engineer",
      image: "/jio.png",
      companyLink: "https://www.jio.com",
      content: (
        <div>
          <p className="text-purple text-xs md:text-sm font-normal mb-1">
            Feb 2021 - June 2021
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            As a crucial member of the initial Quality Assurance team for the JioMart e-commerce application, I played a key role in developing bots using Spring Boot and HTTP client to automate APIs for end-to-end B2C order processing, aligning with the Software Testing as a Service (STAAS) model. I integrated this framework with MySQL for storing test data, InfluxDB for custom metrics, and Grafana for visualizing incoming order metrics. Additionally, I built an automation framework with Gatling and Maven to simulate load on high-traffic endpoints, ensuring robust load testing. I containerized the project using Docker, enabling seamless deployment and testing across all servers. Furthermore, I created and set up service virtualization using the Specmatic tool to mock external API responses, and containerized all test automation projects for consistent deployment across various environments.
          </p>
          <Link href="https://www.jio.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/jio.png"
              alt="jio.com"
              width={600}
              height={350}
              className="rounded-lg shadow-lg mt-4 p-4"
            />
          </Link>
        </div>
      ),
    },
    {
      title: "Senior Software Engineer",
      image: "/sas.png",
      companyLink: "https://sas.com",
      content: (
        <div>
          <p className="text-purple text-xs md:text-sm font-normal mb-1">
            May 2019 - Feb 2021
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            I was responsible for testing various aspects of statistical calculations, data seeding, and the Grid and Visual Analytics interface from a functional perspective. This included data validations through database testing and backend validation for API requests and responses. I scrutinized logs for every microservice and pod in a container-orchestrated system and ensured the maintenance and RPM updates of microservices to maintain a CI/CD approach using Jenkins or the Linux terminal. Additionally, I created and administered Kubernetes clusters, troubleshooting pods, deployments, services, persistent volumes, and more. I wrote automation codes for both API (Groovy) and UI (Selenium) to support the CI/CD DevOps model, maintained clean BVT and sanity API automation reports, and regularly updated code against test case failures. I was solely responsible for the classic product version release, ensuring customer-reported defect fixes and thorough regression testing. Managing the UI automation team, I handled project planning through JIRA, created stories and test cases, validated code from a functional perspective, and interacted regularly with product management and stakeholders. Furthermore, I conducted performance testing, prepared comparison insight reports, and documented test cases and reports to ensure a comprehensive and agile testing approach.
          </p>
          <Link href="https://sas.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/sas.png"
              alt="sas.com"
              width={600}
              height={350}
              className="rounded-lg shadow-lg mt-4 p-4"
            />
          </Link>
        </div>
      ),
    },
    {
      title: "Software Engineer",
      image: "/infosys.png",
      companyLink: "https://infosys.com",
      content: (
        <div>
          <p className="text-purple text-xs md:text-sm font-normal mb-1">
            May 2017 - May 2019
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-xs md:text-sm font-normal mb-4">
            Starting my career with Infosys in the Mysuru Area, India, I received professional training in various fundamental technologies including Python, RDBMS (Oracle and MySQL), Data Structures, Core Java, JavaScript, HTML5, CSS, Spring Boot, Hibernate, and Servlets. Additionally, I gained expertise in automation testing tools such as Selenium, UFT, and ALM-QC. In my role as a Software Engineer from January 2017 to April 2017, I reviewed business requirements, prepared test plans and scripts, and identified and reported defects through smoke testing, continuous regression testing, and performance testing. I was responsible for migrating projects into Application Lifecycle Management (ALM) and developed a data-driven automation framework using the Page Object Design pattern. I identified automation scenarios from test cases and developed web automation scripts using Selenium WebDriver and TestNG. Furthermore, I integrated TestNG with Maven to create a robust framework, implementing the Listeners interface, Page Object pattern, Log4j, and Excel Data-Driven testing.
          </p>
          <Link href="https://infosys.com" target="_blank" rel="noopener noreferrer">
            <Image
              src="/infosys.png"
              alt="infosys.com"
              width={600}
              height={350}
              className="rounded-lg shadow-lg mt-4 p-4"
            />
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full" id="journey">
      {/* Title Section */}
      <h1 className="text-center text-4xl md:text-5xl font-bold mt-8 mb-8 p-8">
        Here is my <span className="text-purple">Journey</span>
      </h1>

      {/* Render the Timeline */}
      <Timeline data={data} />
    </div>
  );
}