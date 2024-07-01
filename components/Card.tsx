import { IS_BROWSER } from "$fresh/runtime.ts";

// deno-lint-ignore no-explicit-any
export const Card = (props: any) => {
  return (
    <div
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`${props.class} rounded-lg sm:drop-shadow-xl overflow-hidden ring-0 sm:ring-1 ring-slate-900/5 p-2 sm:p-8 text-justify sm:text-left`}
    >
      {props.children}
    </div>
  );
}