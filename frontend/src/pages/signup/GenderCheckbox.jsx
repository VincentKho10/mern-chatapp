// eslint-disable-next-line react/prop-types
const GenderCheckbox = ({ changeHandler }) => {
  return (
    <div className="flex">
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Male</span>
          <input type="radio" name="gender" className="checkbox border-slate-900" value="male" onChange={changeHandler}/>
        </label>
      </div>
      <div className="form-control">
        <label className={`label gap-2 cursor-pointer`}>
          <span className="label-text">Female</span>
          <input type="radio" name="gender" className="checkbox border-slate-900" value="female" onChange={changeHandler}/>
        </label>
      </div>
    </div>
  );
};
export default GenderCheckbox;