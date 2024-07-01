import { FunctionComponent } from "preact";
import type { ComponentChildren } from "preact";

export const ExperienceComponent: FunctionComponent<{
  children?: ComponentChildren;
  title: string;
  date: string;
  position: string;
}> = ({ children, title, date, position }) => {
  return (
    <div class="pt-4 mb-4">
      <div className="flex w-full justify-between gap-y-1 flex-wrap items-baseline ">
        <span class="text-lg font-semibold underline underline-offset-2 decoration-2">{title}</span>
        <span class="text-sm sm:text-md font-semibold">{position}</span>
      </div>
      {children}
      <span className="flex w-full justify-end text-sm">{date}</span>
    </div>
  );
};
