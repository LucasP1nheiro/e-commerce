import { useEffect, useState } from "react"
import { Button } from "./ui/button"
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai"


interface PaginationProps {
    handlePageRange: (page: number) => void
}

const Pagination = ({handlePageRange}: PaginationProps) => {
    const [currentPage, setCurrentPage] = useState(1)
    const pages = [1, 2, 3]
    
    const handlePrevPage = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1)
        }
    };

    const handleNextPage = () => {
        if (currentPage < 3) {
        setCurrentPage(currentPage + 1);
        }
    };

    useEffect(() => {
        handlePageRange(currentPage)
        window.scroll(0,0)
    }, [currentPage])

  return (
    <div className="flex items-center gap-4">
          <Button
              size="icon"
              asChild
              className="rounded-md border p-2 bg-primary hover:bg-white/10 cursor-pointer"
              onClick={() => handlePrevPage()}
          >
              <AiOutlineLeft />
          </Button>

          {pages.map((page) => (
            <Button
                key={page}
                size="icon"
                className={currentPage === page ? "rounded-md border p-2 bg-secondary hover:bg-secondary/90 cursor-pointer text-primary" : "rounded-md border p-2 bg-primary hover:bg-white/10 cursor-pointer"}
                onClick={() => setCurrentPage(page)}
            >
                {page}
            </Button>
          ))}

          <Button
              size="icon"
              asChild
              className="rounded-md border p-2 bg-primary hover:bg-white/10 cursor-pointer"
              onClick={() => handleNextPage()}
          >
              <AiOutlineRight />
          </Button>

    </div>
  )
}

export default Pagination