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
        <div>
          <h2>Professional Summary</h2>
        </div>
        <div>
          <h2>Work Experience</h2>
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
        </div>
        <div>
          <h2>Skills</h2>
        </div>
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
