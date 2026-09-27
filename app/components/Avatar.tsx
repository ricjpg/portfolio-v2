import Image from "next/image";
import { PicProps } from "../interfaces/interface";

interface ItemPicProps {
  items: PicProps[];
  size?: number | string;
}

const Avatar: React.FC<ItemPicProps> = ({ items, size = 208 }) => {
  const avatarSize = typeof size === "number" ? `${size}px` : size;

  return (
    <div
      className="overflow-hidden rounded-full border border-gray-200 bg-gray-100 shadow-sm dark:border-gray-800 dark:bg-gray-900"
      style={{ width: avatarSize, height: avatarSize }}>
      <Image
        src={items[0].src}
        alt={items[0].alt}
        width={400}
        height={400}
        loading="eager"
        className="size-full object-cover"
      />
    </div>
  );
};

export default Avatar;
