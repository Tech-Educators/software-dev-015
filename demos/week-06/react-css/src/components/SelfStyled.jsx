export default function SelfStyled() {
  const customStyles = {
    color: "yellow",
    backgroundColor: "fuchsia",
    textDecoration: "underline",
  };

  return (
    <div>
      <h2>Self Styled</h2>
      <p style={{ color: "blue", backgroundColor: "green" }}>
        I have my styles in my opening tag
      </p>
      <p style={customStyles}>
        I have mys styles in the opening tag, but they are defined before the
        return
      </p>
    </div>
  );
}
