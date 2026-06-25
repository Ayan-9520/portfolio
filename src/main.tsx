import { createRoot } from "react-dom/client";
import App from "./App";
import "lenis/dist/lenis.css";
import "./index.css";
import { initTheme } from "@/hooks/ThemeProvider";

initTheme();

createRoot(document.getElementById("root")!).render(<App />);
