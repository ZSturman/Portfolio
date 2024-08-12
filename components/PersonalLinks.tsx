"use client"
import { motion } from "framer-motion";
import { socialLinksVariantChildren } from "@/site/variants";

type PersonalLinksProps = {
  links: SocialMediaLink[];
  showTitles?: boolean;
  className?: string;
};

const PersonalLinks: React.FC<PersonalLinksProps> = ({ links, showTitles, className}) => {

  className = className || "flex flex-row flex-wrap md:gap-10 items-center justify-center w-full"



  return (
    <motion.div className={className}>
      {links.map((link, index) => {
        const rotation = (index % 3) * 3 - 3; 

        return (
          <motion.a
            className={`text-2xl text-center text-dark-shade p-2 rounded-lg hover:bg-dark-shade hover:text-lightest-shade group`}
            whileHover={{ scale: 1.1, rotate: `${rotation}deg` }}
            key={index}
            variants={socialLinksVariantChildren}
            initial="init"
            whileInView="headerEnter"
            custom={index}
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            <div className="p-2  opacity-70 group-hover:cursor-pointer group-hover:scale-110 group-hover:opacity-90 flex flex-row gap-2">


              <link.icon />
              {showTitles && (

                <h3 className="sm:hidden md:block">
              {link.title}
              </h3>
              
              )}
            </div>

          </motion.a>
        );
      })}
    </motion.div>
  );
};

export default PersonalLinks;