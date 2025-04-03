import { ReactNode } from 'react';
import Footer from '../components/footer';
import NavBar from '../components/navbar';

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
