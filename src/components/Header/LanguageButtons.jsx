import React from 'react';

const LangBtn = React.memo(({ onClick, children }) => {
  return <button onClick={onClick}>{children}</button>;
});

export default LangBtn;