import React, { useEffect, useState } from 'react';
import { Slider } from 'antd';
import { FaFilter } from 'react-icons/fa';

interface WeightSliderProps {
  onRangeChange: (value: number[]) => void;
  onApplyChanges: (value: number[]) => void;
  currentWeightRange: number[];
}

interface WeightRangeSliderProps extends WeightSliderProps {
  isVisible: boolean;
}

const WeightRangeSlider: React.FC<WeightRangeSliderProps> = ({  currentWeightRange, onApplyChanges, isVisible }) => {
  const [tempWeightRange, setTempWeightRange] = useState<number[]>(currentWeightRange);

  const handleSliderChange = (value: number[]) => {
    setTempWeightRange(value);
    console.log("'Temp weight range", tempWeightRange);
  };

  const handleApplyChanges = () => {
    onApplyChanges(tempWeightRange);
    console.log("Apply changes called");
  };

  useEffect(() => {
    setTempWeightRange(currentWeightRange);
  }, [currentWeightRange]);

  return (
    <>
      {isVisible && (
        <>
          <span className="tempWeightRange">{tempWeightRange[0]} gram - {tempWeightRange[1]} gram</span>
          <div className="sliderComponentContainer">
            <Slider
            //   style={{ width: 150, marginLeft: '1rem' }}
              range
              min={300}
              max={500}
              defaultValue={currentWeightRange}
              value={tempWeightRange}
              onChange={handleSliderChange}
            />
            <span onClick={handleApplyChanges} className="weightRangeIcon"><FaFilter /></span>
          </div>
        </>
      )}
    </>
  );
};

export default WeightRangeSlider;
