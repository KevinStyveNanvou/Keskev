import SolutionCard, { Solution } from '@/components/SolutionCard'; // Assuming SolutionCard is in src/components

const solutions: Solution[] = [
  {
    id: 1,
    title: 'Développement Web IA',
    description: 'Création de sites web intelligents et interactifs, optimisés par l\'IA pour une expérience utilisateur unique.',
    icon: '🌐', // Using an emoji as a placeholder icon
  },
  {
    id: 2,
    title: 'Analyse de Données Avancée',
    description: 'Transformation de vos données brutes en informations stratégiques grâce à nos outils d\'analyse et de visualisation.',
    icon: '📊', // Using an emoji as a placeholder icon
  },
  {
    id: 3,
    title: 'Automatisation des Processus (RPA)',
    description: 'Optimisation de vos opérations grâce à l\'automatisation robotisée des processus répétitifs et chronophages.',
    icon: '🤖', // Using an emoji as a placeholder icon
  },
  {
    id: 4,
    title: 'Conseil en Transformation Numérique',
    description: 'Accompagnement stratégique pour intégrer les technologies numériques au cœur de votre entreprise.',
    icon: '💡', // Using an emoji as a placeholder icon
  },
];

const SolutionsPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-6">
        Nos Solutions
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12 max-w-3xl mx-auto dark:text-gray-300">
        Découvrez comment Horizon transforme les entreprises grâce à des solutions technologiques de pointe en numérisation et intelligence artificielle. Nous nous engageons à fournir des outils innovants pour optimiser vos performances et stimuler votre croissance.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {solutions.map((solution) => (
          <SolutionCard key={solution.id} solution={solution} />
        ))}
      </div>
    </div>
  );
};

export default SolutionsPage;
