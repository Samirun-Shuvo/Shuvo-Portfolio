
import React, { useState } from 'react';
import styles from "./SeeMoreDescription.module.css"

function SeeMoreDescription({ description }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <p className={isExpanded ? "" : styles.collapsed}>
        {description}
      </p>
      <button className='text-[gray]' onClick={() => setIsExpanded(!isExpanded)}>
        {isExpanded ? 'See Less' : 'See More'}
      </button>
    </div>
  );
}

export default SeeMoreDescription;
