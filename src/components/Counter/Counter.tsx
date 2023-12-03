
interface CounterProps {
    count: number;
    onPlus: () => void;
    onMinus: () => void;
};

function Counter({count, onPlus, onMinus}: CounterProps) {
  return <div className="counter-wrapper">
  <button onClick={onMinus} className="counter-button">-</button>
  <p className="count">{count}</p>
  <button onClick={onPlus} className="counter-button">+</button>
  </div>;
}


export default Counter;