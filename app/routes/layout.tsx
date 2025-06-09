import { Outlet } from "react-router";
import Header from "~/components/header";

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col bg-white antialiased">
      <Header />
      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  );
}
