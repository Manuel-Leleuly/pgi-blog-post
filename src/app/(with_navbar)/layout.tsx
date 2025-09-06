import { Navbar } from '@/components/Navbar';
import { PageLayout } from '@/models/models';

export default function NavbarLayout({ children }: PageLayout) {
  return (
    <>
      <Navbar />
      {children}
    </>
  );
}
