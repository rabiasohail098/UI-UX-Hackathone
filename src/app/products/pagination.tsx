import React from 'react'
import {Pagination, PaginationContent, PaginationItem, PaginationNext, PaginationPrevious } from '@/components/ui/pagination';

const Pagination1 = () => {
  return (
    <div className='flex  flex-col md:flex-row'>
                 <Pagination className='mt-[-30px] hidden md:block ml-[40%]'>
                   <PaginationContent>
                     <PaginationItem>
                       <PaginationPrevious href="/" />
                     </PaginationItem>
                     <PaginationItem>
                       <PaginationNext href="/shop" />
          </PaginationItem>
                  </PaginationContent>
      </Pagination>
          
              </div>
  )
}

export default Pagination