import sea from "../../assets/sea.jpg";
import { Input } from "@nextui-org/input";

export default function Landing() {
  return (
    <div>
      <section
        className="h-[calc(100vh-64px)] bg-cover bg-center"
        style={{ backgroundImage: `url(${sea.src})` }}
      >
        <Input></Input>
      </section>
    </div>
  );
}
