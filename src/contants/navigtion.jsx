import { CiSearch } from "react-icons/ci";
import { IoMdHome } from 'react-icons/io';
import { BiSolidMoviePlay } from "react-icons/bi";
import { PiTelevisionFill } from "react-icons/pi";

export const navigation = [
  {
    label: "TV Shows",
    href: "tv",
    icon: <PiTelevisionFill />,
  },
  {
    label: "Movies",
    href: "movie",
    icon: <BiSolidMoviePlay />
  }
];
export const mobileNavigation = [
  {
    label: "Home",
    href: "/",
    icon: <IoMdHome />
  },
  ...navigation,
  {
    label: "search",
    href: "/search",
    icon: <CiSearch/>
  }
];


