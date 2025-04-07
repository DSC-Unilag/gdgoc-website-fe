import { createRootRoute, Outlet } from '@tanstack/react-router';
import MainLayout from '../layouts/MainLayout';

export const Route = createRootRoute({
  component: () => (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  ),
});
