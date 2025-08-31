import Link from 'next/link';
import dynamic from 'next/dynamic';

// Dynamically import the 3D text component with SSR disabled
const Dynamic3DText = dynamic(() => import('@/components/Dynamic3DText'), {
  ssr: false,
  loading: () => <p className="text-gray-400 text-center h-64 flex items-center justify-center">Chargement du texte 3D...</p>,
});

const HomePage = () => {
  return (
    <div className="flex flex-col items-center text-center">
      {/* Hero Section */}
      <section className="w-full py-20 md:py-32 bg-gradient-to-b from-blue-50 via-white to-white dark:from-blue-900/30 dark:via-dark-background dark:to-dark-background transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-1 lg:gap-x-12 items-center">
            <div className="space-y-4">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl text-gray-900 dark:text-gray-100">
                Bienvenue chez <span className="text-blue-600 dark:text-dark-primary">Horizon</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl dark:text-gray-300">
                Nous façonnons l'avenir avec des solutions innovantes et une technologie de pointe.
                Horizon est votre partenaire pour la transformation numérique et la croissance.
              </p>
              <div className="mt-6">
                <Link
                  href="/solutions"
                  className="inline-flex h-12 items-center justify-center rounded-md bg-blue-600 px-8 text-base font-medium text-white shadow-md transition-colors hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-dark-primary dark:hover:bg-blue-500"
                >
                  Découvrez nos solutions
                </Link>
              </div>
            </div>
            {/* Dynamic 3D Text component integration */}
            <div className="mt-12 h-48 sm:h-56 md:h-64 w-full flex items-center justify-center rounded-lg bg-gray-100/50 dark:bg-gray-800/30 shadow-inner">
              <Dynamic3DText text="Horizon" textColor="#2563eb" hoverTextColor="#1e40af" fontSize={1.5} /> {/* Adjusted fontSize, added hoverTextColor explicitly */}
            </div>
          </div>
        </div>
      </section>

      {/* Other sections can be added below */}
      <section className="w-full py-12 md:py-24 bg-white dark:bg-dark-background transition-colors duration-300">
        <div className="container mx-auto px-4 md:px-6">
          <h2 className="text-3xl font-bold text-center text-gray-800 dark:text-gray-100 mb-12">Nos Engagements</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg text-center transition-transform hover:scale-105 dark:bg-dark-card dark:hover:shadow-[0_0_15px_5px_rgba(66,153,225,0.3)]">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Innovation</h3>
              <p className="text-gray-600 dark:text-gray-300">Repousser les limites de la technologie pour créer de la valeur.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg text-center transition-transform hover:scale-105 dark:bg-dark-card dark:hover:shadow-[0_0_15px_5px_rgba(66,153,225,0.3)]">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Collaboration</h3>
              <p className="text-gray-600 dark:text-gray-300">Travailler ensemble pour atteindre des objectifs communs.</p>
            </div>
            <div className="p-6 bg-gray-50 rounded-lg shadow-lg text-center transition-transform hover:scale-105 dark:bg-dark-card dark:hover:shadow-[0_0_15px_5px_rgba(66,153,225,0.3)]">
              <h3 className="text-xl font-semibold text-blue-600 dark:text-blue-400 mb-3">Excellence</h3>
              <p className="text-gray-600 dark:text-gray-300">Viser la plus haute qualité dans tout ce que nous faisons.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
