import { useRoutes } from "react-router-dom";
import { lazy, Suspense } from "react";

import path from "./constants/path";
import MainLayout from "./layouts/MainLayout";

const Home = lazy(() => import("./pages/Home"));
const RecipeDetail = lazy(() => import("./pages/RecipeDetail"));

export default function useRouteElements() {
  const routeElements = useRoutes([
    {
      path: "",
      element: <MainLayout />,
      children: [
        {
          index: true,
          path: path.home,
          element: (
            <Suspense>
              <Home />
            </Suspense>
          ),
        },
        {
          path: path.recipeDetail,
          element: (
            <Suspense>
              <RecipeDetail />
            </Suspense>
          ),
        },
      ],
    },
  ]);
  return routeElements;
}
