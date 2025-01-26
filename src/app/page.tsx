import LoginCard from '@/components/LoginCard';
import Pear from '@/components/Pear';

export default function Home() {
  return (
    <div className="flex grow flex-col items-center justify-center">
      <Pear className="absolute left-[150px] top-[0px] h-64 w-64" />
      <LoginCard />
    </div>
  );
}
