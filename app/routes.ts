import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("basic", "routes/basic/index.jsx"),
  route("cute-tutorials", "routes/cute-tutorials/index.jsx"),
] satisfies RouteConfig;
