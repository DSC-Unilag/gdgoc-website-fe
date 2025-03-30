import { ReactNode } from 'react';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';

interface LayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: LayoutProps) {
  return (
    <>
      <NavBar />
      <hr />
      <>{children}</>
      <hr />
      <Footer />
    </>
  );
}

export default MainLayout;
