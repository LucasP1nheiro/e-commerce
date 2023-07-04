import Link from 'next/link'
import logo from '../../../../public/logo.svg'

interface LogoProps {
  hasText?: boolean
  handleSheetClose?: () => void
}

const Logo = ({hasText = true, handleSheetClose}: LogoProps) => {
  const handleClick = () => {
    if (handleSheetClose) {
      handleSheetClose();
    }
  };

  return (
    <Link 
      href='/' 
      className="flex gap-2 items-center"
      onClick={() => handleClick()}
    >
        <img
          src={logo.src}
          alt="logo"
          className="h-8"
        />
          
        {hasText && (<h1 className="text-xl text-white font-semibold">ShopEase</h1>)}
    </Link>
  )
}

export default Logo