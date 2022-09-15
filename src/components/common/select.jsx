const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="row mb-3 align-items-center">
      <div className="col text-end">
        <label htmlFor={name} className="col-form-label text-success fw-bold fs-5">
          {label}
        </label>
      </div>
      <div className="col ">
        <select className="form-select" name={name} id={name} {...rest}>
          <option value="" />
          {options.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Select;
