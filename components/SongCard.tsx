'use client';
import usePlayerState from '@/hooks/usePlayerState';
import { TopSong } from '@/types';
import Image from 'next/image';
import React from 'react';
import { AiOutlineCaretDown, AiOutlineCaretUp } from 'react-icons/ai';
import { FaCircle } from 'react-icons/fa';
import { FiMoreVertical, FiPlayCircle, FiThumbsDown, FiThumbsUp } from 'react-icons/fi';
import IconButton from './elements/IconButton';

interface SongCardProps {
  song: TopSong;
}

const SongCard: React.FC<SongCardProps> = ({ song }) => {
  const { addSongList } = usePlayerState();

  const onClickPlay = () => {
    addSongList([song]);
  };
  return (
    <article className='flex flex-row gap-4 h-[48px] w-full items-center relative group'>
      <div className='w-[48px] h-[48px] relative'>
        <Image src={song.imageSrc} fill alt='img' className='object-cover' />
        <section
          onClick={onClickPlay}
          className='hidden group-hover:flex absolute top-0 w-[48px] h-[48px] bg-black cursor-pointer items-center justify-center'
        >
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className='flex flex-row items-center gap-4'>
        <div>
          {song.rank === song.prevRank ? (
            <FaCircle size={10} />
          ) : song.rank > song.prevRank ? (
            <AiOutlineCaretUp size={10} color='#3CA63F' />
          ) : (
            <AiOutlineCaretDown size={10} color='#FF0000' />
          )}
        </div>
      </div>
      <div>{song.rank + 1}</div>
      <div>
        <div>{song.name}</div>
      </div>
      <section className='absolute hidden group-hover:flex top-0 right-0 items-center justify-end flex-row w-1/2 h-[48px] bg-[rgba(0,0,0,0.7]'>
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCard;
