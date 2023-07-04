import React from 'react'
import { Skeleton } from '../ui/skeleton'

const CardSkeleton = () => {
  return (
    <div
      className="p-2 flex flex-col gap-2 h-[430px] w-[320px] border-[1px] border-gray-400 border-opacity-20 rounded-sm justify-between"
    >
        <Skeleton className="h-72 w-full" />
        <Skeleton className="h-6 w-4/5" />
        <Skeleton className="h-6 w-1/5" />
        <div className="w-full flex items-center gap-2">
            <Skeleton className="h-6 w-full" />
            <Skeleton className="h-6 w-full" />
        </div>
    </div>
  )
}

export default CardSkeleton