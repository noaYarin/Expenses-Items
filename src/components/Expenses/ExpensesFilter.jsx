import "./ExpensesFilter.css";
export const ExpensesFilter = (props) => {
  const dropDownChangeHandler = (event) => {
    props.onChangeFilter(event.target.value);
  };

  return (
    <div className="filter-section">
      <label className="select-title">Filter By Year</label>
      <select
        className="select-list"
        value={props.selected}
        onChange={dropDownChangeHandler}
      >
        <option value=""></option>
        <option value="2020">2020</option>
        <option value="2021">2021</option>
        <option value="2022">2022</option>
        <option value="2023">2023</option>
      </select>
    </div>
  );
};
