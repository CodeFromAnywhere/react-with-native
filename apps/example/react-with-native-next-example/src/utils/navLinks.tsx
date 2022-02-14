import GitHubIcon from "../../assets/icons/FaGithub.svg";

export const navLinks: NavLinksType[] = [
  {
    isIcon: true,
    name: GitHubIcon,
    path: "https://github.com/Code-From-Anywhere/react-with-native",
  },
  { name: "Home", path: "/" },
  {
    name: "Docs",
    path: "/docs/gettingStarted",
  },
  {
    name: "Contribute",
    path: "/contribute",
  },
  {
    name: "Blog",
    path: "/blog",
  },
  {
    name: "Contact Us",
    path: "#contact",
  },
];

export type NavLinksType = {
  isIcon?: boolean;
  name: string;
  path: string;
};
