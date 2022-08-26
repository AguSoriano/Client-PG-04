import React from "react";

function Pagination({ page, setPage, products }) {
  const numbers = [];
  for (let i = 0; i < products.length / 10; i++) {
    numbers.push(i);
  }

  const goTo = (number) => {
    if (number === 0) {
      return setPage(0);
    }
    setPage(10 * number);
  };

  const actualPage = (num) => {
    if (page / 10 === num ) {
      return "red";
    }
  };

  const next = () => {
    if (page < products.length - 10) {
      setPage(page + 10);
    }
  };

  const prev = () => {
    if (page > 0) {
      setPage(page - 10);
    }
  };
  return (
    <div >
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