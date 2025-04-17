import type { Route } from "./+types/routeResume";
import { Resume } from "~/pages/resume";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "ANGELO BUSTAMANTE | RESUME" },
    { name: "description", content: "Welcome to my portfolio!" },
  ];
}

export default function RouteResume() {
  return <Resume />;
}
