
import Header from "@/components/shared/header/index";
import Footer from "@/components/shared/footer";
import { ScrollToTop } from "@/components/ui/scroll-to-top";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
      <ScrollToTop />
    </div>
  );
}
