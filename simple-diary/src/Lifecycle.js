import { useEffect, useState } from "react";

function UnMountTest() {
  useEffect(() => {
    console.log("Mount!");
    return () => console.log("Unmount!");
  }, []);

  return <div>Unmount Testing Component</div>;
}

function Lifecycle() {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
    <div style={{ padding: 20 }}>
      <button onClick={toggle}>ON/OFF</button>
      {isVisible && <UnMountTest />}
    </div>
  );
}

export default Lifecycle;
