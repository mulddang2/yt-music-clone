'use client';

import useUIState from '@/hooks/useUIState';
import { useEffect } from 'react';

const HeaderBgChanger = ({ imageSrc }) => {
  const { setHeaderImageSrc } = useUIState();

  useEffect(()=> {
    if(imageSrc) setHeaderImageSrc(imageSrc);
  }, [imageSrc, setHeaderImageSrc])
  return <></>;
};

export default HeaderBgChanger;
