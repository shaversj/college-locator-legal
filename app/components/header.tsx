import logo from "../../public/logo.png";
import Bars3Icon from "~/components/Bars3Icon";
import { Dialog, DialogPanel } from "@headlessui/react";
import XMarkIcon from "~/components/XMarkIcon";
import { useState } from "react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <header className={"border-b border-gray-200 bg-white p-4 lg:px-8"}>
      <nav className={"mx-auto flex max-w-5xl items-center justify-between"}>
        <div className={"flex items-center gap-x-4"}>
          <img src={logo} alt="Logo" className="size-9 rounded-md border border-black" />
          <p className="text-2xl font-bold text-black">College Locator</p>
        </div>
        <div className="hidden items-center justify-between lg:flex">
          <div className="flex space-x-4">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-black hover:text-gray-900">
                {item.name}
              </a>
            ))}
          </div>
        </div>
        <div className="ml-auto flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" />
          </button>
        </div>
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto border border-[#e7e8ea] bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">College Locator</span>
              <img src={logo} alt="Logo" className="size-9 rounded-md border border-black" />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-400"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/25">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#130f2b] hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
