import { MDXRemote } from "next-mdx-remote/rsc";

const components = {
  h1: (props: any) => (
    <h1 {...props} className="paraHead">
      {props.children}
    </h1>
  ),
  h2: (props: any) => (
    <h2 {...props} className="paraHeadSecondary">
      {props.children}
    </h2>
  ),
};

export function CustomMDX(props: any) {
  return (
    <MDXRemote
      {...props}
      components={{ ...components, ...(props.components || {}) }}
    />
  );
}
