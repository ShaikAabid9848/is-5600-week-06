import React, { useState, useEffect } from "react";
import Card from './Card';
import Button from './Button';
import Search from './Search';

const CardList = ({ data }) => {
  const limit = 10;
  const [offset, setOffset] = useState(0);
  const [products, setProducts] = useState(data.slice(0, limit));
  const [filteredData, setFilteredData] = useState(data);

  // Update products whenever offset or filter changes
  useEffect(() => {
    setProducts(filteredData.slice(offset, offset + limit));
  }, [offset, filteredData]);

  // Handle pagination
  const handlePage = (direction) => {
    if (direction === "next" && offset + limit < filteredData.length) {
      setOffset(offset + limit);
    } else if (direction === "prev" && offset - limit >= 0) {
      setOffset(offset - limit);
    }
  };

  // Filter products by tag search
  const filterTags = (searchTerm) => {
    const term = searchTerm.toLowerCase();
    const results = data.filter((product) =>
      product.tags.some((tag) => tag.toLowerCase().includes(term))
    );
    setFilteredData(results);
    setOffset(0); // reset to first page
  };

  return (
    <div className="cf pa2">
      {/* Search Bar */}
      <Search handleSearch={filterTags} />

      {/* Product Cards */}
      <div className="mt2 mb2">
        {products.map((product) => (
          <Card key={product.id} {...product} />
        ))}

        {products.length === 0 && (
          <p className="tc gray">No products match your search.</p>
        )}
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center pa4">
        <Button
          text="Previous"
          handleClick={() => handlePage("prev")}
          disabled={offset === 0}
        />
        <Button
          text="Next"
          handleClick={() => handlePage("next")}
          disabled={offset + limit >= filteredData.length}
        />
      </div>
    </div>
  );
};

export default CardList;