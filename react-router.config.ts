import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  // return a list of URLs to prerender at build time
  // async prerender() {
  //   return ["/", "/privacy", "/terms"];
  // },
  // ssr: true,
  ssr: true,
  // prerender: true,
} satisfies Config;
