import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1 px-6 py-12 flex flex-col items-center">
        {/* your hero and content */}
      </main>

      <Footer />
    </div>
  );
}
