import { ClockLoader } from 'react-spinners';

export default function PostListLoading() {
  return (
    <div className="w-full py-10 flex justify-center items-center">
      <ClockLoader size={100} />
    </div>
  );
}
