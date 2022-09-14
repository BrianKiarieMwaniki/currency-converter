const Input = ({ name, label, error, ...rest }) => {
  return (
    <div className="row mb-3 align-items-center">
      <div className="col-auto">
        {" "}
        <input
          {...rest}
          name={name}
          id={name}
          className="form-control"
          placeholder={label}
        />
      </div>
      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
