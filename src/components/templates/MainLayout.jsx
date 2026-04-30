import Navbar from "../organisms/Navbar";
import Hero from "../organisms/Hero";

export default function MainLayout({ children }) {
  return (
    <>
      <header class="pt-6 md:pt-10 pb-8 px-4 md:px-6">
        <div class="max-w-5xl mx-auto">
          <Navbar />
          <Hero />
        </div>
      </header>
      <main class="max-w-4xl mx-auto px-4 md:px-6 pb-20">{children}</main>
      <footer class="py-8 text-center border-t border-slate-50">
        <p class="text-[9px] font-black text-slate-300 uppercase tracking-[0.3em]">
          Mediva Health Retrieval
        </p>
      </footer>
    </>
  );
}
