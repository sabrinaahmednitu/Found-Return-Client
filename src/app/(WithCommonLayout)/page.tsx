
import sea from '../../assets/sea.jpg'
import seaD from '../../assets/dolphin.jpg'
import { Input } from '@nextui-org/input';
export default function Home() {
  return (
    <section
      className="h-[calc(100vh-64px)] bg-cover bg-center"
      style={{ backgroundImage: `url(${sea.src})` }}
    >
      <Input></Input>
    </section>
  );
}
