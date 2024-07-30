'use client';
import './Projects.css';
import ThreeDCardDemo from './ThreeDCardDemo';

export default function Projects({ projectData }) {
  return (
    <section
      className="preview flex min-h-[350px] justify-center  items-center"
      id="projects"
    >
      <div className="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 relative rounded-md  bg-grid-small-black/[0.1] dark:bg-grid-small-white/[0.1]">
        <div className="theme-zinc w-full">
          <div className="preview flex min-h-[350px] w-full justify-center p-2 sm:p-10 items-center">
            <ThreeDCardDemo projectData={projectData} />
          </div>
        </div>
      </div>
    </section>
  );
}
