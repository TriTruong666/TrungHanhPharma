// React core
import { createElement } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
<<<<<<< HEAD

=======
>>>>>>> 372026472d5261a32b27c31933e5e6920e6a4cbb
// TanStack Query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
// Router
import router from "@/router";

// Tailwind stylesheet
import "@/css/tailwind.scss";
// Your stylesheet
import "@/css/app.scss";

// Expose app configuration
import appConfig from "../app-config.json";

if (!window.APP_CONFIG) {
  window.APP_CONFIG = appConfig;
}

<<<<<<< HEAD
// Initialize TanStack Query client
const queryClient = new QueryClient();
const urlParams = new URLSearchParams(window.location.search);
const appEnv = urlParams.get("env");
// Mount the app
const root = createRoot(document.getElementById("app")!);
=======
// Mount the app
const root = createRoot(document.getElementById("app")!);
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1, // Number of retry attempts
      refetchOnWindowFocus: false, // Disable refetching on window focus
    },
  },
});
const urlParams = new URLSearchParams(window.location.search);
const appEnv = urlParams.get("env");
>>>>>>> 372026472d5261a32b27c31933e5e6920e6a4cbb
root.render(
  createElement(
    QueryClientProvider,
    { client: queryClient },
    createElement(RouterProvider, { router }),
    appEnv !== "DEVELOPMENT" &&
      appEnv !== "TESTING" &&
      createElement(ReactQueryDevtools, { initialIsOpen: false })
  )
);
