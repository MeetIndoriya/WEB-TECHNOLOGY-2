export default function Click() {
  function handleClick() {
    alert('You click me');
  }

  function DoubleClick() {
    alert('You Double Click me');
  }

  function MouseDown() {
    alert('Mouse Down Event Happend');
  }

  function MouseUp() {
    alert('Mouse Up Event Happend');
  }

  function MouseEnter() {
    alert('Mouse Enter Event Happend');
  }

  function MouseLeave() {
    alert('Mouse Leave Event Happend');
  }
  
  function MouseMove() {
    alert('Mouse Move Event Happend');
  }

  function ConetextMenu() {
    alert('Mouse Conetext Menu Event Happend');
  }

  function KeyDown() {
    console.log('Key Down Event Happend');
  }
  
    function KeyUp() {
    console.log('Key Up Event Happend');
  }

    function KeyPress() {
    console.log('Key Press Event Happend');
  }


  return (
    <>
    <h1> Mouse Events: </h1>
    <button onClick={handleClick}>
      Click me
    </button>

    <button onDoubleClick={DoubleClick}>
      Double Click
    </button>

    <button onMouseDown={MouseDown}>
      Mouse Down
    </button>

    <button onMouseUp={MouseUp}>
      Mouse Up
    </button>

    <button onMouseEnter={MouseEnter}>
      Mouse Enter
    </button>

    <button onMouseLeave={MouseLeave}>
      Mouse Leave
    </button>

    <button onMouseMove={MouseMove}>
      MouseMove
    </button>

    <button onContextMenu={ConetextMenu}>
    ConetextMenu
    </button>

    <h1> Keyborad Events: </h1>

    <input placeholder="Key Down" onKeyDown={KeyDown}/>
    <input placeholder="Key Up" onKeyUp={KeyUp}/>
    <input placeholder="Key Pressed" onKeyUp={KeyPress}/>

    </>
  );
}