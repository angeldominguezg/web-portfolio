import { Hero } from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  const navItems = [
    {
      name: "Home",
      link: "/",
      icon: <FaHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    // {
    //   name: "About",
    //   link: "/about",
    //   // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
    // },
    // {
    //   name: "Contact",
    //   link: "/contact",
    //   // icon: (
    //   // <IconMessage className="h-4 w-4 text-neutral-500 dark:text-white" />
    //   // ),
    // },
  ];

  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
      </div>
    </main>
  );
}
