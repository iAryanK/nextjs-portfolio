import { BackgroundGradientAnimation } from "@/components/aceternity/BgGradient";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { importantLinks, socialMedia } from "@/data";
import { Linkedin, LocateIcon, Mail, MapPin } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import { FaGithub } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "About Me | Aryan",
  description:
    "Read more about Aryan, a Computer Science undergraduate with a passion for programming, new technologies, and aspiring to become a Software Development Engineer.",
  openGraph: {
    title: "About Me | Aryan",
    description:
      "Read more about Aryan, a Computer Science undergraduate with a passion for programming, new technologies, and aspiring to become a Software Development Engineer.",
    images: [
      {
        url: `${importantLinks.portfolioWebsite}/opengraph-image.png`,
      },
    ],
  },
};

const Page = () => {
  return (
    <div className="bg-white dark:bg-black">
      <div className="max-w-7xl mx-auto px-3 pt-28 pb-10 scroll-pt-24">
        <BackgroundGradientAnimation
          containerClassName="h-28 sm:h-40 rounded-xl"
          size="24px"
        >
          <div className="absolute z-20 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-4xl text-center md:text-5xl lg:text-7xl">
            <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
              About Me
            </p>
          </div>
        </BackgroundGradientAnimation>

        <div className="ml-5 h-24 w-24 sm:h-48 sm:w-48 relative -top-12 sm:-top-20">
          <Avatar className="rounded-2xl border-[2px] border-zinc-400 absolute z-20 hover:scale-105 transition ease-in-out shadow-zinc-700 shadow-2xl h-24 w-24 sm:h-48 sm:w-48">
            <AvatarImage src="/images/profile_photo.jpg" />
            <AvatarFallback className="rounded-2xl uppercase tracking-widest text-lg font-light">
              Aryan
            </AvatarFallback>
          </Avatar>

          <h1 className="-bottom-12 absolute sm:ml-5 secondaryHeading">
            Aryan
          </h1>
        </div>

        <p className="ml-3 max-md:mt-5 md:ml-5 text-xl font-semibold">
          M.Tech in CSE&apos;27 @IIT Patna | Full Stack Developer | Programmer
        </p>

        <div className="font-medium text-lg mt-3 flex items-center justify-start px-3 sm:px-5">
          <MapPin size={18} className="mr-2" />
          <p className="text-[#868562] dark:text-[#BBBAA6]">Jharkhand, India</p>
        </div>

        <div className="max-w-7xl mx-auto flex flex-wrap flex-col md:flex-row gap-8 mt-10 max-md:hidden px-5">
          <div className="border rounded-lg relative">
            <Badge variant={"secondary"} className="absolute -top-3 ml-3">
              Email ID
            </Badge>
            <Link
              href="#contact"
              className="pt-3 pb-2 px-5 flex items-center justify-center text-blue-500"
            >
              <Mail size={18} className="mr-2" />
              aryaninmail@gmail.com
            </Link>
          </div>

          <div className="border rounded-lg relative">
            <Badge variant={"secondary"} className="absolute -top-3 ml-3">
              LinkedIn
            </Badge>
            <Link
              href="https://www.linkedin.com/in/iaryan/"
              className="pt-3 pb-2 px-5 flex items-center justify-center text-blue-500"
            >
              <Linkedin size={18} className="mr-2" />
              linkedin.com/in/iaryan
            </Link>
          </div>

          <div className="border rounded-lg relative ">
            <Badge variant={"secondary"} className="absolute -top-3 ml-3">
              Github
            </Badge>
            <Link
              href="https://github.com/iAryanK"
              className="pt-3 pb-2 px-5 flex items-center justify-center text-blue-500"
            >
              <FaGithub size={18} className="mr-2" />
              github.com/iaryank
            </Link>
          </div>
        </div>

        <div className="flex items-center gap-3 mt-5 mx-3 md:hidden">
          {socialMedia.map((profile) => (
            <Link
              key={profile.id}
              href={profile.link}
              className="w-8 h-8 z-10 cursor-pointer flex justify-center items-center rounded-full border"
            >
              <profile.img />
            </Link>
          ))}
        </div>

        <div className="md:px-5">
          <div className="max-w-7xl mx-auto border rounded-lg relative mt-10">
            <Badge variant={"secondary"} className="absolute -top-3 ml-3">
              About me
            </Badge>
            <div className="max-w-6xl mx-auto blogContent py-7 pl-3 pr-2">
              <div className="paraHead">Hello there!</div>I am a B. Tech
              CSE&apos;25 graduate, currently pursuing the degree of Master of
              Technology in Computer Science & Engineering from{" "}
              <span className="highlight">
                Indian Institute of Technology, Patna.
              </span>{" "}
              <br />I am a <strong>Full Stack Developer</strong> at a fast-paced
              Hyderabad based startup, building scalable systems that turn wild
              ideas into reality. <br />
              {/* Experience Section */}
              <div className="paraHead">Experience</div>
              My Experience are as shown below:-
              <div className="paraHeadSecondary">- Full Stack Developer</div>
              Working as <span className="highlight">FSD</span> in Ezwiiz
              Frontier Systems(EFS, Hyderabad). <br />
              <em>August 2025 - Present</em>
              <div className="paraHeadSecondary">
                - Full Stack Developer Intern
              </div>
              Worked as <span className="highlight">FSD Intern</span> at Ezwiiz
              Frontier Systems(EFS, Hyderabad), <br />
              <em>April 2025 - July 2025</em>
              <div className="paraHeadSecondary">
                - Software Developer Intern
              </div>
              Worked as <span className="highlight">SDE Intern</span> at 75way
              technologies, Mohali, Punjab. <br />
              <em>January 2025 - March 2025</em>
              {/* Academic qualifications Section */}
              <div className="paraHead">Academic qualifications</div>
              My Academic qualifications are as shown below:-
              <div className="paraHeadSecondary">- M.tech</div>
              Pursuing M.Tech in Computer Science & Engineering from{" "}
              <strong className="highlight">
                Indian Institute of Technology, Patna.
              </strong>
              <br />
              <em>July 2025- June 2027</em>
              <div className="paraHeadSecondary">- B.tech</div>
              Secured <strong className="highlight">CGPA 9.5</strong> in B. Tech
              CSE from my college I K Gujral Punjab Technical University.
              <br />
              <em>Aug 2021- July 2025</em>
              <div className="paraHeadSecondary">- Class XII </div>
              Secured <strong className="highlight">percentage 87.6</strong> in
              standard XII in the year 2019 from my school{" "}
              <strong className="highlight">Chinmaya Vidyalaya</strong>, B.S.
              City, affiliated to Central Board Of Secondary Education(CBSE).
              <div className="paraHeadSecondary">- Class X</div>
              Secured <strong className="highlight">percentage 92.5</strong> in
              standard X in the year 2017 from my school Saint Thomas School,
              Godda, affiliated to{" "}
              <strong className="highlight">
                Indian Council of Secondary Education(ICSE).
              </strong>
              {/* Achievements  */}
              <div className="paraHead">Achievements</div>
              My list of achievements till date are as under:-
              <div className="paraHeadSecondary">
                - TechZHut May 2022 Winner
              </div>{" "}
              Secured <strong className="highlight">Rank 1</strong> in Coding
              Competition held in May in our College Coding Club - TechZHut.{" "}
              <br /> Won{" "}
              <strong className="highlight">First Prize Medal</strong> in Quiz
              Competition held in may organized by our College Coding Club.{" "}
              <br />
              <div className="paraHeadSecondary">- Next JS 14</div> Created and
              deployed various WebSites using{" "}
              <strong className="highlight">Next JS 14</strong>, a React JS
              framework.
              {/* Skills  */}
              <div className="paraHead">Skills</div>- My technical skills
              include <strong className="highlight">programming.</strong> <br />
              - I have proficiency in languages like{" "}
              <strong className="highlight">
                Typescript, Python, Java, C++ and C.
              </strong>{" "}
              <br />- Comfortable in interacting with both{" "}
              <strong className="highlight">SQL</strong> &{" "}
              <strong className="highlight">No-SQL</strong> databases.
              <br />- IT constructs include{" "}
              <strong className="highlight">
                Data Structures and Algorithms,
              </strong>{" "}
              <strong className="highlight">
                Object oriented programming system
              </strong>{" "}
              and <strong className="highlight">Operating Systems.</strong>{" "}
              <br />- The technology I have worked on is{" "}
              <strong>Full Stack Web Development</strong> using{" "}
              <strong className="highlight">
                Next JS 14/15, MERN Stack, React Native,
              </strong>{" "}
              etc.
              <br />
              My project works and{" "}
              <strong>
                <Link href={socialMedia[1].link}>github profile</Link>
              </strong>{" "}
              is a sound proof of my best works.
              <br />- The development tool that i am use to are{" "}
              <strong className="highlight">Cursor & Visual Studio Code</strong>
              . <br />- Other skills are: I am a{" "}
              <strong className="highlight">fast learner</strong>,{" "}
              <strong className="highlight">consistent</strong> in my work and{" "}
              <strong className="highlight">punctual</strong>.
              <div className="paraHead">Interests & Hobbies</div>
              Interested in learning new technologies and working on them, I
              also love programming and solving new problems by implementing the
              concepts of{" "}
              <strong className="highlight">
                data Structures and Algorithms
              </strong>
              . Believe me or not, fortunately my hobby is programming. Aspiring
              to become a highly skilled developer & programmer, I am also
              enthusiastic about{" "}
              <strong className="highlight">
                Robotics and Machine Learning
              </strong>
              . I am here for you, acquired with some skills, to solve some real
              world problems. I also like listening music though.😅 <br />
              You can reach out to me by sending me a note from the contact
              section below or via my social media handle. <br /> <br />{" "}
              <em>Thanks</em>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
