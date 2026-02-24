import Image from "next/image";
import Link from "next/link";
import { ProjectProps } from "../interfaces/interface";
import { Inset } from "@radix-ui/themes";

interface ItemProjectProps {
  items: ProjectProps[];
  limit?: number;
}

const ProjectList: React.FC<ItemProjectProps> = ({ items, limit }) => {
  const sortedItems = [...items].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  limit = 3;

  const limitedItems = limit ? sortedItems.slice(0, limit) : sortedItems;

  return (
    <div
      className="flex flex-col justify-self-center px-3
      lg:grid lg:grid-cols-2
    gap-10 items-center lg:max-w-5/8"
    >
      {limitedItems.map((item) => (
        <Link
          href={`/projects/${item.slug || item.title.toLowerCase()}`}
          className="w-full
          shrink-0 hover:scale-101 duration-200 ease-in-out 
          rounded-2xl mt-5 align-bottom shadow-xl
          "
          key={item.title}
        >
          <Image
            src={`/img/${item.img}`}
            alt="background"
            width={500}
            height={500}
            loading="eager"
            className="w-full object-fit rounded-xl "
          />

          <div className="flex flex-col gap-2 px-2 ">
            <h3 className="text-3xl font-extrabold line-clamp-2 ">
              {item.title}
            </h3>
            <p className="text-wrap font-extralight text-sm line-clamp-3 pb-5">
              {item.description}
            </p>
          </div>
        </Link>
      ))}
      {/* <div> */}
      <Link
        href={`/projects/`}
        className="w-full
          shrink-0 hover:scale-101 duration-200 ease-in-out 
          rounded-2xl p-10 mt-5 align-bottom shadow-xl"
      >
        <Image
          src={`/img/others.png`}
          alt="background"
          width={500}
          height={500}
          loading="eager"
          className="rounded-xl max-w-1/2 "
        />
        <div className="flex flex-col gap-2 px-2">
          <h3 className="text-3xl font-extrabold line-clamp-2">
            Mas proyectos
          </h3>
          <p className="text-wrap font-extralight text-sm line-clamp-3">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Atque amet
            quas voluptatibus porro neque esse consequatur minima, beatae,
            facilis earum illo rerum accusamus! Minima quas culpa, accusamus
            maxime soluta corrupti.
          </p>
        </div>
      </Link>
    </div>
  );
};

export default ProjectList;
