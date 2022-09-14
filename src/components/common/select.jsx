const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="row g-2 mb-3 align-items-center">
      <div className="col-4 col-sm-2 text-end">
        <label htmlFor={name} className="col-form-label text-success fw-bold fs-5">
          {label}
        </label>
      </div>
      <div className="col-6 col-sm-4">
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
