import { getBlogBySlug } from "@/lib/actions/blog.action";
import { CustomMDX } from "@/mdx-components";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(params.slug);

  return (
    <div className="dark:bg-gradient-to-b dark:from-[#09090B] dark:via-[#09090B] dark:to-black">
      <article className="prose dark:prose-invert max-w-5xl mx-auto pb-10 pt-28 max-md:mx-5 scroll-pt-24 blogContent prose-strong:highlight prose-h1:blogHead prose-h1:pb-10 prose-h2:blogHeadSecondary xl:prose-2xl">
        {blog.content}
      </article>
    </div>
  );
}
