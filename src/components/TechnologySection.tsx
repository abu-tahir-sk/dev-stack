import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";

import type { Technology } from "../types/technology";

const TechnologySection = () => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [stack, setStack] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  
  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setLoading(true);

        const response = await fetch(
          "/data/technologies.json"
        );

        if (!response.ok) {
          throw new Error(
            "Failed to load technology data"
          );
        }

        const data: Technology[] =
          await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error(error);

        toast.error(
          "Failed to load technology data."
        );
      } finally {
        setLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  
  const handleAdd = (technology: Technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      toast.warning(
        `${technology.name} is already in your stack!`
      );

      return;
    }

    setStack((previousStack) => [
      ...previousStack,
      technology,
    ]);

    toast.success(
      `${technology.name} added to your stack!`
    );
  };

  
  const handleRemove = (id: string) => {
    const technology = stack.find(
      (item) => item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter(
        (item) => item.id !== id
      )
    );

    if (technology) {
      toast.info(
        `${technology.name} removed from your stack.`
      );
    }
  };

 
  const handleRemoveAll = () => {
    if (stack.length === 0) {
      return;
    }

    setStack([]);

    toast.info(
      "All technologies removed from your stack."
    );
  };

  return (
    <section
      id="technologies"
      className="max-w-7xl mx-auto px-4 py-12"
    >
     
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Explore the{" "}
          <span className="brand-gradient-text">
            Technologies
          </span>
        </h2>

        <p className="text-[10px] text-gray-400 mt-1">
          Pick technologies to build your ideal
          development stack.
        </p>
      </div>

      
      {loading ? (
        <div className="flex justify-center items-center py-24">
          <div className="text-center">
            <div
              className="
                w-10
                h-10
                border-4
                border-gray-200
                border-t-pink-500
                rounded-full
                animate-spin
                mx-auto
              "
            ></div>

            <p className="text-sm text-gray-500 mt-4">
              Loading technologies...
            </p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col lg:flex-row gap-5">

           {/* Technology Cards  */}
          <div
            className="
              flex-1
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-4
            "
          >
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some(
                  (item) =>
                    item.id === technology.id
                )}
                onAdd={handleAdd}
              />
            ))}
          </div>

          {/* Your Stack */}
          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />
        </div>
      )}
    </section>
  );
};

export default TechnologySection;