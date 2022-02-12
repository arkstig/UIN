export default function Input({ type, name, id, label, handleChange, value }) {
    return (
      <>
        <label htmlFor={id}>
          <h2>{label}</h2>
        </label>
        <input 
        name={name}
        id={id} 
        type={type}
        onChange={handleChange}
        value={value}
        />
      </>
    );
  }

