import {
    mobile,
    backend,
    creator,
    web,
    fullstack,
    javascript,
    typescript,
    datascience,
    html,
    css,
    reactjs,
    Coned,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    bestbuy,
    sivantos,
    meta,
    starbucks,
    tesla,
    tpr,
    analyst,
    machine,
    shopify,
    timeseries,
    jobit,
    tripguide,
    threejs,
    python,
    apache,
    sql,
    rstudio,
    matlab,
    tableau,
    powerbi,
    azure,
    csharp,

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Data Scientist",
      icon: datascience,
    },
    {
      title: "Machine Learning Analyst",
      icon: machine,
    },
    {
      title: "Full Stack Developer",
      icon: fullstack,
    },
    {
      title: "Data Analyst",
      icon: analyst,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Rstudio",
      icon: rstudio,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "MATLAB",
      icon: matlab,
    },
    {
      name: "Tableau",
      icon: tableau,
    },
    {
      name: "PowerBi",
      icon: powerbi,
    },
    {
      name: "Azure",
      icon: azure,
    },
    {
      name: "CSharp",
      icon: csharp,
    },

  ];
  
  const experiences = [
    {
      title: "Data Scientist",
      company_name: "Consolidated Edison",
      icon: Coned,
      iconBg: "#383E56",
      date: "August 2022 - Present",
      points: [
        "Developed and managed advanced weather impact models using Conformal Quantile Regression (CQR) and CatBoost to predict customer outages, resulting in reduced response times and enhanced company reliability.",
        "Spearheaded a critical application with C# using ASP.NET to help track relevant weather conditions to ensure functionality of the electrical grid.",
        "Leveraged C# and Agile to create Support Ticket system boosting productivity by 70% and improved communication efficiency by 80%.",
        "Utilized Python and R to conduct Big Data analysis providing Senior Engineers with insights increasing accuracy by 50%.",
        "Using Python and Microsoft Excel/VBA reconciled data resulting in a 99% accuracy rate and mitigating potential financial risks.",
        "Developed automated tracking programs using SSMS and Python reducing workload by 20% for multitasking.",
      ],
    },
    {
      title: "SAT/ACT Tutor",
      company_name: "The Princeton Review",
      icon: tpr,
      iconBg: "#E6DEDD",
      date: "October 2021 - Present",
      points: [
        "Implemented Power App tools to automate emails on deadlines and updates over multiple classes ensuring accurate time keeping reducing manual entry by 60%.",
        "Introduced highly interactive and customized lesson plans, leading to a significant 30% boost in knowledge retention and class engagement.",
        "Implemented Power BI and Tableau to create visually compelling dashboards, enabling real-time tracking of student workload and progress.",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "Sivantos",
      icon: sivantos,
      iconBg: "#383E56",
      date: "June 2021 - October 2021",
      points: [
        "Restructured SQL database, reducing query response time by 50% and enabling faster access to real-time data.",
        "Streamlined data entry process, reducing errors by 80% and improving data integrity across multiple systems resulting in effective customer privacy policies. ",
        "Designed and deployed legal operations such as automation tools, encryption and confidentiality ensuring an increased security by 30%.",
      ],
    },
    {
      title: "Manager",
      company_name: "Best Buy",
      icon: bestbuy,
      iconBg: "#E6DEDD",
      date: "November 2019 - June 2021",
      points: [
        "Initiated the use of Power BI to monitor customer satisfaction and store performance, leading to a 25% reduction in customer complaints and a 10% growth in revenue.",
        "Oversaw daily sales of over $500,000 and exceeded revenue targets by 15% through data-driven decision making and team motivation.",
        "Collaborated with multiple departments to optimize marketing campaigns leveraging data analytics on satisfaction to improve customer retention by 20%.",
        
      ],
    },
    {
      title: "Computer Aide Co-Op",
      company_name: "Consolidated Edison",
      icon: Coned,
      iconBg: "#E6DEDD",
      date: "June 2019 - October 2019",
      points: [
        "Levered statistical methods using R to uncover hidden trends and patterns, resulting in actionable insights.",
        "Developed mathematical models, including linear regression and predictive models to accurately forecast power consumption readings over time, enabling resource allocation and reducing power loss by 40% annually.",
        "Directed field studies and data collection to support sophisticated analysis on the overall load of a power grid on varying factors.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Forecast Predictions ",
      description:
        "A Nonseasonal Prediciton on Apple Stock Prices and a Seasonal Prediction on Bike Riders in Ottawa worked by me and other students.",
      tags: [
        {
          name: "R",
          color: "blue-text-gradient",
        },
        {
          name: "Timeseries",
          color: "green-text-gradient",
        },
        {
          name: "GARCH/SARIMA",
          color: "pink-text-gradient",
        },
      ],
      image: timeseries,
      site_code_link: "https://www.researchgate.net/publication/376612967_A_Time_Series_Analysis_using_GARCH_and_SARIMA_Modes_Stock_Price_and_Bike_Ridership",
      source_code_link: "https://github.com/VisBudati/Codefiles/blob/main/TimeSeriesFinal",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
