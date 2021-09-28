import React from 'react';
import Button, { ButtonSize, ButtonType } from './components/Button';

function App() {
  return (
    <div className='App'>
      <h1>按钮组件</h1>
      <Button btnType={ButtonType.Primary} size={ButtonSize.Large} disabled>
        禁用按钮
      </Button>
      <Button size={ButtonSize.Large}>默认按钮</Button>
      <Button btnType={ButtonType.Link} size={ButtonSize.Small} target='_blank'>
        链接按钮
      </Button>
    </div>
  );
}

export default App;
