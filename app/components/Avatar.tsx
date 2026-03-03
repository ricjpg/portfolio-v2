import Image from "next/image";
import { PicProps } from "../interfaces/interface";

interface ItemPicProps {
  items: PicProps[];
}

const Avatar: React.FC<ItemPicProps> = ({ items }) => {
  return (
    <div
      className="w-96 h-96 rounded-full overflow-hidden border-2 border-dotted
     border-gray-400 outline-2 outline-offset-5 outline-gray-400 outline-dotted"
    >
      <Image
        src={items[0].src}
        alt={items[0].alt}
        width={400}
        height={400}
        loading="eager"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default Avatar;
