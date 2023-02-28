import { useState } from "react";
import ReactPaginate from "react-paginate";
import ProductsList from "./ProductsList";
import "./Pages/Products.css";
import items from "../items";

const Pagenation = () => {

    const itemsPerPage = 9;
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (e) => {
        const newOffset = (e.selected * itemsPerPage) % items.length;
        setItemOffset(newOffset);
    }


  return (
    <>
    <ProductsList currentItems={currentItems} />
    <div className="pagenate">
        <ReactPaginate
        previousLabel="<"
        nextLabel=">"
        breakLabel="..."
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName="pagination"
        activeClassName="active"
        previousClassName="page-item"
        nextClassName="page-item"
        disabledClassName="disabled"
         />
    </div>
    </>
  )
}

export default Pagenation