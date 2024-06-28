import { getBlogBySlug } from "@/lib/actions/blog.action";
import { CustomMDX } from "@/mdx-components";

export default async function BlogPage({
  params,
}: {
  params: { slug: string };
}) {
  const blog = await getBlogBySlug(params.slug);

  return (
    <article className="prose dark:prose-invert max-w-5xl mx-auto py-10 mt-20 max-md:mx-5 scroll-mt-24 blogContent prose-strong:highlight prose-h1:blogHead prose-h1:pb-10 prose-h2:blogHeadSecondary xl:prose-2xl">
      {blog.content}
    </article>
  );
}
