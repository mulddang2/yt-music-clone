import { sleep } from '@/lib/utils';
import Category from './components/Category';
import PagePadding from '@/components/PagePadding';
import PlayListCarousel from '@/components/PlayListCarousel';
import { dummyPlaylistArray } from '@/lib/dummyData';
import UserIcon from '@/components/UserIcon';

const page = async () => {
  //await sleep(130000);

  //throw new Error('Error from page.tsx');
  //console.log('before homePage sleep');
  // NOTE: 로딩 컴포넌트 보이기 위해서 2초대기
  // await sleep(2000);
  //console.log('after homePage sleep');

  const dummyPlaylistArray1 = [...dummyPlaylistArray];
  const dummyPlaylistArray2 = [...dummyPlaylistArray];
  const dummyPlaylistArray3 = [...dummyPlaylistArray];
  const dummyPlaylistArray4 = [...dummyPlaylistArray];

  return (
    <PagePadding>
      <div className='min-h-[600px]'>
        <div className='mt-9'></div>
        <Category />
        <div className='mt-12'></div>
        {/* 캐러셀 */}
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray1]}
          thumbnail={
            <div className='w-[56px] h-[56px]'>
              <UserIcon size={'lg'} />
            </div>
          }
          subTitle='수딩'
          title='다시듣기'
        />
        <div className='mt-20'></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray2]}
          title='케이시 - Full Bloom'
          subTitle='새로운 앨범'
        />
        <div className='mt-20'></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray3]}
          title='커뮤니티 제공'
        />
        <div className='mt-20'></div>
        <PlayListCarousel
          playlistArray={[...dummyPlaylistArray4]}
          title='커버 및 리믹스'
        />
      </div>
    </PagePadding>
  );
};

export default page;
