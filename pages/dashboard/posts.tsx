import { Button } from '@/components/Button';
import ListBox from '@/components/ListBox/ListBox';
import Dashboard from '@/layouts/Dashboard';
import { useState } from 'react';

const additionalFilters = [
  { label: 'Recent Posts', value: 'Recent Post' },
  { label: 'Top Posts', value: 'Top Post' },
];

const Posts = () => {
  const [selected, setSelected] = useState(additionalFilters[0]);

  return (
    <div className="w-full relative">
      <div className="flex flex-row justify-between items-center w-full py-2 mb-11 h-13">
        <ListBox
          selected={selected}
          setSelected={setSelected}
          className="w-72 h-10 mb-2"
          options={additionalFilters}
        />

        <div className="flex flex-row h-max">
          <Button>Create Post</Button>
        </div>
      </div>

      <div className="relative flex flex-col min-h-[150px]">
        {/* <FeatureCard key={request.id} {...request} />; */}
      </div>

      <div className="flex flex-row justify-between items-center w-full py-2">
        <div className="text-sm">0 Results</div>
      </div>
    </div>
  );
};

Posts.layout = Dashboard;

export default Posts;
