import { useMemo } from 'react';
import { useMediaQuery } from 'react-responsive';

export const useMedia = () => {
  const isDesktop = useMediaQuery({ query: '(min-width: 1440px)' });
  const isTablet =
    useMediaQuery({ query: '(min-width: 768px)' }) && !isDesktop;
  const isMobile = !isTablet && !isDesktop;

  return useMemo(
    () => ({ isMobile, isTablet, isDesktop }),
    [isMobile, isTablet, isDesktop]
  );
};
