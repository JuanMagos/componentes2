const Parent = ({ children, esUnComponente }) => {
  console.log(children);

  return (
    <>
      {esUnComponente()}
      <div>{children}</div>
    </>
  );
};

export default Parent;
