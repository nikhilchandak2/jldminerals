import { useNavigate } from 'react-router-dom';

export const useNavigation = () => {
  const navigate = useNavigate();

  const goBack = (fallbackPath = '/home') => {
    try {
      if (window.history.length > 1) {
        navigate(-1);
      } else {
        navigate(fallbackPath);
      }
    } catch (error) {
      console.error('Navigation error:', error);
      window.location.href = fallbackPath;
    }
  };

  const goTo = (path) => {
    try {
      navigate(path);
    } catch (error) {
      console.error('Navigation error:', error);
      window.location.href = path;
    }
  };

  const goToWithHash = (path, hash) => {
    try {
      navigate(`${path}#${hash}`);
    } catch (error) {
      console.error('Navigation error:', error);
      window.location.href = `${path}#${hash}`;
    }
  };

  return {
    goBack,
    goTo,
    goToWithHash
  };
}; 