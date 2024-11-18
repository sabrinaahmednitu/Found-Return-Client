import FXForm from "@/src/components/form/FXForm";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { useFormContext } from "react-hook-form";

export default function LoginPage() {
  const { } = useFormContext();
  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div>
      <div className="flex h-[calc(100vh-200px)] w-full flex-col items-center justify-center">
        <h3 className="my-2 text-2xl font-bold">Login with FoundX</h3>
        <p className="mb-4">Welcome Back ! Let's Started</p>
        <div className="w-[35%]">
          <FXForm onSubmit={onSubmit}>
            <div className="py-3">
              <Input type="text" />
            </div>
            <div className="py-3">
              <Input type="text" />
            </div>
            <Button>

            </Button>
          </FXForm>
        </div>
      </div>
    </div>
  );
}
