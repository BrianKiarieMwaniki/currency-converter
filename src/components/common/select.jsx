const Select = ({ name, label, options, error, ...rest }) => {
  return (
    <div className="row g-2 mb-3 align-item-center">
      <div className="col-auto"><label htmlFor={name} className="form-label">{label}</label></div>
      <div className="col-auto">
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
