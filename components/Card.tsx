import { IS_BROWSER } from "$fresh/runtime.ts";

// deno-lint-ignore no-explicit-any
export const Card = (props: any) => {
  return (
    <div
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={`${props.class} mx-auto rounded-lg sm:drop-shadow-xl overflow-hidden  ring-0 sm:ring-1 ring-slate-900/5 p-4`}
    >
      {props.children}
    </div>
  );
}

