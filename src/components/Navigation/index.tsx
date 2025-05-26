import { useNavigate } from "react-router";
import { links } from "../../constants/routes";
import { NavigationLink } from "../NavigationLink";

export const Navigation = () => {
  const navigation = useNavigate();

  const navigationTo = (link: string) => {
    navigation(link);
  };
  return (
    <div className="flex flex-col gap-2 items-center">
      {links.map((link) => (
        <NavigationLink
          key={link.link}
          clickHandler={() => navigationTo(link.link)}
        >
          {link.label}
        </NavigationLink>
      ))}
    </div>
  );
};
