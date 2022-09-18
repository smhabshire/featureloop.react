import Box from '@/components/Box';
import { FeatureRequest } from '@/generated/graphql';
import {
  FaCaretDown,
  FaCaretUp,
  FaCircle,
  FaCommentDots,
} from 'react-icons/fa';

const FeatureCard = (request: Partial<FeatureRequest>) => {
  return (
    <Box className="mb-2 hover:cursor-pointer hover:bg-slate-100 px-4 py-2">
      <div className="flex flex-row justify-between w-full">
        <div className="flex flex-row items-center">
          <div className="flex flex-col px-2">
            <FaCaretUp />
            <FaCaretDown />
          </div>
          <div className="px-2 font-bold">0</div>
          <div className="pl-4 font-bold text-sm">{request.title}</div>
        </div>

        <div className="flex flex-row justify-end items-center text-xs space-x-4">
          <div className="flex flex-row items-center">
            <FaCommentDots className="text-slate-400 mr-2" />
            {request.comments?.length}
          </div>
          <div className="flex flex-row items-center bg-slate-100/40 text-slate-600 px-2 py-1 font-bold border rounded">
            {request.category?.name}
          </div>
          <div className="flex flex-row items-center bg-slate-100/40 text-slate-600 px-2 py-1 font-bold border rounded">
            <FaCircle className="text-[10px] pr-1" />
            {request.status?.status}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default FeatureCard;
