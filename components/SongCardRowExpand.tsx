'use client';
import { Song } from '@/types';
import Image from 'next/image';
import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { AiOutlineCaretDown } from 'react-icons/ai';
import { AiOutlineCaretUp } from 'react-icons/ai';
import { FiPlayCircle } from 'react-icons/fi';
import { FiThumbsDown } from 'react-icons/fi';
import { FiThumbsUp } from 'react-icons/fi';
import { FiMoreVertical } from 'react-icons/fi';
import IconButton from './elements/IconButton';
import { useRouter } from 'next/navigation';
import usePlayerState from '@/hooks/usePlayerState';

interface SongCardRowExpandProps {
  song: Song;
}

const SongCardRowExpand: React.FC<SongCardRowExpandProps> = ({ song }) => {
  const { channel, channelId } = song;
  const { push } = useRouter();
  const { addSongList } = usePlayerState();

  const onClickChannel = () => {
    push(`/channel/${channelId}`);
  };

  const onClickPlay = () => {
    addSongList([song]);
  }
  return (
    <article className='flex flex-row gap-4 h-[48px] w-full items-center relative group'>
      <div className='w-[48px] h-[48px] relative'>
        <Image src={song.imageSrc} fill alt='img' className='object-cover' />
        <section onClick={onClickPlay}className='hidden group-hover:flex absolute top-0 w-[48px] h-[48px] bg-black cursor-pointer items-center justify-center'>
          <FiPlayCircle size={20} />
        </section>
      </div>
      <div className='flex flex-row gap-4 justify-between basis-1/3 '>
        <div className='w-[130px] truncate'>{song.name}</div>
        <div
          onClick={onClickChannel}
          className='text-neutral-500 hover:underline cursor-pointer'
        >
          {channel}
        </div>
      </div>
      <section className='absolute hidden group-hover:flex top-0 right-0 items-center justify-end flex-row w-[120px] h-[48px] bg-[rgba(0,0,0,0.7]'>
        <IconButton icon={<FiThumbsDown size={20} />} />
        <IconButton icon={<FiThumbsUp size={20} />} />
        <IconButton icon={<FiMoreVertical size={20} />} />
      </section>
    </article>
  );
};

export default SongCardRowExpand;
