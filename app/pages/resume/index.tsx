import id_picture from '~/assets/id_picture.jpg';
import {
  PROFESSIONAL_EXPERIENCE_CONTENT,
  WORK_EXPERIENCE_CONTENT,
  EDUCATION_CONTENT
} from '~/constants/resume';

export function Resume() {
  return (
    <>
      <div className='sticky top-0 self-start px-[20px] py-[30px] rounded-[16px] border bg-white basis-3/12 flex flex-col gap-5 text-center text-black max-h-fit'>
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
      <div className='pl-[40px] basis-9/12'>
        {/* PROFESSIONAL SUMMARY */}
        <section>
          <div className='rounded-xl border text-card-foreground bg-gray-800 border-gray-700 shadow-md mb-6'>
            <h2 className='p-6'>Professional Summary</h2>
            <p className='p-6 pt-0'>{PROFESSIONAL_EXPERIENCE_CONTENT}</p>
          </div>
        </section>
        {/* WORK EXPERIENCE */}
        <section>
          <h2 className='mb-4'>Work Experience</h2>
          {WORK_EXPERIENCE_CONTENT.map((objWorkExpDetails, iIndex) => (
            <div key={iIndex} className='rounded-xl border text-card-foreground bg-gray-800 border-gray-700 shadow-md mb-6'>
              <div className='flex flex-col space-y-1.5 p-6'>
                <h3>{objWorkExpDetails.title}</h3>
                <h4>{objWorkExpDetails.company} · {objWorkExpDetails.date}</h4>
              </div>
              <div className='p-6 pt-0'>
                <ul className='list-disc list-inside normal-case'>
                  {objWorkExpDetails.description.map((sDescription, iIndex) => <li key={iIndex}>{sDescription}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </section>
        {/* SKILLS */}
        <section>
          <h2 className='mb-4'>Skills</h2>
        </section>
        {/* EDUCATION */}
        <section className='mb-8'>
          <h2 className='mb-4'>Education</h2>
          {EDUCATION_CONTENT.map((objEducationDetails, iIndex) => (
            <div key={iIndex} className='rounded-xl border text-card-foreground bg-gray-800 border-gray-700 shadow-md'>
              <div className='flex flex-col space-y-1.5 p-6'>
                <h3>{objEducationDetails.degree}</h3>
                <h4>{objEducationDetails.institution} · {objEducationDetails.date}</h4>
              </div>
              <div className='p-6 pt-0'>
                <ul className='list-disc list-inside normal-case'>
                  {objEducationDetails.description.map((sDescription, iIndex) => <li key={iIndex}>{sDescription}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </section>
      </div>
    </>
  );
}
