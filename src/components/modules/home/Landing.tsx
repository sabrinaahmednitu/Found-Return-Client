import { Input } from "@nextui-org/input";

import sea from "../../../assets/sea.jpg";
import { SearchIcon } from "../../icons";

export default function Landing() {
  return (
    <div
      className="h-[calc(60vh-64px)] bg-cover bg-center"
      style={{ backgroundImage: `url(${sea.src})` }}
    >
      <div className="pt-32 max-w-xl flex-1 mx-auto">
        <form className="flex-1">
          <Input
            aria-label="Search"
            classNames={{
              inputWrapper: "bg-default-100",
              input: "text-sm",
            }}
            placeholder="Search..."
            size="lg"
            startContent={
              <SearchIcon className="pointer-events-none flex-shrink-0 text-base text-default-100" />
            }
            type="text"
          />
        </form>
      </div>
    </div>
  );
}
