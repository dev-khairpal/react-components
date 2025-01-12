import Button from "../components/Button";
import { FcBiohazard } from "react-icons/fc";

const ButtonsPage = () => {
  return (
    <div>
      <Button primary>
        <FcBiohazard />
        Primary
      </Button>
      <Button secondary>Secondary</Button>
      <Button danger rounded>
        Danger
      </Button>
    </div>
  );
};

export default ButtonsPage;
