import MemberCard, { Member } from '@/components/MemberCard'; // Assuming MemberCard is in src/components

const members: Member[] = [
  {
    id: 1,
    name: 'Alice Dupont',
    role: 'Développeuse Full-Stack IA',
    bio: 'Passionnée par l\'innovation et les solutions d\'IA qui transforment le quotidien.',
    imageUrl: 'https://via.placeholder.com/300x300.png?text=Alice+Dupont', // Placeholder image
  },
  {
    id: 2,
    name: 'Bob Martin',
    role: 'Chef de Projet Senior',
    bio: 'Expert en gestion de projets complexes et en leadership d\'équipes multidisciplinaires.',
    imageUrl: 'https://via.placeholder.com/300x300.png?text=Bob+Martin', // Placeholder image
  },
  {
    id: 3,
    name: 'Chloé Dubois',
    role: 'Spécialiste en Marketing Digital',
    bio: 'Créative et axée sur les résultats, Chloé élabore des stratégies marketing percutantes.',
    imageUrl: 'https://via.placeholder.com/300x300.png?text=Chlo%C3%A9+Dubois', // Placeholder image
  },
  {
    id: 4,
    name: 'David Moreau',
    role: 'Architecte Cloud & DevOps',
    bio: 'Conçoit des infrastructures cloud robustes, scalables et sécurisées pour nos solutions.',
    imageUrl: 'https://via.placeholder.com/300x300.png?text=David+Moreau', // Placeholder image
  },
];

const MembersPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 dark:text-gray-100 mb-4">
        Nos Membres
      </h1>
      <p className="text-lg text-gray-600 text-center mb-12 dark:text-gray-300">
        Rencontrez l'équipe passionnée et talentueuse derrière Horizon.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {members.map((member) => (
          <MemberCard key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
};

export default MembersPage;
