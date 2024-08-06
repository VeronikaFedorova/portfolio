'use client';
import React from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { CanvasRevealEffect } from '@/components/ui/CanvasRevealEffect';
import { div } from 'three/webgpu';

const Approach = () => {
  return (
    <section id='approach' className='w-full py-20'>
      <h1 className='heading'>
        My <span className='text-purple'>approach</span>
      </h1>
      <div className='my-20 flex flex-col lg:flex-row items-center justify-center gap-4'>
        <Card
          title='Planning & Strategy'
          icon={<AceternityIcon order='Step 1' />}
          description="We'll collaborate to map out your website's goals, target audience, 
          and key functionalities. We'll discuss things like site structure, 
          navigation, and content requirements."
        >
          <CanvasRevealEffect
            animationSpeed={5.1}
            containerClassName='bg-violet-600'
            dotSize={3}
          />
        </Card>
        <Card
          title='Development & Progress Update'
          icon={<AceternityIcon order='Step 2' />}
          description='Once we agree on the plan, I cue my lofi playlist and dive into
          coding. From initial sketches to polished code, I keep you updated
          every step of the way.'
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName='bg-pink-500'
            colors={[[0, 0, 0]]}
            dotSize={3}
          />
        </Card>
        <Card
          title='Development & Launch'
          icon={<AceternityIcon order='Step 3' />}
          description="This is where the magic happens! Based on the approved design, 
          I'll translate everything into functional code, building your website
          from the ground up."
        >
          <CanvasRevealEffect
            animationSpeed={3}
            containerClassName='bg-sky-600'
            colors={[[125, 23, 252]]}
            dotSize={3}
          />
        </Card>
      </div>
    </section>
  );
};

const Card = ({
  title,
  icon,
  children,
  description,
}: {
  title: string;
  icon: React.ReactNode;
  children?: React.ReactNode;
  description: string;
}) => {
  const [hovered, setHovered] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className='border border-black/[0.2] group/canvas-card flex items-center justify-center dark:border-white/[0.2]  max-w-sm w-full mx-auto p-4 relative lg:h-[35rem] rounded-3xl'
    >
      <Icon className='absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black' />
      <Icon className='absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black' />

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className='h-full w-full absolute inset-0'
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>

      <div className='relative z-20'>
        <div className='text-center group-hover/canvas-card:-translate-y-4 absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] group-hover/canvas-card:opacity-0 transition duration-200 w-full  mx-auto flex items-center justify-center'>
          {icon}
        </div>
        <h2 className='dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center text-3xl'>
          {title}
        </h2>
        <h2
          className='text-sm dark:text-white opacity-0 group-hover/canvas-card:opacity-100 relative z-10 text-black mt-4  font-bold group-hover/canvas-card:text-white group-hover/canvas-card:-translate-y-2 transition duration-200 text-center'
          style={{ color: '#e4ecff' }}
        >
          {description}
        </h2>
      </div>
    </div>
  );
};

const AceternityIcon = ({ order }: { order: string }) => {
  return (
    <div>
      <button className='p-[3px] relative'>
        <div className='absolute inset-0 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-lg' />
        <div className='px-8 py-2  bg-black rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent text-2xl font-bold'>
          {order}
        </div>
      </button>
    </div>
  );
};

export const Icon = ({ className, ...rest }: any) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth='1.5'
      stroke='currentColor'
      className={className}
      {...rest}
    >
      <path strokeLinecap='round' strokeLinejoin='round' d='M12 6v12m6-6H6' />
    </svg>
  );
};

export default Approach;