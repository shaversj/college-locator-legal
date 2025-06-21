import type { Route } from "./+types/home";
import MobileImage from "/mobile.png";
import AppStoreIcon from "/Download_on_the_App_Store_Badge_US-UK.webp";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [{ title: "College Locator" }];
}

export default function Home() {
  return (
    <div className={"min-h-screen bg-white"}>
      <main className={"mx-auto max-w-6xl p-10 pt-8 lg:px-20"}>
        <div
          className={
            "gap-x-10 md:grid md:h-[582px] md:grid-cols-[1fr_auto] md:grid-rows-[auto_auto_1fr]"
          }
        >
          <h1
            className={
              "row-start-1 row-end-1 text-[56px] leading-12 font-bold text-[#130f2b] lg:pt-14"
            }
          >
            The <span className={"text-[#00a980]"}>easiest</span> way to discover and compare{" "}
            <span className={"text-[#00a980]"}>colleges</span>.{" "}
          </h1>
          <img
            src={MobileImage}
            alt={"Mobile Preview"}
            className="mx-auto mt-10 h-[582px] w-[288px] rounded-2xl md:col-start-2 md:col-end-2 md:row-span-full md:mx-0 md:mt-0"
          />

          <p className={"pt-10 text-2xl font-medium text-[#434345] md:col-start-1 md:row-start-2"}>
            Find colleges and universities near you or across the country—explore enrollment,
            degrees, and more with College Locator.
          </p>

          <div className="grid h-fit w-full place-items-center pt-14 md:place-items-start">
            <Link to={"https://apps.apple.com/app/college-locator/id6449708700"}>
              <img src={AppStoreIcon} alt={"Download on the App Store"} />
            </Link>
          </div>
        </div>
      </main>
      <footer className={"grid w-full place-items-center"}>
        <a href="https://logo.dev" className={"hover:underline"}>
          Logos provided by Logo.dev
        </a>

        <div className="mt-4">
          <a href="/privacy" className="hover:underline">
            Privacy Policy
          </a>{" "}
          |
          <a href="/terms" className="hover:underline">
            {" "}
            Terms of Service
          </a>
        </div>
      </footer>
    </div>
  );
}
