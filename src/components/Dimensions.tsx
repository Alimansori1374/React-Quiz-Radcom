import  { useState } from "react";


type DimensionsProps = {
  onNext: (data: { row: number; column: number }) => void;
};


const Dimensions = ({ onNext } :DimensionsProps) => {
  const [selectedValues, setSelectedValues] = useState({
    row: 0,
    column: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValues({
      ...selectedValues,
      [e.target.id]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onNext(selectedValues);
  };

  return (
    <div>
      <h2 className="text-myLessDarkBlue text-lg mb-5">ابعاد آرایه را مشخص کنید:</h2>
      <div >
        <form  onSubmit={handleSubmit}>
          <select
          className="ml-3 p-2 rounded-md   px-4 py-2 bg-white border border-gray-100 shadow-sm focus:outline-none focus:border-blue-100"
            name="row"
            id="row"
            onChange={handleChange}
            value={selectedValues.row}
          >
            <option value="">انتخاب ردیف</option>
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
          </select>
          <span className="ml-3">در</span>
          <select
          className="ml-3 p-2 rounded-md   px-4 py-2 bg-white border border-gray-100 shadow-sm focus:outline-none focus:border-blue-100"
            name="column"
            id="column"
            onChange={handleChange}
            value={selectedValues.column}
          >
            <option value="">انتخاب ستون</option>
            <option value="1">1</option>
            <option value="3">3</option>
            <option value="5">5</option>
          </select>
          <button className="h-8 w-12 bg-myDarkBlue text-[#ffffff] rounded-md" type="submit">بعدی</button>
        </form>
      </div>
    </div>
  );
};

export default Dimensions;
