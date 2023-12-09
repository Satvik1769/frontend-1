import Form from "@/components/Form";

const page = () => {
  const id = "Create profile";
  const data =
    "These details will be shown to others when you add them to your circle.";

  return (
    <div className="px-[10px] sm:px-[30px] pb-10 pt105 w-full ">
      <div className="flex   flex-col gap-y-5 items-start w-full">
        <h1 style={{ fontSize: "clamp(42px,7vw,89px)" }}>
          {id.split("%20")?.join(" ")}
        </h1>
        <p>{data}</p>
      </div>
      <Form />
    </div>
  );
};

export default page;
