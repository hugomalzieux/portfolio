import type { ComponentChildren } from "preact";

interface ExperienceComponentProps {
  children: ComponentChildren;
  title: string;
  date?: string;
  position?: string;
}

export function ExperienceComponent({
  children,
  title,
  date,
  position,
}: ExperienceComponentProps) {
  return (
    <div class="pt-4 mb-4">
      <div className="flex w-full justify-between gap-y-1 flex-wrap items-baseline ">
        <span class="text-lg font-semibold underline underline-offset-2 decoration-2">
          {title}
        </span>
        {!!position && (
          <span class="text-sm sm:text-md font-semibold">{position}</span>
        )}
      </div>
      {children}
      {!!date && (
        <span className="flex w-full justify-end text-sm">{date}</span>
      )}
    </div>
  );
}
