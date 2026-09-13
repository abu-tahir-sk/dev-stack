import type { Technology } from "../types/technology";
import { FiX } from "react-icons/fi";

type YourStackProps = {
  stack: Technology[];
  onRemove: (id: string) => void;
  onRemoveAll: () => void;
};

const YourStack = ({
  stack,
  onRemove,
  onRemoveAll,
}: YourStackProps) => {
  return (
    <aside className="w-full lg:w-[250px] border border-gray-200 rounded-xl p-4 bg-white h-fit lg:sticky lg:top-24">

      <h2 className="text-sm font-bold text-gray-800">
        Your Stack
      </h2>

      <p className="text-[9px] text-gray-400 mt-1">
        {stack.length}{" "}
        {stack.length === 1
          ? "Technology"
          : "Technologies"}{" "}
        Selected
      </p>

      {stack.length === 0 ? (
        <div className="border border-dashed border-gray-200 rounded-lg mt-5 p-8 text-center">
          <p className="text-[10px] text-gray-400">
            Your stack is empty.
          </p>

          <p className="text-[8px] text-gray-300 mt-1">
            Add technologies to build your stack.
          </p>
        </div>
      ) : (
        <>
          <div className="flex flex-col gap-2 mt-5">
            {stack.map((technology) => (
              <div
                key={technology.id}
                className="flex items-center gap-2 border border-gray-200 rounded-lg p-2"
              >
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="w-6 h-6 object-contain"
                />

                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold text-gray-800 truncate">
                    {technology.name}
                  </p>

                  <p className="text-[8px] text-gray-400">
                    {technology.category}
                  </p>
                </div>

                <button
                  onClick={() => onRemove(technology.id)}
                  className="text-gray-400 hover:text-red-500 text-sm px-1"
                  aria-label={`Remove ${technology.name}`}
                >
                   <FiX size={20} />
                </button>
              </div>
            ))}
          </div>

          <button
            onClick={onRemoveAll}
            className="w-full mt-4 border border-red-200 text-red-500 text-[12px] font-semibold py-2 rounded-md hover:bg-red-50"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
};

export default YourStack;