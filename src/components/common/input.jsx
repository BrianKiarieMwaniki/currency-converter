const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="row mb-3 align-items-center">
      <div className="col-4 text-end">
        <label
          htmlFor={name}
          className="col-form-label text-success fw-bold fs-5"
        >
          {label}
        </label>
      </div>
      <div className="col-7">
        {" "}
        <input {...rest} name={name} id={name} className="form-control" />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
