import { QueryClientProvider } from "@tanstack/solid-query";
import { render } from "solid-js/web";
import { queryClient } from "../queryClient";
import { App } from "./App";

const root = document.getElementById("root");

if ((import.meta.env.DEV && !(root instanceof HTMLElement)) || !root) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?",
  );
}

render(
  () => (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  ),
  root,
);
