import { useState } from "react";
import { FormEvent } from "react";

type DimensionsType = {
  row: number;
  column: number;
};

type TableValuesProps = {
  onNext: (data: { tableValues: string[][] }) => void;
  onPrev: () => void;
  dimensions: DimensionsType;
};

const TableValues = ({ dimensions, onNext, onPrev }: TableValuesProps) => {
  const [isValid, setIsValid] = useState(true);
  const { row, column } = dimensions;
  const [inputValues, setInputValues] = useState(
    Array.from({ length: row * column }, () => "")
  );
  const [tableValues, setTableValues] = useState<any[][]>([]);

  
  const handleChange = (index: number, value: string) => {
    // Check if the entered value contains only numbers
    const isNumeric = /^[0-9]+$/.test(value);
   console.log("isNumeric" , isNumeric);
   
    // Update isValid state based on the result
    setIsValid(isNumeric);

    // If the value is numeric, update the input values
    if (isNumeric) {
        const newInputValues = [...inputValues];
        newInputValues[index] = value;
        setInputValues(newInputValues);
    }
};

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!isValid) {
      console.log("Invalid input detected. Please enter only numbers.");
      return;
    }

    const sortedInputValues = [...inputValues].sort((a: any, b: any) => a - b);

    const tempTableValues = [];
    for (let i = 0; i < row; i++) {
      tempTableValues.push(
        sortedInputValues.slice(i * column, (i + 1) * column)
      );
    }

    setTableValues(tempTableValues);

    onNext({ tableValues: tempTableValues });
  };

 

  return (
    <div>
      <form onSubmit={handleSubmit} className="dir-ltr">
      {Array.from({ length: row }).map((_: any, rowIndex: number) => (
  <div key={rowIndex}>
    {Array.from({ length: column }).map((_: any, colIndex: number) => {
      const index = rowIndex * column + colIndex;
      return (
        <input
          className={`m-3 w-14 px-1 py-3 dir-ltr rounded-md border  focus:outline-none focus:border-blue-100 ${!isValid ? 'border-dangerRed' : 'border-gray-100'}`}
          key={index}
          type="text"
          value={inputValues[index]}
          onChange={(e) => handleChange(index, e.target.value)}
          maxLength={5}
        />
      );
    })}
  </div>
))}

        <div className="flex justify-between px-3">
          <button
                  disabled={!isValid} 

            className={`h-8 w-12 bg-myDarkBlue text-[#ffffff] rounded-md ${!isValid ? 'opacity-50 cursor-not-allowed' : ''}`}

            type="submit"
          >
            بعدی
          </button>
          <button
            className="h-8 w-12 bg-myDarkBlue text-myWhite rounded-md"
            type="button"
            onClick={onPrev}
          >
            قبلی
          </button>
        </div>
      </form>

      {tableValues.length > 0 && (
        <table>
          <tbody>
            {tableValues.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {row.map((cell, columnIndex) => (
                  <td key={columnIndex}>{cell}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {!isValid ? <div className="dir-rtl mt-3 bg-dangerRed flex justify-center items-center rounded-md">
        <p className="text-myWhite">فقط عدد وارد کنید.</p>
      </div> : null}
    </div>
  );
};

export default TableValues;
