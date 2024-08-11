import Link from "next/link";
import { MagicButton } from "./aceternity/StyledButton";
import { FaLocationArrow } from "react-icons/fa6";
import { Bird } from "lucide-react";
import Image from "next/image";

const Service = () => {
  return (
    <section className="mt-10 pt-10 mb-10 h-auto relative w-screen mx-auto bg-gradient-to-r from-rose-500 to-indigo-600 [mask:linear-gradient(to_bottom,white,white,transparent)]">
      <iframe
        src="https://arcavian.iaryan.tech"
        className="!w-screen absolute inset-0 h-full z-0 opacity-20"
      />
      <div className="sm:px-10 px-5 pt-20 pb-40 max-w-6xl mx-auto z-10">
        <h2 className="heading">Service</h2>
        <p className="text-white-200 text-center max-w-sm pt-3 mx-auto text-wrap">
          Visit <strong>arcavian.iaryan.tech</strong> to know about the details
          of services that I provide.{" "}
        </p>

        <div className="flex items-center justify-center">
          <Link
            href="https://arcavian.iaryan.tech"
            className="max-md:mt-10 max-sm:w-full max-xs:px-5 mx-auto max-sm:mx-5"
            target="_blank"
            prefetch={false}
          >
            <MagicButton
              title="Arcavian"
              position="left"
              icon={
                <Image
                  src={"/images/arcavian-logo.png"}
                  alt="arcavian"
                  width={100}
                  height={100}
                  className="w-8 z-10 top-0 bottom-0"
                />
              }
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Service;
