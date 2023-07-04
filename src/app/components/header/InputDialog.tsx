import { RiSearchLine } from "react-icons/ri"
import { Button } from "../ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogPrimitive
} from "../ui/dialog"
import { Input } from "../ui/input"
import { useEffect, useState } from "react"
import { useRouter } from 'next/navigation'


export function InputDialog() {
  const [shouldRedirect, setShouldRedirect] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const [search, setSearch] = useState<string | null>(null)
  const {push} = useRouter()

  const handleRedirect = (e: {key: string}) => {
    if (e.key === 'Enter' && search !== '') {
      setShouldRedirect(true)
      setIsDialogOpen(false)
    }
  }

  useEffect(() => {
    if (shouldRedirect) { 
      push('/search?q=' + search)
      setSearch("")
    }
    setShouldRedirect(false)
  }, [shouldRedirect, search]) 

  

  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={() => setIsDialogOpen(prev => !prev)}
    >
      <DialogTrigger 
        asChild
      >
        <Button  className="flex items-center gap-2 bg-primary border hover:bg-white/10">
          <RiSearchLine color="#fff" size={16} />
          <p className="text-secondary hidden md:block">Search products ...</p>
        </Button>
      </DialogTrigger>
      <DialogContent className="w-full bg-primary">
        <div className="flex items-center gap-1 w-full">
          <RiSearchLine color="#a2a2ab" size={16} />
          <Input
            autoFocus
            autoComplete="off"
            className="w-full bg-primary outline-none border-none text-white placeholder:text-gray-400 focus:outline-gray-700"
            placeholder="Search products..."
            onChange={e => setSearch(e.target.value)}
            onKeyDown={(e) => handleRedirect(e)}
          />
        </div>
      </DialogContent>
    </Dialog>
  )
}
