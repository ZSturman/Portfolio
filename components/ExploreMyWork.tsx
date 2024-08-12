"use client"
import PersonalLinks from "./PersonalLinks";
import { workLinks } from "@/site/links";

const ExploreMyWork = () => {

  const linkClassNames = "grid grid-cols-2 sm:grid-cols-3 gap-4 p-5";

  return (
    <div className="text-center sm:text-left text-3xl sm:text-2xl md:text-3xl sm:tracking-widest mb-2">
    <div className="flex flex-col items-center p-10  mt-10  max-w-[900px] mx-auto">
      <h2 className="text-4xl font-bold mb-6">Explore My Work</h2>

       <PersonalLinks links={workLinks} showTitles={true} className={linkClassNames}/>

    </div>
  </div>
  );
};

export default ExploreMyWork;