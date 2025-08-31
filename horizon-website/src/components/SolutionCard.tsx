export interface Solution {
  id: string | number;
  title: string;
  description: string;
  icon?: string; // For now, a text placeholder like "[Icone]" or an emoji
}

interface SolutionCardProps {
  solution: Solution;
}

const SolutionCard: React.FC<SolutionCardProps> = ({ solution }) => {
  return (
    <div className="bg-white shadow-xl rounded-lg p-6 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-2xl dark:bg-dark-card dark:hover:shadow-[0_0_15px_5px_rgba(66,153,225,0.3)]"> {/* Adjusted dark hover shadow to use blue from dark.primary */}
      {solution.icon && (
        <div className="text-4xl mb-4 text-blue-600 dark:text-blue-400">
          {/* This could be an SVG, an emoji, or a class for an icon font */}
          {solution.icon}
        </div>
      )}
      <h3 className="text-xl font-semibold text-gray-800 mb-2 dark:text-gray-100">{solution.title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">{solution.description}</p>
    </div>
  );
};

export default SolutionCard;
