import classNames from "classnames";
import Recipe from "../../components/Recipe";

export default function Home() {
  const mockData = [
    {
      id: "1",
      image: "https://themewagon.github.io/yummy2/img/recipe/recipe-1.jpg",
      name: "One Pot Weeknight Soup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      category: ["desert", "spicy"],
    },
    {
      id: "2",
      image: "https://themewagon.github.io/yummy2/img/recipe/recipe-1.jpg",
      name: "One Pot Weeknight Soup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      category: ["desert", "spicy"],
    },
    {
      id: "3",
      image: "https://themewagon.github.io/yummy2/img/recipe/recipe-1.jpg",
      name: "One Pot Weeknight Soup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      category: ["desert", "spicy"],
    },
    {
      id: "4",
      image: "https://themewagon.github.io/yummy2/img/recipe/recipe-1.jpg",
      name: "One Pot Weeknight Soup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      category: ["desert"],
    },
    {
      id: "5",
      image: "https://themewagon.github.io/yummy2/img/recipe/recipe-1.jpg",
      name: "One Pot Weeknight Soup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      category: ["desert"],
    },
    {
      id: "6",
      image: "https://themewagon.github.io/yummy2/img/recipe/recipe-1.jpg",
      name: "One Pot Weeknight Soup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      category: ["desert"],
    },
    {
      id: "7",
      image: "https://themewagon.github.io/yummy2/img/recipe/recipe-1.jpg",
      name: "One Pot Weeknight Soup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      category: ["desert"],
    },
    {
      id: "8",
      image: "https://themewagon.github.io/yummy2/img/recipe/recipe-1.jpg",
      name: "One Pot Weeknight Soup",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet.",
      category: ["desert"],
    },
  ];

  return (
    <div className="container py-20">
      <div className="col-span-10 mb-20">
        <div className="mt-6 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {mockData.map((recipe) => (
            <div className="col-span-1" key={recipe.id}>
              <Recipe recipe={recipe} />
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-row justify-start items-center">
        <button
          className={classNames(
            "w-[40px] h-[40px]  hover:bg-primary hover:text-white transition-all",
            {
              "bg-primary text-white": true,
              "bg-white text-black": false,
            }
          )}
        >
          01
        </button>
        <button
          className={classNames(
            "w-[40px] h-[40px]  hover:bg-primary hover:text-white transition-all",
            {
              "bg-primary text-white": false,
              "bg-white text-black": true,
            }
          )}
        >
          02
        </button>
        <button
          className={classNames(
            "w-[40px] h-[40px]  hover:bg-primary hover:text-white transition-all",
            {
              "bg-primary text-white": false,
              "bg-white text-black": true,
            }
          )}
        >
          03
        </button>
        <button
          className={classNames(
            "w-[40px] h-[40px]  hover:bg-primary hover:text-white transition-all",
            {
              "bg-primary text-white": false,
              "bg-white text-black": true,
            }
          )}
        >
          04
        </button>
        <button
          className={classNames(
            "w-[40px] h-[40px]  hover:bg-primary hover:text-white transition-all",
            {
              "bg-primary text-white": false,
              "bg-white text-black": true,
            }
          )}
        >
          Next
        </button>
      </div>
    </div>
  );
}
