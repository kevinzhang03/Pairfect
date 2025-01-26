import LoginCard from '@/components/LoginCard';
import Pear from '@/components/Pear';

export default function Home() {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <Pear />
      <LoginCard />
    </div>
  );
}
