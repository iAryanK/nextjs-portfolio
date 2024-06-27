import { BackgroundGradientAnimation } from "@/components/aceternity/BgGradient";
import { LinkPreview } from "@/components/aceternity/LinkPreview";
import { AllBlogs } from "@/data/blogs";
import { ExternalLink } from "lucide-react";

const Blogs = () => {
  return (
    <div className="max-w-7xl mx-auto  px-3 mt-28">
      <BackgroundGradientAnimation
        containerClassName="h-28 sm:h-40 rounded-xl"
        size="24px"
      >
        <div className="absolute z-20 inset-0 flex items-center justify-center text-white font-bold px-4 pointer-events-none text-4xl text-center md:text-5xl lg:text-7xl">
          <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
            Blogs
          </p>
        </div>
      </BackgroundGradientAnimation>

      <div className="mt-10">
        {AllBlogs.map((blog) => (
          <div key={blog.id}>
            <div className="flex items-center justify-between">
              <p className="text-7xl mx-5 text-[#646345] dark:text-[#d3d2c5] max-lg:hidden">
                {blog.id}
              </p>
              <div className="text-xl md:text-3xl max-w-4xl mx-auto my-10">
                <LinkPreview
                  url={blog.url}
                  imageSrc={blog.hoverImg}
                  isStatic
                  className="text-[#868562] dark:text-[#BBBAA6]"
                >
                  {blog.heading}
                  <div className="flex items-center justify-between mt-4">
                    <div className="font-medium text-lg ml-2 text-[#14af40] dark:text-[#0ae448]">
                      {blog.date}
                    </div>
                    <p className="font-normal text-base mr-5 text-[#14af40] dark:text-[#0ae448] xl:hidden flex items-center justify-center cursor-pointer">
                      Read More <ExternalLink className="ml-2" size={14} />
                    </p>
                  </div>
                </LinkPreview>
              </div>
              <p className="mr-5 text-[#14af40] dark:text-[#0ae448] max-xl:hidden flex items-center justify-center cursor-pointer">
                Read More <ExternalLink className="ml-2" size={14} />
              </p>
            </div>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
