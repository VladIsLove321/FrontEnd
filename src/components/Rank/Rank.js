import React  from 'react';

const Rank = ({name, entries}) => {
  return (
    <div>
       <div className='near-white f1  '>
          {`${name}, your current entry count`}
       </div>
       <div className='near-white f2 '>
         {entries}
       </div>
    </div>
  );
}

export default Rank;
