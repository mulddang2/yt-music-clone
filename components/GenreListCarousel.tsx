import { TopSong } from '@/types';
import React from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import PlayListCard from './PlayListCard';
import { chunkArray } from '@/lib/utils';
import SongCard from './SongCard';
import GenreCard from './GenreCard';

interface SongListCarouselProps {
  title: string;
  subTitle?: string;
  thumbnail?: React.ReactNode;
  genreList: string[];
}

const SongColumn = ({ genreList = [] }: { genreList: string[] }) => {
  return (
    <div className='flex flex-col gap-4'>
      {genreList.map((genre, idex) => {
        return <GenreCard key={genre} genre={genre} />;
      })}
    </div>
  );
};

const GenreListCarousel: React.FC<SongListCarouselProps> = ({
  title,
  subTitle,
  thumbnail,
  genreList,
}) => {
  const chunkedGenreList = chunkArray(genreList, 4) as string[][];
  return (
    <div className='w-full'>
      <Carousel>
        <div className='flex flex-row justify-between items-end my-2'>
          <article className='flex flex-row gap-3'>
            {thumbnail}
            <div className='flex flex-col justify-center'>
              <div>
                {subTitle && <div className='text-neutral-500'>{subTitle}</div>}
              </div>
              <div className='text-[34px] font-bold leading-[34px]'>
                {title}
              </div>
            </div>
          </article>
          <div className='relative left-[-45px]'>
            <div className='absolute bottom-[20px]'>
              <CarouselPrevious className='right-2' />
              <CarouselNext className='left-2' />
            </div>
          </div>
        </div>
        <CarouselContent className='mt-4'>
          {chunkedGenreList?.map((genreList, index) => {
            return (
              <CarouselItem key={index} className='basis-1/3 lg:basis-1/4'>
                <SongColumn genreList={genreList} />
              </CarouselItem>
            );
          })}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default GenreListCarousel;
