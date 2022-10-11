import { Button } from '@/components/Button';
import FeatureCard from '@/components/Features/FeatureCard';
import ListBox from '@/components/ListBox/ListBox';
import {
  FeatureRequest,
  SortDirection,
  useFeatureRequestsQuery,
} from '@/generated/graphql';
import DashboardLayout from '@/layouts/Dashboard';
import { useEffect, useState } from 'react';

const additionalFilters = [
  { label: 'Recent Posts', value: 'Recent Post' },
  { label: 'Top Posts', value: 'Top Post' },
];

const defaultFilter = {
  query: '',
  orderBy: {
    columnName: 'id',
    direction: SortDirection.Asc,
  },
  pageSize: 10,
  filteredColumns: ['title', 'category.name', 'status.status'],
};

const Features = () => {
  const [requests, setRequests] = useState([]);
  const [selected, setSelected] = useState(additionalFilters[0]);
  const [loading, setLoading] = useState(true);
  const getRequests = useFeatureRequestsQuery({
    filter: { ...defaultFilter },
    before: '',
    after: '',
  });

  useEffect(() => {
    setRequests(getRequests.data?.featureRequests.items as FeatureRequest[]);

    return () => null;
  }, [getRequests.data]);

  useEffect(() => {
    setLoading(getRequests.isLoading);
  }, [getRequests.isLoading]);

  return (
    <div className="w-full relative">
      <div className="flex flex-row justify-between items-center w-full py-2 mb-11 h-13">
        <div className="text-3xl font-bold text-slate-800">
          Feature Requests
        </div>
        <div className="flex flex-row h-max">
          <Button>Create Post</Button>
        </div>
      </div>

      <ListBox
        selected={selected}
        setSelected={setSelected}
        className="w-72 h-10 mb-2"
        options={additionalFilters}
      />

      {requests}

      <div className="relative flex flex-col min-h-[150px]">
        {!loading
          ? requests.length !== 0
            ? requests.map((request: FeatureRequest) => {
                return <FeatureCard key={request.id} {...request} />;
              })
            : 'No requests, create one!'
          : 'Loading...'}
      </div>

      <div className="flex flex-row justify-between items-center w-full py-2">
        <div className="text-sm">{requests?.length ?? 0} Results</div>
      </div>
    </div>
  );
};

Features.layout = DashboardLayout;

export default Features;
