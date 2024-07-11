import { render } from "solid-js/web";
import { App } from "./App";
import { QueryClientProvider } from "@tanstack/solid-query";
import { queryClient } from "../queryClient";

const root = document.getElementById("root");

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  ),
  root!
);
