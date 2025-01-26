import React from 'react';
import pear from '@public/pear.svg';
import Image from 'next/image';
import clsx from 'clsx';

interface PearProps {
  className?: string;
}

function Pear({ className }: PearProps) {
  return <Image src={pear} className={clsx('z-10', className)} alt="pear" />;
}

export default Pear;
