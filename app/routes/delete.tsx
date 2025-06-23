import type { Route } from "../../.react-router/types/app/routes/+types/home";

export function meta({}: Route.MetaArgs) {
  return [{ title: "Delete Your Account – College Locator" }];
}

export default function Delete() {
  return (
    <div className={"mx-auto min-h-screen max-w-6xl bg-white p-10 pt-8 lg:px-20"}>
      <h1 className={"text-xl font-bold"}>
        Permanently delete your account from the College Locator Mobile Application
      </h1>
      <p className={"pt-5 text-lg"}>
        If you use <strong>College Locator</strong> and wish to delete your account, you can:
      </p>
      <ol className={"list-decimal pl-10"}>
        <li>Open the College Locator app on your mobile device.</li>
        <li>Log in to your account.</li>
        <li>Click on the Profile Tab.</li>
        <li>Click on the "Delete Account" button.</li>
      </ol>

      <h2 className={"pt-5 text-xl font-bold"}>What Data Is Deleted</h2>
      <ul className={"list-disc pl-10"}>
        <li>Profile and personal info</li>
      </ul>
    </div>
  );
}
