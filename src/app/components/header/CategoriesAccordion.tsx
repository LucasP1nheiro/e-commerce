
import Link from "next/link"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "../ui/accordion"

interface CategoriesAccordionProps {
  handleSheetClose: () => void
}

export const CategoriesAccordion = ({handleSheetClose} : CategoriesAccordionProps) => {
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
    <Accordion type="single" collapsible className="w-full">
    <AccordionItem value="item-1">
      <AccordionTrigger>
        <h1 className="text-secondary">Categories</h1>
      </AccordionTrigger>
      <AccordionContent>
        <div
          className="w-full flex flex-col gap-4"
        >
            {arrayLinks.map(link => (
              <Link
                key={link.name}
                href={link.href}
                className="w-full flex flex-col"
                onClick={() => handleSheetClose()}
              >
                <p className="text-tertiary">{link.name}</p>
              </Link>
          ))}
        </div>
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  )
}


