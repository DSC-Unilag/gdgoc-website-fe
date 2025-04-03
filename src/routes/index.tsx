import { useEffect } from 'react';
import { createFileRoute, useMatch } from '@tanstack/react-router';
import HomePage from '../components/home';

export const Route = createFileRoute('/')({
  component: RouteComponent,
});

function RouteComponent() {
  const match = useMatch({ from: '/' });

  useEffect(() => {
    if (match) {
      document.body.style.backgroundColor = '#f1f3f4';
    }
    return () => {
      document.body.style.backgroundColor = '#FFFFFF';
    };
  }, [match]);
  return <HomePage />;
}
