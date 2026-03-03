import { DownloadIcon } from "@radix-ui/react-icons";
import { Button } from "@radix-ui/themes";
import { useLanguage } from "../lib/LanguageContext";

const DownloadButton: React.FC = () => {
  const { t } = useLanguage();
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/cv.pdf";
    link.download = "cv.pdf";
    link.click();
  };
  return (
    <Button
      color="crimson"
      variant="outline"
      size={"3"}
      ml={"2"}
      className="max-w-1/2"
      onClick={handleDownload}
    >
      <DownloadIcon /> {t.hero.downloadCV}
    </Button>
  );
};

export default DownloadButton;
