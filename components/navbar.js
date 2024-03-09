import Link from "next/link";
import ThemeChanger from "./DarkSwitch";
import Image from "next/image"
import { useTheme } from "next-themes";
import { useTranslation } from "next-i18next";

const Navbar = () => {
  const { t } = useTranslation()
  const { theme, setTheme } = useTheme();
  const navigation = [
    t('navbar.item1'),
    t('navbar.item2'),
    t('navbar.item3'),
  ];

  return (
    <div className="w-full">
      <nav className="container relative flex flex-wrap items-center justify-between p-8 mx-auto lg:justify-between xl:px-0">
        {/* Logo  */}
        <Link href="/">
          <span className="flex items-center space-x-2 text-2xl font-medium text-indigo-500 dark:text-gray-100">
            <span>
              <Image
                src={theme === "dark" ? "/img/ability-logo-white.png" : "/img/ability-logo-green.png"}
                alt="N"
                width="120"
                height="120"
                className="w-full"
              />
            </span>
          </span>
        </Link>

        {/* menu  */}
        <div className="hidden text-center lg:flex lg:items-center">
          <ul className="items-center justify-end flex-1 pt-6 list-none lg:pt-0 lg:flex">
            {navigation.map((menu, index) => (
              <li className="mr-3 nav__item" key={index}>
                <Link href="/" className="inline-block px-4 py-2 text-lg font-normal text-gray-800 no-underline rounded-md dark:text-gray-200 hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:focus:bg-gray-800">
                    {menu}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="hidden mr-3 space-x-4 lg:flex nav__item">
          <Link href="/" className="px-6 py-2 text-white bg-primary rounded-md md:ml-5">
            {t('navbar.item4')}
          </Link>

          <ThemeChanger />
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
