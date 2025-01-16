import { Select, SelectItem } from "@nextui-org/react";

export default function FXSelect() {
  return (
    <Select className="max-w-xs" label="Select an animal">
      {animals.map((animal) => (
        <SelectItem key={animal.key}>{animal.label}</SelectItem>
      ))}
    </Select>
  );
}