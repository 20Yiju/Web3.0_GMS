import RadioContext from './RadioContext';

export default function RadioGroup({ label, children, ...rest }) {
  return (
    <div>
      <legend>{label}</legend>
      <RadioContext.Provider value={rest}>{children}</RadioContext.Provider>
    </div>
  );
}