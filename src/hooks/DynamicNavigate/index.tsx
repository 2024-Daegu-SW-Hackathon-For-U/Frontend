import { useTransition } from 'react';
import { useNavigate } from 'react-router-dom';

const useDynamicNavigate = () => {
  const navigate = useNavigate();
  const [isPending, startTransition] = useTransition();

  const handleNavigation = (path: string) => {
    startTransition(() => {
      navigate(path);
    });
  };

  return { handleNavigation, isPending };
};

export default useDynamicNavigate;
