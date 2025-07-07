import { useEffect } from 'react';

function TestComponent() {
  useEffect(() => {
    console.log('test');
  }); // Missing dependency array - should trigger react-hooks/exhaustive-deps
  
  return <div>Test</div>;
}

export default TestComponent; 