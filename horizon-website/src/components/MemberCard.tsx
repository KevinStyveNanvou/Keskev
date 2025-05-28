// import Image from 'next/image'; // Keep if you configure domains or use local images

export interface Member {
  id: string | number;
  name: string;
  role: string;
  bio: string;
  imageUrl: string;
}

interface MemberCardProps {
  member: Member;
}

const MemberCard: React.FC<MemberCardProps> = ({ member }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-2xl flex flex-col dark:bg-dark-card dark:hover:shadow-[0_0_15px_5px_rgba(0,0,150,0.3)]">
      <div className="relative w-full h-56 sm:h-64">
        {/* Using standard img tag for easier use with external placeholders like via.placeholder.com */}
        <img
          src={member.imageUrl}
          alt={`Photo de ${member.name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 flex-grow"> {/* Added flex-grow here */}
        <h3 className="text-2xl font-semibold text-gray-800 mb-1 dark:text-gray-100">{member.name}</h3>
        <p className="text-sm font-medium text-blue-600 mb-3 dark:text-blue-400">{member.role}</p>
        <p className="text-gray-600 text-sm leading-relaxed dark:text-gray-300">{member.bio}</p>
      </div>
    </div>
  );
};

export default MemberCard;
