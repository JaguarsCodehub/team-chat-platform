'use client';

import { useSocket } from '@/components/providers/socket-provider';
import { Badge } from '@/components/ui/badge';

export const SocketIndicator = () => {
  const { isConnected } = useSocket();

  if (!isConnected) {
    return (
      <Badge
        variant='outline'
        className='bg-yellow-600 text-white text-sm cursor-grab border-none'
      >
        Fallback: Polling every 1s
      </Badge>
    );
  }

  return (
    <Badge
      variant='outline'
      className='bg-emerald-600 text-white text-sm cursor-grab border-none'
    >
      Live: You are Online✨
    </Badge>
  );
};
