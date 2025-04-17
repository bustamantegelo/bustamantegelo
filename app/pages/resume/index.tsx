import id_picture from '~/assets/id_picture.jpg';

export function Resume() {
  return (
    <>
      <div className='px-[20px] py-[30px] rounded-[16px] border bg-white basis-3/12 flex flex-col gap-5 text-center text-black'>
          <img
              className='rounded-[inherit] shadow-2xl border-black border'
              src={ id_picture }
              alt='ID Picture'/>
          <p className='text-3xl font-black'>Angelo Bustamante</p>
          <p>A Frontend Developer with a strong specialization in accessibility, creating visually appealing and barrier-free web applications.</p>
          <a href={'https://www.linkedin.com/in/bustamanteangelo13/'}>Linkedin</a>
          <a href={'https://github.com/bustamantegelo'}>Github</a>
          <a href={'mailto:bustamantegelo@gmail.com'}>Email</a>
      </div>
      <div className='px-[40px] basis-9/12'>
        {/* PROFESSIONAL SUMMARY */}
        <div>
          <h2>Professional Summary</h2>
          <p>Results-driven Full-Stack Web Developer with 6+ years of hands-on experience across the entire web development lifecycle. Proven expertise in front-end and back-end technologies including HTML, CSS, JavaScript, PHP, SQL, React.js, Vue.js, and Laravel. QualityLogic-trained in WCAG accessibility testing, with a strong commitment to building inclusive, user-centered web applications. Experienced in client relationship management, project planning, and end-to-end execution—skilled at translating client needs into technical solutions and consistently delivering projects on time and within scope.</p>
        </div>
        {/* WORK EXPERIENCE */}
        <div>
          <h2>Work Experience</h2>
          {/* QUANTRICS ENTERPRISES INC. */}
          <div>
            <h3>QUANTRICS ENTERPRISES INC.</h3>
            <div>
              <p>Nov 2023 - Present</p>
              <div>
                <h4>Accessibility Tester</h4>
                <ul className='list-disc'>
                  <li>Conducted manual accessibility testing across Bell Canada's diverse web and mobile (iOS and Android) product portfolio to ensure compliance with WCAG 2.1 standards.</li>
                  <li>Systematically documented identified accessibility defects, contributing to improved user experience for individuals with disabilities.</li>
                  <li>Leveraged Siteimprove to proactively audit and analyze Bell Canada websites for accessibility violations, facilitating timely remediation efforts.</li>
                </ul>
              </div>
            </div>
            <div>
              <p>Feb 2023 - Nov 2023</p>
              <div>
                <h4>Web Developer</h4>
                <ul className='list-disc'>
                  <li>Executed website rebranding projects leveraging the company's proprietary front-end framework, with a focus on HTML and CSS.</li>
                  <li>Designed and developed reusable front-end components using HTML and CSS, enhancing maintainability and scalability of web applications.</li>
                  <li>Translated Figma design specifications into functional and visually consistent HTML interfaces, ensuring pixel-perfect implementation.</li>
                  <li>Implemented web accessibility best practices and conducted rigorous testing, achieving WCAG 2.1 compliance and ensuring inclusive user experiences for individuals with disabilities.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* ORACLE NETSUITE (PHILIPPINES) CORPORATION */}
          <div>
            <h3>ORACLE NETSUITE (PHILIPPINES) CORPORATION</h3>
            <p>June 2022 - Feb 2023</p>
            <div>
              <h4>TECHNICAL CONSULTANT</h4>
              <ul className='list-disc'>
                <li>Led full project lifecycle from client consultation to go-live, starting with in-depth analysis of client requirements and translating them into customized JavaScript applications using the SuiteScript framework. Designed, built, and deployed scalable solutions aligned with client goals, ensuring functionality, performance, and long-term maintainability.</li>
                <li>Successfully managed and delivered three complex, full-scale projects from initiation to go-live, overseeing all phases including client consultation, planning, development, testing, and deployment. Ensured timely delivery, alignment with client expectations, and high-quality outcomes in fast-paced environments.</li>
                <li>Designed and generated dynamic PDF templates with FreeMarker to fulfill unique client documentation needs.</li>
                <li>Collaborated with clients to define and implement customized workflows for optimized operational efficiency.</li>
                <li>Delivered technical consultations, interpreting client needs to architect and implement appropriate NetSuite configurations.</li>
              </ul>
            </div>
          </div>
          {/* QUANTRICS ENTERPRISES INC. */}
          <div>
            <h3>QUANTRICS ENTERPRISES INC.</h3>
            <p>OCT 2021 - JUNE 2022</p>
            <div>
              <h4>FRONTEND WEB DEVELOPER</h4>
              <ul className='list-disc'>
                <li>Developed and implemented training simulations for Bell OrderMax and Blueprint using JSON-based step and action definitions, enhancing user proficiency.</li>
                <li>Designed and built reusable React.js components for the Singleview application at Bell Canada, contributing to an efficient and maintainable codebase, with deployment via Git.</li>
              </ul>
            </div>
          </div>
          {/* CAFE24 PHILIPPINES */}
          <div>
            <h3>CAFE24 PHILIPPINES</h3>
            <div>
              <p>DEC 2020 - SEP 2021</p>
              <div>
                <h4>FRONTEND DEVELOPER</h4>
                <ul className='list-disc'>
                  <li>Demonstrated strong project management and analytical skills by proactively engaging with clients to understand their needs, translating requirements into actionable plans, and ensuring deliverables met or exceeded expectations. Investigated client-facing issues with precision, provided clear insights to stakeholders, and contributed to enhanced product reliability and client satisfaction.</li>
                  <li>Addressed key frontend development challenges by architecting and building reusable JavaScript libraries with Node.js, fostering a more efficient and maintainable codebase.</li>
                  <li>Improved the frontend development environment through the creation of targeted internal tools, directly contributing to improved team velocity and reduced development overhead.</li>
                </ul>
              </div>
            </div>
            <div>
              <p>MAR 2019 - DEC 2020</p>
              <div>
                <h4>WEB DEVELOPER (PHP DEVELOPER)</h4>
                <ul className='list-disc'>
                  <li>Developed and maintained a Cafe24 platform application to streamline seller banner management, significantly reducing complexities for eCommerce vendors.</li>
                  <li>Designed, implemented, and supported a synchronization application for product data between the Cafe24 platform and the Next Engine inventory system (Japan), improving data accuracy and operational efficiency.</li>
                  <li>Ensured code quality and application reliability through the creation and execution of unit and acceptance tests using PHPUnit.</li>
                  <li>Utilized a full technology stack including HTML, CSS, JavaScript, Vue.js, Laravel, Docker, and Worker server to deliver scalable and maintainable solutions.</li>
                </ul>
              </div>
            </div>
          </div>
          {/* GLOBAL INTEGRATED CONTACT FACILITIES, INC. (GICF, INC.) */}
          <div>
            <h3>GLOBAL INTEGRATED CONTACT FACILITIES, INC. (GICF, INC.)</h3>
            <p>AUG 2018 - FEB 2019</p>
            <div>
              <h4>APPLICATION DEVELOPER</h4>
              <ul className='list-disc'>
                <li>Developed and implemented a web-based application for agents to log customer details, modernizing the outdated desktop CRM system. Utilized HTML, CSS, JavaScript, and PHP for development, and integrated call functionality using VICIdial. This initiative improved agent efficiency and data accuracy, and provided a streamlined interface for call management.</li>
                <li>Spearheaded the end-to-end design, development, and deployment of a Digital Time Record (DTR) system for interns, significantly improving attendance tracking accuracy and reducing administrative workload. Built using HTML, CSS, JavaScript, and PHP, the system streamlined record-keeping and reporting processes. Additionally, independently developed and managed an inventory management system to monitor IT asset statuses (deployed, in stock, defective), enabling efficient resource allocation, minimizing losses, and improving overall asset visibility.</li>
              </ul>
            </div>
          </div>
        </div>
        {/* SKILLS */}
        <div>
          <h2>Skills</h2>
        </div>
        {/* EDUCATION */}
        <div>
          <h2>Education</h2>
          <div>
            <h3>Technological Institute of the Philippines</h3>
            <p>June 2014 - Mar 2018</p>
            <div>
              <h4>Bachelor of Science in Information Technology</h4>
              <ul className='list-disc'>
                <li>Developed and implemented Oracle SQL scripts and PL/SQL solutions in response to academic specifications.</li>
                <li>Proficient in mobile application development for both Android and iOS platforms using Android Studio and Xcode, respectively.</li>
                <li>Applied Unity game development skills and Adobe Photoshop for asset creation as part of a team developing a mobile game for Knowledge Channel.</li>
                <li>Participated in the Android Masters (Game Category) competition, reaching the Semifinal stage through collaborative game development using Unity and Adobe Photoshop.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
