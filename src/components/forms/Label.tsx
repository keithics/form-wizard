function Label({ name, label }: { name: string; label: string }) {
  return (
    <>
      <label htmlFor={name} className="labels">
        {label}
      </label>
    </>
  );
}

export default Label;
