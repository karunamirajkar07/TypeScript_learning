"use client"

import { useEffect, useState } from "react";
import { useProductData } from "../hook"
import { ProductAPIList } from "../type/product"
export default function ReactQuery() {

    const [searchValue, setSearchValue] = useState("");
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    const [debouncedSearch, setDebouncedSearch] = useState("");

    const payload = {
        page: page,
        limit: limit,
        search: debouncedSearch
    }
    const { productData, isLoading, error,isFetching } = useProductData(payload);
    
    useEffect(() => {
        const timer = setTimeout(() => {
          setPage(1);
          setDebouncedSearch(searchValue);
        }, 500);
    
        return () => clearTimeout(timer);
      }, [searchValue]);

    if (isLoading) return <p> Loding</p>
    if (error) return <p>Someting went wrong</p>

    return (
        <div>
            <div style={{ border: "1px solid white", padding: "8px", margin: "10px", display: "inline-block" }}>
                <input
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}

                />
            </div>
            <ul>
                {productData.map((x: ProductAPIList) => (
                    <li key={x.id}>
                        <h3>{x.title}</h3>
                        {/* <p>{x.category}</p>
                        <p>₹{x.price}</p>
                        <img src={x.imageURL} alt={x.title} width={100} /> */}
                    </li>

                ))}
            </ul>
            <div>
                <button onClick={() => setPage((p) => p - 1)} disabled={page === 1}>
                    Prev
                </button>

                <span style={{ margin: "0 10px" }}>Page: {page}</span>

                <button onClick={() => setPage((p) => p + 1)}>
                    Next
                </button>

            </div>
            {isFetching && <p>Loading new page...</p>}
        </div>
    )
}
