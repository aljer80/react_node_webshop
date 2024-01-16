import React, { useState, useEffect } from 'react';
import { Product } from '../../types/product.types';

interface BrandBarProps {
    inventory: Product[];
    onBrandClick: (brand: string) => void;
}

const NavBar: React.FC<BrandBarProps> = ({ inventory, onBrandClick }) => {
  const brands = ["Babolat", "DoPadel", "Head", "Nox", "Osaka"]
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const handleBrandClick = (brand: string) => {
    setSelectedBrand(brand);
    onBrandClick(brand);
  }

  useEffect(() => {
    const filteredProducts = inventory.filter(product => product.brand === selectedBrand);
      console.log(`Products for ${selectedBrand}:`, filteredProducts);
  }, [selectedBrand, inventory])

  return (
    <div>
      {brands.map((brand) => (
        <button key={brand} onClick={() => handleBrandClick(brand)}>
          {brand}
        </button>
      ))}
    </div>
  );
}

export default NavBar