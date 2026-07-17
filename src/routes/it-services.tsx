import { createFileRoute, Outlet } from "@tanstack/react-router";

export const Route = createFileRoute("/it-services")({
  component: () => <Outlet />,
});
