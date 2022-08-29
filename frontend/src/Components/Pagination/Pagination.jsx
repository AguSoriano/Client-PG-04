import React from "react";

function Pagination({ page, setPage, products }) {
  const numbers = [];
  for (let i = 0; i < products.length / 6; i++) {
    numbers.push(i);
  }

  const goTo = (number) => {
    if (number === 0) {
      return setPage(0);
    }
    setPage(6 * number);
  };

  const actualPage = (num) => {
    if (page / 6 === num) {
      return "red";
    }
  };

  const next = () => {
    if (page < products.length - 6) {
      setPage(page + 6);
    }
  };

  const prev = () => {
    if (page > 0) {
      setPage(page - 6);
    }
  };
  return (
    <div>
      <button onClick={prev}>Previous</button>
      {numbers.length &&
        numbers.map((num, i) => (
          <button
            key={i}
            onClick={() => goTo(num)}
            style={{ backgroundColor: actualPage(num) }}
          >
            {num + 1}
          </button>
        ))}
      <button onClick={next}>Next</button>
    </div>
  );
}

export default Pagination;
