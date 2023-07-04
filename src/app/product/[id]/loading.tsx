import { Skeleton } from "../../components/ui/skeleton"


const loading = () => {
  return (
    <div
        className="h-full w-screen flex justify-evenly items-center md:items-start flex-col xl:flex-row gap-12 md:gap-0"
    >
        <div
            className="md:w-1/3 w-4/5"
        >
            <Skeleton className="md:h-auto md:w-auto h-72 w-full" />
        </div>

        <div
            className="flex flex-col gap-8 2xl:w-1/3 xl:w-1/2 w-full p-8"
        >
            <Skeleton className="h-8 w-1/2" />
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-24 w-full" />
            <Skeleton className="h-8 w-24" />
            <Skeleton className="h-8 md:w-1/2 w-full" />
        </div>
    </div>
  )
}

export default loading