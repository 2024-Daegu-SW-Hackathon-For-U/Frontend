import { usePostMap } from '@/api/hooks/map/usePostMap';

const Test = () => {
  const { mutate, isError, error, isLoading } = usePostMap();

  const handleSubmit = () => {
    const postData: { name: string; type: 'SHARE' | 'CURATION' } = {
      name: 'My Map Name',
      type: 'SHARE',
    };

    mutate(postData, {
      onSuccess: () => {
        console.log('Map successfully posted!');
      },
      onError: (err) => {
        console.error('Error posting map:', err);
      },
    });
  };

  return (
    <div>
      <button onClick={handleSubmit} disabled={isLoading}>
        {isLoading ? 'Posting...' : 'Submit Map'}
      </button>
      {isError && <p>Error: {error?.message}</p>}
    </div>
  );
};

export default Test;
