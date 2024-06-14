import Link from "next/link";

const Page = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center text-black dark:text-white uppercase tracking-wider">
      About page is under development.
      <div className="text-black dark:text-white uppercase tracking-wider">
        Go back to{" "}
        <Link href={"/"} className="text-blue-600">
          home
        </Link>
      </div>
    </div>
  );
};

export default Page;
