import { Input } from '@nextui-org/input';
interface IProps {
  variant: 'flat' | 'bordered' | 'faded' | 'underlined';
  size: 'sm' | 'md' | 'lg';
  required: boolean;
}
export default function FXInput({
  variant = 'bordered',
  size = 'md',
  required = false,
}: IProps) {
  return <Input variant={variant} size={size} required={required} />;
}
