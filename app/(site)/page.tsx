import { sleep } from '@/lib/utils';

const page = async () => {
  //await sleep(130000);

  //throw new Error('Error from page.tsx');
  //console.log('before homePage sleep');
  // NOTE: 로딩 컴포넌트 보이기 위해서 2초대기
  // await sleep(2000);
  //console.log('after homePage sleep');
  return <div>HomePage</div>;
};

export default page;
