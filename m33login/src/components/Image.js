export const Image = ({ url, index }) => {
  console.log(url);
  return (
    <div className={"picContainer " + index}>
      <div
        className={"image " + index}
        style={{
          backgroundImage: `url(${url})`,
          backgroundSize: "cover",
        }}
      />
    </div>
  );
};
