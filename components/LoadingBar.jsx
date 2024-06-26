'use client';

import { ScaleLoader } from 'react-spinners';

const LoadingBar = () => {
  return (
    <div className='w-full h-full'>
      <ScaleLoader
        color='red'
        width={10}
        margin={3}
        cssOverride={{ textAlign: 'center', marginTop: '50vh' }}
      />
    </div>
  );
};

export default LoadingBar;
