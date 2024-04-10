import  { useState, useEffect } from 'react';



type SortingProps = {
  onPrev:() =>void
  tableValues: string[][];


}

const Sorting = ({ tableValues, onPrev } :SortingProps) => {

  console.log("from Sort" , tableValues);
  const [sortedValues, setSortedValues] = useState([...tableValues]);

  useEffect(() => {
    setSortedValues([...tableValues]);
  }, [tableValues]);

  const handleSort = () => {
    const sorted = [...sortedValues].map((row, rowIndex) => {
      return rowIndex % 2 === 0
        ? row.slice().sort((a:any, b:any) => a - b)
        : row.slice().sort((a:any, b:any) => b - a);
    });
    setSortedValues(sorted);
  };

  return (
    <div className='dir-ltr w-[60vw] ' >
      <table className='border border-myDarkBlue w-[60vw]'>
        <tbody>
          {sortedValues.map((row, rowIndex) => (
            <tr key={rowIndex} className={` ${rowIndex % 2 === 0 ? 'bg-myWhite' : 'bg-myLessDarkBlue'}`}>
              {row.map((cell, cellIndex) => (
                <td className='w-[60vw] text-myDarkBlue' key={cellIndex}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <div className='flex justify-around mt-4'>
      <button className='h-8 w-15 px-2 bg-lightGreen text-[#ffffff] rounded-md' onClick={handleSort}>مرتب سازی</button>
      <button className='h-8 w-12 bg-myDarkBlue text-[#ffffff] rounded-md' onClick={onPrev}>قبلی</button>
      </div>
    </div>
  );
};

export default Sorting;
