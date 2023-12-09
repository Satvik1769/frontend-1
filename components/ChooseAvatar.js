import ImageBox from "./ImageBox";

const ChooseAvatar = ({ chooseAvatar }) => {
  const avatars = Array(18).fill(0);

  return (
    <div
      className=" w-full h-full fccc"
      style={{
        position: "fixed",
        background: "rgba(0,0,0,0.4)",
        zIndex: 1000,
        top: 0,
        left: 0,
      }}
    >
      <div className=" h-full max-h-[500px] fcc py-7 px-5 w-full mx-[10px] card max-w-[370px] overflow-scroll scrollbar">
        <h2 className="w-full fcc uppercase mb-5">Select avatar</h2>
        <div
          className="w-full grid gap-[10px]"
          style={{
            gridTemplateColumns: "repeat(4, minmax(100px,1fr))",
          }}
        >
          {avatars.map((item, i) => (
            <ImageBox
              onClick={chooseAvatar}
              grad={i + 1}
              contHeight={100}
              contWidth={100}
              style={{
                border: "none",
              }}
              key={i}
              className={"border-none w-fit p-0"}
              src={"/avatar" + (i + 1) + ".png"}
              width={100}
              height={100}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChooseAvatar;
