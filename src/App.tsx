import { useState } from "react";
import Dimensions from "./components/Dimensions";
import TableValues from "./components/TableValues";
import Sorting from "./components/Sorting";

type DimensionsType = {
  row: number;
  column: number;
};

type TableValuesType = {
  tableValues: string[][];
};

const App = () => {
  const [step, setStep] = useState<number>(1);
  const [dimensions, setDimensions] = useState<DimensionsType | null>(null);
  const [tableValues, setTableValues] = useState<TableValuesType | null>(null);

  const handleNext = (data: DimensionsType | TableValuesType) => {
    switch (step) {
      case 1:
        if ("row" in data && "column" in data) {
          setDimensions(data as DimensionsType);
          setStep(step + 1);
        }
        break;
      case 2:
        if ("tableValues" in data) {
          setTableValues(data as TableValuesType);
          setStep(step + 1);
        }
        break;
      default:
        break;
    }
  };

  const handlePrev = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && <Dimensions onNext={handleNext} />}
      {step === 2 && dimensions && (
        <TableValues
          dimensions={dimensions}
          onNext={handleNext}
          onPrev={handlePrev}
        />
      )}
      {step === 3 && tableValues && (
        <Sorting tableValues={tableValues.tableValues} onPrev={handlePrev} />
      )}
    </div>
  );
};

export default App;
