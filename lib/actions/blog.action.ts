"use server";
import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";
import { Octokit } from "octokit";
import { revalidatePath } from "next/cache";

const contentDir = path.join(process.cwd(), "blogs-content");

const octokit = new Octokit({
  auth: process.env.GITHUB_API_KEY,
});

export async function getBlogBySlug(slug: string) {
  const fileName = slug + ".mdx";
  const filePath = path.join(contentDir, fileName);
  const fileContent = fs.readFileSync(filePath, "utf8");

  const { frontmatter, content } = await compileMDX<{
    title: string;
    img: string;
    date: string;
  }>({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return {
    frontmatter,
    content,
    slug: path.parse(fileName).name,
  };
}

export async function getBlogs() {
  const files = fs.readdirSync(contentDir);
  const blogs = await Promise.all(
    files.map(async (file) => await getBlogBySlug(path.parse(file).name))
  );

  return blogs;
}

export async function getAllBlogSlug() {
  const files = fs.readdirSync(contentDir);
  const slugs = files.map((file) => ({ slug: path.parse(file).name }));
  return slugs;
}

export async function getBlogContent(slug: string) {
  const res = await octokit.request(
    `GET /repos/{owner}/{repo}/contents/{path}`,
    {
      owner: "iaryank",
      repo: "blog-collections",
      path: `${slug}.mdx`,
    }
  );

  if (Array.isArray(res.data)) {
    throw new Error("Expected a single file, but received an array.");
  }

  if (res.data.type !== "file" || !res.data.content) {
    throw new Error("Expected a file with content.");
  }

  const data = res.data.content;
  return atob(data);
}

export async function getAllBlogsMetadata() {
  console.log("called getallblogsmetadata");
  const res = await octokit.request(
    `GET /repos/{owner}/{repo}/contents/{path}`,
    {
      owner: "iaryank",
      repo: "blog-collections",
      path: `meta.json`,
    }
  );

  console.log("[RES]", res);

  if (Array.isArray(res.data)) {
    throw new Error("Expected a single file, but received an array.");
  }

  if (res.data.type !== "file" || !res.data.content) {
    throw new Error("Expected a file with content.");
  }

  const data = atob(res.data.content);
  console.log("[DATA]", data);

  const value = JSON.parse(data);
  revalidatePath("/blogs");
  return value;
}
