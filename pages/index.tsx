import Link from 'next/link';

const Landing = () => {
  return (
    <>
      <div>Welcome to what would be the homepage!</div>
      <div>
        You probably wanted the <Link href="/dashboard">dashboard</Link> page
        for now.
      </div>
    </>
  );
};

export default Landing;
