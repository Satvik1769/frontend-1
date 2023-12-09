import Banner from "@/components/Banner";
import Image from "next/image";

const page = ({ params }) => {
  const { id } = params;
  // get image
  const image = "/ethindia.png";
  const date = "8-10th December 2023";
  return (
    <>
      <div className="w-full h-full">
        <div
          className="  p-[10px] sm:p-[30px] flex flex-col gap-10 lg:flex-row-reverse items-center w-full"
          style={{
            paddingTop: 90,
          }}
        >
          <Image
            priority={true}
            style={{
              borderRadius: 10,
            }}
            src={image}
            alt={image}
            width={718}
            height={367}
          />
          <div className="flex flex-col gap-y-5 items-start w-full">
            <h1>{id.split("%20")?.join(" ")}</h1>
            <p>{date}</p>
          </div>
        </div>
        <Banner />
      </div>
    </>
  );
};

export default page;
