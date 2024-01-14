import { useState} from "react";
import { Product } from "../../types/product.types";
import WeightRangeSlider from "../WeightRangeSlider/WeightRangeSlider";
import { Select } from 'antd';

interface FilteringBarProps {
  products: Product[];
}

//productData syftar på produkterna
//kolla upp category. Hur får jag till category på Product?

const FilteringBar: React.FC<FilteringBarProps> = ({ products }) => {  

    const { Option } = Select;

    const maxProductWeight = Math.max(...products.map(product => Number(product.weight)));
    const defaultWeightRange: [number, number] = [0, maxProductWeight];

    const uniqueBrands = Array.from(new Set(products.map((product) => product.brand)));
    const uniqueShapes = Array.from(new Set(products.map((product) => product.shape)));
    const uniqueBalances = Array.from(new Set(products.map((product) => product.balance)));
    const uniquePlayerTypes = Array.from(new Set(products.map((product) => product.playerType)));

    const [currentBrand, setCurrentBrand] = useState<string>("Alla Märken");
    const [currentShape, setCurrentShape] = useState<string>("Alla Former");
    const [currentBalance, setCurrentBalance] = useState<string>("Alla Balanser");
    const [weightRange, setWeightRange] = useState<number[]>(defaultWeightRange);
    const [isSliderVisible, setIsSliderVisible] = useState<boolean>(false);
    const [filtersActive, setFiltersActive] = useState<boolean>(false);
    
    const filterProducts = (product: Product): boolean => {
        const matchesBrand = currentBrand === "Alla Märken" || product.brand === currentBrand;
        const matchesShape = currentShape === "Alla Former" || product.shape === currentShape;
        const matchesBalance = currentBalance === "Alla Balanser" || product.balance.toLowerCase() === currentBalance.toLowerCase();
        const matchesWeight = product.weight >= weightRange[0] && product.weight <= weightRange[1];

        return matchesBrand && matchesShape && matchesBalance && matchesWeight;
    };

    const filteredProducts = productData.filter(filterProducts);

    const handleSliderChange = (value: number[]) => {
        // Uppdatera temp- värde utan att stänga dropdown
        setWeightRange(value);
    };

    const handleSliderOk = (tempWeightRange: number[]) => {
        setWeightRange(tempWeightRange);
        setFiltersActive(true);
    };

    const handleResetFilters = () => {
        setCurrentBrand("Alla Märken");
        setCurrentShape("Alla Former");
        setCurrentBalance("Alla Balanser");
        setWeightRange(defaultWeightRange);
        setFiltersActive(false);
    }

    return (
        <div className="productList-container">
            <div className="dropDown-container">
                <div className="brand-dropdown">
                    <Select
                        value={currentBrand}
                        onChange={(value: string) => {
                            setCurrentBrand(value);
                            setFiltersActive(true);
                        }}
                    >
                        <Option value={"Alla Märken"}>
                            <span className="filter-span">Visa alla</span>
                        </Option>
                        {uniqueBrands.map((brand) => (
                            <Option key={brand} value={brand}>
                                <span className="filter-span"> {brand}</span>
                            </Option>
                        ))}
                    </Select>
                </div>
                <div className="shape-dropdown">
                    <Select
                        value={currentShape}
                        onChange={(value: string) => {
                            setCurrentShape(value);
                            setFiltersActive(true);
                        }}
                    >
                        <Option value={"Alla Former"}>
                            <span className="filter-span">Visa alla</span>
                        </Option>
                        {uniqueShapes.map((shape) => (
                            <Option key={shape} value={shape}>
                                <span className="filter-span"> {shape}</span>
                            </Option>
                        ))}
                    </Select>
                </div>
                <div className="balance-dropdown">
                    <Select
                        value={currentBalance}
                        onChange={(value: string) => {
                            setCurrentBalance(value);
                            setFiltersActive(true);
                        }}
                    >
                        <Option value={"Alla Balanser"}>
                            <span className="filter-span">Visa alla</span>
                        </Option>
                        {uniqueBalances.map((balance) => (
                            <Option key={balance} value={balance}>
                                <span className="filter-span"> {balance}</span>
                            </Option>
                        ))}
                    </Select>
                </div>
                <div className="weight-range-dropdown">
                    <Select
                        placeholder="Vikt"
                        onDropdownVisibleChange={(visible) => {
                            setIsSliderVisible(visible);
                        }}
                        dropdownRender={() => (
                            <WeightRangeSlider
                                onRangeChange={handleSliderChange}
                                onApplyChanges={handleSliderOk}
                                currentWeightRange={weightRange}
                                isVisible={isSliderVisible}
                            />
                        )}
                    />
                </div>
            </div>
        </div>
    );
}

export default FilteringBar;