import { createRootRoute, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import MainLayout from '../layouts/MainLayout';

export const Route = createRootRoute({
  component: () => (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
      <TanStackRouterDevtools />
    </>
  ),
});
