import React from 'react';

interface FlipElementType {
  className: string;
  handleFlipping: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
}

const FlipElement = ({ className, handleFlipping }: FlipElementType): JSX.Element => {
  return (
    <div className={className} onMouseDown={handleFlipping} role="button" tabIndex={0}>
      <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 32 32" className="word__turn-icon">
        <path d="M4.691 27.32c-3.027-3.023-4.691-7.039-4.691-11.32 0-8.82 7.176-16 16-16l2 2-2 2c-6.617 0-12 5.383-12 12 0 3.211 1.25 6.227 3.52 8.492l-2.457 0.32-0.372 2.508zM16 32l-2-1.992 2-2.008c6.617 0 12-5.383 12-12 0-3.203-1.25-6.219-3.523-8.488l2.461-0.324 0.367-2.504c3.027 3.023 4.695 7.043 4.695 11.316 0 8.82-7.18 16-16 16v0z" />
      </svg>
    </div>
  );
};

export default FlipElement;
