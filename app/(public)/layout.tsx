
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Chatbot from "@/components/chatbot/chatbot";
import ScrollToTop from "@/components/layout/scroll-to-top";

export default function PublicLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            <Header />
            <main className="pt-20 lg:pt-[88px]">{children}</main>
            <Footer />
            <ScrollToTop />
            <Chatbot />
        </>
    );
}
