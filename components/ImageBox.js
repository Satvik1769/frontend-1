"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const ImageBox = ({
  contHeight = 167,
  contWidth = 219,
  href = "",
  leftText,
  src = "/avatar1.png",
  rightText,
  height,
  width,
  style,
  className,
  grad = 1,
  onClick,
}) => {
  const router = useRouter();
  return (
    <button
      onClick={(e) => {
        if (href) {
          router.push(href);
          return;
        }
        onClick && onClick(e, grad);
      }}
      style={style}
      className={`p-1 card hoverExpand w-[${contHeight.toString()}px] h-[${contWidth.toString()}px] fcc ${className}`}
    >
      <div
        className="flex"
        style={{
          borderRadius: 10,
          height: "inherit",
          background: `var(--grad${grad})`,
        }}
      >
        <Image
          priority={true}
          src={src}
          alt={src}
          className="self-end"
          style={{ borderRadius: 10 }}
          width={width || 500}
          height={height || 500}
        />
      </div>
      {(leftText || rightText) && (
        <div
          className={`${rightText ? "frcsb w-full" : "frc"} h-full  px-2 py-4`}
        >
          <h3>{leftText}</h3>
          <h3>{rightText}</h3>
        </div>
      )}
    </button>
  );
};

export default ImageBox;
