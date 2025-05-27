import React from 'react';

interface ColorSelectorProps {
  colors: string[];
  selectedColor: string;
  onChange: (color: string) => void;
}

const ColorSelector: React.FC<ColorSelectorProps> = ({
  colors,
  selectedColor,
  onChange,
}) => {
  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((color, index) => (
        <button
          key={index}
          type="button"
          className={`
            w-8 h-8 rounded-full border-2 transition-all
            ${selectedColor === color ? 'border-blue-500 scale-110' : 'border-gray-200'}
          `}
          style={{ backgroundColor: color }}
          onClick={() => onChange(color)}
          aria-label={`Select color ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default ColorSelector;