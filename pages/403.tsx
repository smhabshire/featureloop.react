import { Button } from '@/components/Button';
import { useRouter } from 'next/router';

const fourohthree = () => {
  const router = useRouter();
  return (
    <>
      <div>Not authorized.</div>
      <Button onClick={() => router.push('/')}>GoHome</Button>
    </>
  );
};

export default fourohthree;
