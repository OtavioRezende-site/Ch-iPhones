import React, { useState } from 'react';

interface ProductImageProps {
  src: string;
  alt: string;
  secondarySrc?: string;
  className?: string;
}

const ProductImage: React.FC<ProductImageProps> = ({ src, alt, secondarySrc, className }) => {
  const [currentSrc, setCurrentSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  const fallbackPlaceholder = 'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=800&auto=format&fit=crop';

  const handleError = () => {
    if (!hasError) {
      if (secondarySrc && currentSrc !== secondarySrc) {
        setCurrentSrc(secondarySrc);
      } else {
        setCurrentSrc(fallbackPlaceholder);
      }
      setHasError(true);
    } else {
      // If even the fallback/secondary fails, use placeholder
      setCurrentSrc(fallbackPlaceholder);
    }
  };

  return (
    <img 
      src={currentSrc} 
      alt={alt} 
      className={className} 
      onError={handleError}
    />
  );
};

export default ProductImage;
