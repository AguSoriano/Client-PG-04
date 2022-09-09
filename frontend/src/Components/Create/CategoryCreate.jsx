import React, { useState } from "react";

function CategoryCreate() {
  const [input, setInput] = useState({
    name: "",
  });

  const handleInputChange = (e) => {
    e.preventDefault();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      className={style.formPrincipal}
      onSubmit={(e) => {
        handleSubmit(e);
      }}
    >
      <div className={style.divSection}>
        <section>
          <label>nombre</label>
          <input
            name="name"
            value={input.name}
            type="text"
            onChange={(e) => handleInputChange(e)}
          />
          {/* {errors.name && <p className={style.errors}>{errors.name}</p>} */}
        </section>
      </div>
    </form>
  );
}
export default CategoryCreate;
