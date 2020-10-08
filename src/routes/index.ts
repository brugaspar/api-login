import userRoutes from "./users.route";
import authRoute from "./auth.route";

export default [
  ...userRoutes,
  ...authRoute
];