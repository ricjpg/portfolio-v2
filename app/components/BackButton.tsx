import { ResetIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

interface buttonProps {
  title: string;
  path: string;
}

const BackButton: React.FC<buttonProps> = ({ title, path }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(path);
  };
  return (
    <Button size="4" className="justify-items-center" onClick={handleClick}>
      <ResetIcon />
      {title}
    </Button>
  );
};

export default BackButton;
