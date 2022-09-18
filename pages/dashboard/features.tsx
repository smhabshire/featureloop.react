import FeatureCard from '@/components/Features/FeatureCard';
import {
  FeatureRequest,
  SortDirection,
  useFeatureRequestsQuery,
} from '@/generated/graphql';
import DashboardLayout from '@/layouts/Dashboard';
import { request } from 'http';
import { useEffect, useState } from 'react';

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
  const [loading, setLoading] = useState(true);
  const getRequests = useFeatureRequestsQuery({
    filter: defaultFilter,
    before: '',
    after: '',
  });

  useEffect(() => {
    setRequests(getRequests.data?.featureRequests.items as FeatureRequest[]);
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
      </div>

      <div className="relative flex flex-col min-h-[150px]">
        {!loading
          ? requests.map((request: FeatureRequest) => {
              return <FeatureCard key={request.id} {...request} />;
            })
          : 'Loading...'}
      </div>

      <div className="flex flex-row justify-between items-center w-full py-2">
        <div className="text-sm">{request.length} Results</div>
      </div>
    </div>
  );
};

Features.layout = DashboardLayout;

export default Features;
