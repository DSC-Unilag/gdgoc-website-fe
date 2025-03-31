import { createFileRoute } from '@tanstack/react-router';
import Hero from '../components/Hero/hero';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  return <Hero />;
}
