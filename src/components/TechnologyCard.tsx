import { FaCheck, FaStar } from "react-icons/fa";
import type { Technology } from "../types/technology";

type TechnologyCardProps = {
  technology: Technology;
  isAdded: boolean;
  onAdd: (technology: Technology) => void;
};

const TechnologyCard = ({
  technology,
  isAdded,
  onAdd,
}: TechnologyCardProps) => {
  return (
    <div
      className={`
        rounded-xl
        p-4
        bg-white
        transition-all
        duration-200

        ${
          isAdded
            ? `
              border-2
              border-pink-500
              shadow-sm
              opacity-70
            `
            : `
              border
              border-gray-200
              hover:-translate-y-1
              hover:shadow-lg
              hover:border-pink-300
            `
        }
      `}
    >
    
      <div className="flex items-center justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="w-7 h-7 object-contain"
        />

        <span
          className="
            text-[9px]
            px-2
            py-1
            rounded-full
            bg-pink-50
            text-pink-400
          "
        >
          {technology.badge}
        </span>
      </div>

      
      <h3 className="text-sm font-bold text-gray-800 mt-3">
        {technology.name}
      </h3>

      
      <p className="text-[10px] text-gray-500 leading-4 mt-2 min-h-[48px]">
        {technology.description}
      </p>

      <div className="flex items-center justify-between mt-3 gap-1">
        <span className="text-[8px] bg-gray-100 px-2 py-1 rounded">
          {technology.category}
        </span>

        <span className="text-[8px] text-gray-500">
          {technology.difficulty}
        </span>

        
        <span className="flex items-center gap-1 text-[9px] text-gray-600">
          <FaStar className="text-yellow-500" size={10} />
          {technology.rating}
        </span>
      </div>

     <button
  onClick={() => onAdd(technology)}
  disabled={isAdded}
  className={`
    w-full
    mt-3
    py-2
    rounded-md
    text-[9px]
    font-medium
    text-white
    transition-all
    duration-200
    bg-gradient-to-r
    from-orange-500
    via-pink-500
    to-violet-500

    ${
      isAdded
        ? `
          opacity-50
          cursor-not-allowed
        `
        : `
          opacity-100
          hover:brightness-110
          hover:shadow-md
          hover:-translate-y-[1px]
          active:translate-y-0
        `
    }
  `}
>
  {isAdded ? (
    <span className="flex items-center justify-center gap-1">
      <FaCheck size={9} />
      Added to Stack
    </span>
  ) : (
    "Add to Stack"
  )}
</button>
    </div>
  );
};

export default TechnologyCard;