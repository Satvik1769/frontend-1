import Banner from "@/components/Banner";
import ProfileCardDetails from "@/components/ProfileCardDetails";
import Image from "next/image";

const page = () => {
  const connectedIn = "EthIndia 2023";
  return (
    <>
      <div
        className="h-full w-full min-h-screen"
        style={{
          backgroundColor: "#161D23",
        }}
      >
        <div className="" style={{ backgroundColor: "var(--bg2)" }}>
          <Hero />
          <div className="mt-16 frc items-start justify-between">
            <ProfileCardDetails isDark={true} />
            <div className="frc gap-x-2 mr-2">
              <button
                className=" visitProfileBtn"
                style={{
                  color: "white",
                }}
              >
                Call
              </button>
              <button
                className=" visitProfileBtn"
                style={{
                  color: "white",
                }}
              >
                Chat
              </button>
            </div>
          </div>
        </div>
        <div
          className="w-full h-full py-10 px-[10px] "
          style={{
            backgroundColor: " #161D23",
            borderTop: "1px solid var(--border)",
            boxShadow:
              "0px -4px 10px 0px rgba(255, 255, 255, 0.02), 0px 4px 10px 0px rgba(0, 0, 0, 0.15) inset",
          }}
        >
          {connectedIn && (
            <div className="w-full h-full frcsb flex-wrap">
              <h4>connected in</h4>
              <h4 className="text-white">{connectedIn}</h4>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default page;

const Hero = ({
  src = "/avatar12.png",
  grad = 12,
  width = 500,
  height = 500,
}) => {
  return (
    <div className=" w-full relative max-h-[391px] lg:max-h-[716px]">
      <div
        className="flex fcc pt-16  relative w-full  max-h-[391px] overflow-hidden  lg:max-h-[716px]"
        style={{
          // borderRadius: 10,
          height: "inherit",
          background: `var(--grad${grad})`,
        }}
      >
        <Image
          priority={true}
          src={src}
          alt={src}
          // style={{ borderRadius: 10 }}
          width={width || 500}
          height={height || 500}
        />
      </div>
      <div
        className="w-full"
        style={{
          position: "absolute",
          bottom: -100,
        }}
      >
        <Banner />
      </div>
    </div>
  );
};
