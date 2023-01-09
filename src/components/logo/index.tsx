import { ILogoProps } from "./@types";
import defaultTexted from "../../../public/logos/logo-default-texted.png";
import defaultNoText from "../../../public/logos/logo-default-no-text.png";

export function Logo({
  texted = true,
  size = "md",
  target = "_self",
  link,
}: ILogoProps) {
  if (link) {
    if (size === "sm")
      return (
        <a href={link} target={target}>
          <div className="max-w-[3rem] md:max-w-[4.5rem] lg:max-w-[5rem] xl:max-w-[6rem]">
            <img
              className="w-full h-full"
              src={texted ? defaultTexted : defaultNoText}
              srcSet={texted ? defaultTexted : defaultNoText}
              alt="logo"
            />
          </div>
        </a>
      );

    if (size === "md")
      return (
        <a href={link} target={target}>
          <div className="w-[5rem] md:w-[7rem] lg:w-[10rem] xl:w-[11rem]">
            <img
              className="w-full h-full"
              src={texted ? defaultTexted : defaultNoText}
              srcSet={texted ? defaultTexted : defaultNoText}
              alt="logo"
            />
          </div>
        </a>
      );
  }

  if (size === "sm")
    return (
      <div className="max-w-[3rem] md:max-w-[4.5rem] lg:max-w-[5rem] xl:max-w-[6rem]">
        <img
          className="w-full h-full"
          src={texted ? defaultTexted : defaultNoText}
          srcSet={texted ? defaultTexted : defaultNoText}
          alt="logo"
        />
      </div>
    );

  if (size === "md")
    return (
      <div className="w-[5rem] md:w-[7rem] lg:w-[10rem] xl:w-[11rem]">
        <img
          className="w-full h-full"
          src={texted ? defaultTexted : defaultNoText}
          srcSet={texted ? defaultTexted : defaultNoText}
          alt="logo"
        />
      </div>
    );
  return null;
}
