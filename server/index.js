import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { Dialog, DialogPanel } from "@headlessui/react";
import { useState } from "react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "container mx-auto p-4 pt-16",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const logo = "/college-locator-legal/assets/logo-CkP2L3Tc.png";
function Bars3Icon() {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "black", className: "size-8 ml-auto", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" }) });
}
function XMarkIcon() {
  return /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", strokeWidth: 1.5, stroke: "currentColor", className: "size-6", children: /* @__PURE__ */ jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", d: "M6 18 18 6M6 6l12 12" }) });
}
const navigation = [
  { name: "Home", href: "/" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms of Service", href: "/terms" }
];
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return /* @__PURE__ */ jsxs("header", { className: "border-b border-gray-200 bg-white p-4 lg:px-8", children: [
    /* @__PURE__ */ jsxs("nav", { className: "mx-auto flex max-w-5xl items-center justify-between", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-x-4", children: [
        /* @__PURE__ */ jsx("img", { src: logo, alt: "Logo", className: "size-9 rounded-md border border-black" }),
        /* @__PURE__ */ jsx("p", { className: "text-2xl font-bold text-black", children: "College Locator" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "hidden items-center justify-between lg:flex", children: /* @__PURE__ */ jsx("div", { className: "flex space-x-4", children: navigation.map((item) => /* @__PURE__ */ jsx("a", { href: item.href, className: "text-black hover:text-gray-900", children: item.name }, item.name)) }) }),
      /* @__PURE__ */ jsx("div", { className: "ml-auto flex lg:hidden", children: /* @__PURE__ */ jsxs(
        "button",
        {
          type: "button",
          onClick: () => setMobileMenuOpen(true),
          className: "-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400",
          children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Open main menu" }),
            /* @__PURE__ */ jsx(Bars3Icon, { "aria-hidden": "true" })
          ]
        }
      ) })
    ] }),
    /* @__PURE__ */ jsxs(Dialog, { open: mobileMenuOpen, onClose: setMobileMenuOpen, className: "lg:hidden", children: [
      /* @__PURE__ */ jsx("div", { className: "fixed inset-0 z-50" }),
      /* @__PURE__ */ jsxs(DialogPanel, { className: "fixed inset-y-0 right-0 z-50 w-full overflow-y-auto border border-[#e7e8ea] bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-white/10", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsxs("a", { href: "#", className: "-m-1.5 p-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "College Locator" }),
            /* @__PURE__ */ jsx("img", { src: logo, alt: "Logo", className: "size-9 rounded-md border border-black" })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => setMobileMenuOpen(false),
              className: "-m-2.5 rounded-md p-2.5 text-gray-400",
              children: [
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close menu" }),
                /* @__PURE__ */ jsx(XMarkIcon, { "aria-hidden": "true" })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "mt-6 flow-root", children: /* @__PURE__ */ jsx("div", { className: "-my-6 divide-y divide-gray-500/25", children: /* @__PURE__ */ jsx("div", { className: "space-y-2 py-6", children: navigation.map((item) => /* @__PURE__ */ jsx(
          "a",
          {
            href: item.href,
            className: "-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-[#130f2b] hover:bg-gray-50",
            children: item.name
          },
          item.name
        )) }) }) })
      ] })
    ] })
  ] });
}
const layout = UNSAFE_withComponentProps(function Layout2() {
  return /* @__PURE__ */ jsxs("div", {
    className: "flex min-h-screen flex-col bg-white antialiased",
    children: [/* @__PURE__ */ jsx(Header, {}), /* @__PURE__ */ jsx("main", {
      className: "flex-1",
      children: /* @__PURE__ */ jsx(Outlet, {})
    })]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: layout
}, Symbol.toStringTag, { value: "Module" }));
const MobileImage = "/college-locator-legal/mobile.png";
const AppStoreIcon = "/college-locator-legal/Download_on_the_App_Store_Badge_US-UK.webp";
function meta$2({}) {
  return [{
    title: "College Locator"
  }];
}
const home = UNSAFE_withComponentProps(function Home() {
  return /* @__PURE__ */ jsx("div", {
    className: "min-h-screen bg-white",
    children: /* @__PURE__ */ jsx("main", {
      className: "mx-auto max-w-6xl p-10 pt-8 lg:px-20",
      children: /* @__PURE__ */ jsxs("div", {
        className: "gap-x-10 md:grid md:h-[582px] md:grid-cols-[1fr_auto] md:grid-rows-[auto_auto_1fr]",
        children: [/* @__PURE__ */ jsxs("h1", {
          className: "row-start-1 row-end-1 text-[56px] leading-12 font-bold text-[#130f2b] lg:pt-14",
          children: ["The ", /* @__PURE__ */ jsx("span", {
            className: "text-[#00a980]",
            children: "easiest"
          }), " way to discover and compare", " ", /* @__PURE__ */ jsx("span", {
            className: "text-[#00a980]",
            children: "colleges"
          }), ".", " "]
        }), /* @__PURE__ */ jsx("img", {
          src: MobileImage,
          alt: "Mobile Preview",
          className: "mx-auto mt-10 h-[582px] w-[288px] rounded-2xl md:col-start-2 md:col-end-2 md:row-span-full md:mx-0 md:mt-0"
        }), /* @__PURE__ */ jsx("p", {
          className: "pt-10 text-2xl font-medium text-[#434345] md:col-start-1 md:row-start-2",
          children: "Find colleges and universities near you or across the country—explore enrollment, degrees, and more with College Locator."
        }), /* @__PURE__ */ jsx("img", {
          src: AppStoreIcon,
          alt: "Download on the App Store",
          className: "mx-auto w-48 pt-14 md:mx-0"
        })]
      })
    })
  });
});
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta: meta$2
}, Symbol.toStringTag, { value: "Module" }));
function meta$1({}) {
  return [{
    title: "Privacy Page"
  }];
}
const privacy = UNSAFE_withComponentProps(function Home2() {
  return /* @__PURE__ */ jsxs("div", {
    className: "mx-auto max-w-6xl bg-white p-10 pt-8 font-sans font-light text-black lg:px-20",
    children: [/* @__PURE__ */ jsx("strong", {
      className: "text-xl font-bold",
      children: "Privacy Policy"
    }), /* @__PURE__ */ jsx("p", {
      children: 'This privacy policy applies to the College Locator app (hereby referred to as "Application") for mobile devices that was created by Josh Shavers (hereby referred to as "Service Provider") as a Free service. This service is intended for use "AS IS".'
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("strong", {
      className: "text-xl font-bold",
      children: "Information Collection and Use"
    }), /* @__PURE__ */ jsxs("p", {
      children: ["The Application collects information when you download and use it. This information may include information such as", " "]
    }), /* @__PURE__ */ jsxs("ul", {
      className: "list-disc pl-10",
      children: [/* @__PURE__ */ jsx("li", {
        children: "Your device's Internet Protocol address (e.g. IP address)"
      }), /* @__PURE__ */ jsx("li", {
        children: "The pages of the Application that you visit, the time and date of your visit, the time spent on those pages"
      }), /* @__PURE__ */ jsx("li", {
        children: "The time spent on the Application"
      }), /* @__PURE__ */ jsx("li", {
        children: "The operating system you use on your mobile device"
      })]
    }), /* @__PURE__ */ jsx("p", {}), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
      className: "pb-5",
      children: "The Application does not gather precise information about the location of your mobile device."
    }), /* @__PURE__ */ jsxs("div", {
      className: "display: none;",
      children: [/* @__PURE__ */ jsx("p", {
        children: "The Application collects your device's location, which helps the Service Provider determine your approximate geographical location and make use of in below ways:"
      }), /* @__PURE__ */ jsxs("ul", {
        className: "list-disc pl-10",
        children: [/* @__PURE__ */ jsx("li", {
          children: "Geolocation Services: The Service Provider utilizes location data to provide features such as personalized content, relevant recommendations, and location-based services."
        }), /* @__PURE__ */ jsx("li", {
          children: "Analytics and Improvements: Aggregated and anonymized location data helps the Service Provider to analyze user behavior, identify trends, and improve the overall performance and functionality of the Application."
        }), /* @__PURE__ */ jsx("li", {
          children: "Third-Party Services: Periodically, the Service Provider may transmit anonymized location data to external services. These services assist them in enhancing the Application and optimizing their offerings."
        })]
      })]
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
      children: "The Service Provider may use the information you provided to contact you from time to time to provide you with important information, required notices and marketing promotions."
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
      children: "For a better experience, while using the Application, the Service Provider may require you to provide us with certain personally identifiable information, including but not limited to email, name, phone. The information that the Service Provider request will be retained by them and used as described in this privacy policy."
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("strong", {
      className: "text-xl font-bold",
      children: "Third Party Access"
    }), /* @__PURE__ */ jsx("p", {
      children: "Only aggregated, anonymized data is periodically transmitted to external services to aid the Service Provider in improving the Application and their service. The Service Provider may share your information with third parties in the ways that are described in this privacy statement."
    }), /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
        children: "Please note that the Application utilizes third-party services that have their own Privacy Policy about handling data. Below are the links to the Privacy Policy of the third-party service providers used by the Application:"
      }), /* @__PURE__ */ jsxs("ul", {
        className: "list-disc pl-10",
        children: [/* @__PURE__ */ jsx(Link, {
          to: "https://www.apple.com/legal/privacy/",
          children: /* @__PURE__ */ jsx("li", {
            className: "text-blue-600",
            children: "Apple"
          })
        }), /* @__PURE__ */ jsx(Link, {
          to: "https://policies.google.com/privacy",
          children: /* @__PURE__ */ jsx("li", {
            className: "text-blue-600",
            children: "Google Play Services"
          })
        }), /* @__PURE__ */ jsx(Link, {
          to: "https://supabase.com/privacy",
          children: /* @__PURE__ */ jsx("li", {
            className: "text-blue-600",
            children: "Supabase"
          })
        })]
      })]
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
      children: "The Service Provider may disclose User Provided and Automatically Collected Information:"
    }), /* @__PURE__ */ jsxs("ul", {
      className: "list-disc pl-10",
      children: [/* @__PURE__ */ jsx("li", {
        children: "as required by law, such as to comply with a subpoena, or similar legal process;"
      }), /* @__PURE__ */ jsx("li", {
        children: "when they believe in good faith that disclosure is necessary to protect their rights, protect your safety or the safety of others, investigate fraud, or respond to a government request;"
      }), /* @__PURE__ */ jsx("li", {
        children: "with their trusted services providers who work on their behalf, do not have an independent use of the information we disclose to them, and have agreed to adhere to the rules set forth in this privacy statement."
      })]
    }), /* @__PURE__ */ jsx("p", {}), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("strong", {
      className: "text-xl font-bold",
      children: "Opt-Out Rights"
    }), /* @__PURE__ */ jsx("p", {
      children: "You can stop all collection of information by the Application easily by uninstalling it. You may use the standard uninstall processes as may be available as part of your mobile device or via the mobile application marketplace or network."
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("strong", {
      className: "text-xl font-bold",
      children: "Data Retention Policy"
    }), /* @__PURE__ */ jsx("p", {
      children: "The Service Provider will retain User Provided data for as long as you use the Application and for a reasonable time thereafter. If you'd like them to delete User Provided Data that you have provided via the Application, please contact them at jshavers@gmail.com and they will respond in a reasonable time."
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("strong", {
      className: "text-xl font-bold",
      children: "Children"
    }), /* @__PURE__ */ jsx("p", {
      children: "The Service Provider does not use the Application to knowingly solicit data from or market to children under the age of 13."
    }), /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
        children: "The Application does not address anyone under the age of 13. The Service Provider does not knowingly collect personally identifiable information from children under 13 years of age. In the case the Service Provider discover that a child under 13 has provided personal information, the Service Provider will immediately delete this from their servers. If you are a parent or guardian and you are aware that your child has provided us with personal information, please contact the Service Provider (jshavers@gmail.com) so that they will be able to take the necessary actions."
      })]
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("strong", {
      className: "text-xl font-bold",
      children: "Security"
    }), /* @__PURE__ */ jsx("p", {
      children: "The Service Provider is concerned about safeguarding the confidentiality of your information. The Service Provider provides physical, electronic, and procedural safeguards to protect information the Service Provider processes and maintains."
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("strong", {
      className: "text-xl font-bold",
      children: "Changes"
    }), /* @__PURE__ */ jsx("p", {
      children: "This Privacy Policy may be updated from time to time for any reason. The Service Provider will notify you of any changes to the Privacy Policy by updating this page with the new Privacy Policy. You are advised to consult this Privacy Policy regularly for any changes, as continued use is deemed approval of all changes."
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
      children: "This privacy policy is effective as of 2025-06-06"
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("strong", {
      className: "text-xl font-bold",
      children: "Your Consent"
    }), /* @__PURE__ */ jsx("p", {
      children: "By using the Application, you are consenting to the processing of your information as set forth in this Privacy Policy now and as amended by us."
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("strong", {
      className: "text-xl font-bold",
      children: "Contact Us"
    }), /* @__PURE__ */ jsx("p", {
      children: "If you have any questions regarding privacy while using the Application, or have questions about the practices, please contact the Service Provider via email at jshavers@gmail.com."
    })]
  });
});
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: privacy,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
function meta({}) {
  return [{
    title: "Terms of Service"
  }];
}
const terms = UNSAFE_withComponentProps(function Home3() {
  return /* @__PURE__ */ jsxs("div", {
    className: "mx-auto max-w-6xl bg-white p-10 pt-8 font-sans font-light text-black lg:px-20",
    children: [/* @__PURE__ */ jsx("strong", {
      className: "text-xl font-bold",
      children: "Terms & Conditions"
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
      children: 'These terms and conditions apply to the College Locator app (hereby referred to as "Application") for mobile devices that was created by Josh Shavers (hereby referred to as "Service Provider") as a Free service.'
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
      children: "Upon downloading or utilizing the Application, you are automatically agreeing to the following terms. It is strongly advised that you thoroughly read and understand these terms prior to using the Application. Unauthorized copying, modification of the Application, any part of the Application, or our trademarks is strictly prohibited. Any attempts to extract the source code of the Application, translate the Application into other languages, or create derivative versions are not permitted. All trademarks, copyrights, database rights, and other intellectual property rights related to the Application remain the property of the Service Provider."
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
      children: "The Service Provider is dedicated to ensuring that the Application is as beneficial and efficient as possible. As such, they reserve the right to modify the Application or charge for their services at any time and for any reason. The Service Provider assures you that any charges for the Application or its services will be clearly communicated to you."
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
      children: "The Application stores and processes personal data that you have provided to the Service Provider in order to provide the Service. It is your responsibility to maintain the security of your phone and access to the Application. The Service Provider strongly advise against jailbreaking or rooting your phone, which involves removing software restrictions and limitations imposed by the official operating system of your device. Such actions could expose your phone to malware, viruses, malicious programs, compromise your phone's security features, and may result in the Application not functioning correctly or at all."
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsxs("div", {
      children: [/* @__PURE__ */ jsx("p", {
        children: "Please note that the Application utilizes third-party services that have their own Terms and Conditions. Below are the links to the Terms and Conditions of the third-party service providers used by the Application:"
      }), /* @__PURE__ */ jsxs("ul", {
        className: "list-disc pl-10",
        children: [/* @__PURE__ */ jsx(Link, {
          to: "https://www.apple.com/legal/privacy/",
          children: /* @__PURE__ */ jsx("li", {
            className: "text-blue-600",
            children: "Apple"
          })
        }), /* @__PURE__ */ jsx(Link, {
          to: "https://policies.google.com/privacy",
          children: /* @__PURE__ */ jsx("li", {
            className: "text-blue-600",
            children: "Google Play Services"
          })
        }), /* @__PURE__ */ jsx(Link, {
          to: "https://supabase.com/privacy",
          children: /* @__PURE__ */ jsx("li", {
            className: "text-blue-600",
            children: "Supabase"
          })
        })]
      })]
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
      children: "Please be aware that the Service Provider does not assume responsibility for certain aspects. Some functions of the Application require an active internet connection, which can be Wi-Fi or provided by your mobile network provider. The Service Provider cannot be held responsible if the Application does not function at full capacity due to lack of access to Wi-Fi or if you have exhausted your data allowance."
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
      children: "If you are using the application outside of a Wi-Fi area, please be aware that your mobile network provider's agreement terms still apply. Consequently, you may incur charges from your mobile provider for data usage during the connection to the application, or other third-party charges. By using the application, you accept responsibility for any such charges, including roaming data charges if you use the application outside of your home territory (i.e., region or country) without disabling data roaming. If you are not the bill payer for the device on which you are using the application, they assume that you have obtained permission from the bill payer."
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
      children: "Similarly, the Service Provider cannot always assume responsibility for your usage of the application. For instance, it is your responsibility to ensure that your device remains charged. If your device runs out of battery and you are unable to access the Service, the Service Provider cannot be held responsible."
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
      children: "In terms of the Service Provider's responsibility for your use of the application, it is important to note that while they strive to ensure that it is updated and accurate at all times, they do rely on third parties to provide information to them so that they can make it available to you. The Service Provider accepts no liability for any loss, direct or indirect, that you experience as a result of relying entirely on this functionality of the application."
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
      children: "The Service Provider may wish to update the application at some point. The application is currently available as per the requirements for the operating system (and for any additional systems they decide to extend the availability of the application to) may change, and you will need to download the updates if you want to continue using the application. The Service Provider does not guarantee that it will always update the application so that it is relevant to you and/or compatible with the particular operating system version installed on your device. However, you agree to always accept updates to the application when offered to you. The Service Provider may also wish to cease providing the application and may terminate its use at any time without providing termination notice to you. Unless they inform you otherwise, upon any termination, (a) the rights and licenses granted to you in these terms will end; (b) you must cease using the application, and (if necessary) delete it from your device."
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("strong", {
      className: "text-xl font-bold",
      children: "Changes to These Terms and Conditions"
    }), /* @__PURE__ */ jsx("p", {
      children: "The Service Provider may periodically update their Terms and Conditions. Therefore, you are advised to review this page regularly for any changes. The Service Provider will notify you of any changes by posting the new Terms and Conditions on this page."
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("p", {
      children: "These terms and conditions are effective as of 2025-06-06"
    }), /* @__PURE__ */ jsx("br", {}), /* @__PURE__ */ jsx("strong", {
      className: "text-xl font-bold",
      children: "Contact Us"
    }), /* @__PURE__ */ jsx("p", {
      children: "If you have any questions or suggestions about the Terms and Conditions, please do not hesitate to contact the Service Provider at jshavers@gmail.com."
    })]
  });
});
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: terms,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/college-locator-legalassets/entry.client-DkZ06MSI.js", "imports": ["/college-locator-legalassets/chunk-NL6KNZEE-3nYTMV1x.js", "/college-locator-legalassets/index-DMxfXSVL.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/college-locator-legalassets/root-2O8LCN0Y.js", "imports": ["/college-locator-legalassets/chunk-NL6KNZEE-3nYTMV1x.js", "/college-locator-legalassets/index-DMxfXSVL.js"], "css": ["/college-locator-legalassets/root-CwaGEgns.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/layout": { "id": "routes/layout", "parentId": "root", "path": "/", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/college-locator-legalassets/layout-20ZpxEBb.js", "imports": ["/college-locator-legalassets/chunk-NL6KNZEE-3nYTMV1x.js", "/college-locator-legalassets/index-DMxfXSVL.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "routes/layout", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/college-locator-legalassets/home-CuJmHDMn.js", "imports": ["/college-locator-legalassets/chunk-NL6KNZEE-3nYTMV1x.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/privacy": { "id": "routes/privacy", "parentId": "routes/layout", "path": "privacy", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/college-locator-legalassets/privacy-BubYgnd1.js", "imports": ["/college-locator-legalassets/chunk-NL6KNZEE-3nYTMV1x.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/terms": { "id": "routes/terms", "parentId": "routes/layout", "path": "terms", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/college-locator-legalassets/terms-BC6EJL7N.js", "imports": ["/college-locator-legalassets/chunk-NL6KNZEE-3nYTMV1x.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/college-locator-legalassets/manifest-c6d0d9bb.js", "version": "c6d0d9bb", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/college-locator-legal";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/layout": {
    id: "routes/layout",
    parentId: "root",
    path: "/",
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/home": {
    id: "routes/home",
    parentId: "routes/layout",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/privacy": {
    id: "routes/privacy",
    parentId: "routes/layout",
    path: "privacy",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/terms": {
    id: "routes/terms",
    parentId: "routes/layout",
    path: "terms",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
