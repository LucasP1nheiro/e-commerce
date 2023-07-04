import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "../ui/navigation-menu"
import Logo from "./Logo"





const Dropdown = () => {
  const arrayLinks = [
    {
      name: "Electronics",
      href: "categories/electronics"
    },
    {
      name: "Jewelery",
      href: "categories/jewelery"
    },
    {
      name: "Men's Clothing",
      href: "categories/men's clothing"
    },
    {
      name: "Women's Clothing",
      href: "categories/women's clothing"
    }
  ]


  return (
    <NavigationMenu>
        <NavigationMenuList>
            <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-primary text-secondary hover:bg-white/10 rounded-md">Categories</NavigationMenuTrigger>
            <NavigationMenuContent className="w-full bg-primary flex gap-2 fixed z-50 p-4">
            <div className="flex w-[400px] gap-2">
              
                <NavigationMenuLink className="w-2/5 h-full bg-white/10 flex items-center justify-center gap-8 p-2 rounded-md">
                  <Link
                    href='/'
                    className="flex flex-col items-center justify-center gap-4"
                  >
                    <Logo hasText={false} />
                    <h1 className="text-xl text-secondary">ShopEase</h1>
                  </Link>
                </NavigationMenuLink>
              

                <div className="flex-col justify-center items-center w-3/5 gap-4">
                  {arrayLinks.map(link => (
                      <NavigationMenuLink key={link.name} className="w-full rounded-md flex items-center justify-center  text-center p-4 bg-primary text-secondary hover:bg-white/10">
                      <Link
                        href={link.href}
                        className="w-full"
                      >
                        <p>{link.name}</p>
                      </Link>
                      </NavigationMenuLink>
                  ))}
                </div>
              
              </div>
            </NavigationMenuContent>
            </NavigationMenuItem>
        </NavigationMenuList>
    </NavigationMenu>
  )
}

export default Dropdown