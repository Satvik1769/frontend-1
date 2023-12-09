"use client";

import Image from "next/image";
import { useState } from "react";
import ChooseAvatar from "./ChooseAvatar";
import ImageBox from "./ImageBox";

const Form = () => {
  const [nickname, setNickname] = useState("");
  const [keywords, setKeywords] = useState("");
  const [twitter, setTwitter] = useState("");
  const [linkedIn, setLinkedin] = useState("");
  const [telegram, setTelegram] = useState("");
  const [personal, setPersonal] = useState("");
  const [avatar, setAvatar] = useState("");
  const [grad, setGrad] = useState(1); // [1,18
  const grads = Array(18).fill(0);
  const handleAvatar = (e, i) => {
    setAvatar(i);
    console.log(i);
    setShowAvatar(false);
  };
  const [showAvatar, setShowAvatar] = useState(false);
  const handleSetNickname = (e) => {
    setNickname(e.target.value);
  };
  const inputBars = [
    {
      label: "Nickname",
      value: nickname,
      setValue: handleSetNickname,
    },
    {
      label: "Social Handles",
      placeholder: "Twitter",
      value: twitter,
      icon: "twitter",
      setValue: setTwitter,
    },
    {
      value: linkedIn,
      icon: "linkedIn",
      setValue: setLinkedin,
    },
    {
      value: telegram,
      icon: "telegram",
      setValue: setTelegram,
    },
    {
      value: personal,
      icon: "personal",
      setValue: setPersonal,
    },
    {
      label: "Keywords",
      value: keywords,
      setValue: setKeywords,
    },
  ];
  return (
    <>
      {showAvatar && <ChooseAvatar chooseAvatar={handleAvatar} />}
      <div className="card w-full mt-5 p-5  fcc">
        {inputBars.map(({ label, value, setValue, icon, placeholder }, i) => (
          <div
            className="w-full"
            style={{
              marginTop: label && i != 0 ? 20 : 5,
            }}
          >
            {label && (
              <label className="label" htmlFor={label}>
                {label}
              </label>
            )}
            <div className="frc gap-x-[10px] mt-1">
              {icon && (
                <Image
                  src={"/" + icon + ".png"}
                  alt={icon}
                  width={20}
                  height={20}
                />
              )}
              <input
                name={label}
                placeholder={placeholder || label}
                value={value}
                onChange={setValue}
              />
            </div>
          </div>
        ))}
        {/* CHOOSE GRADIENT */}
        <div
          className="w-full flex flex-col gap-y-1"
          style={{
            marginTop: 20,
          }}
        >
          <label className="label" htmlFor={"choose"}>
            {"Background Gradient"}
          </label>
          <div
            className="w-full flex flex-wrap gap-[2px]"
            style={
              {
                //   gridTemplateColumns: "repeat(4, minmax(100px,1fr))",
              }
            }
          >
            {grads.map((item, i) => (
              <button
                onClick={() => {
                  setGrad(i + 1);
                }}
                key={i}
                className="card h-10 w-10"
                style={{
                  borderRadius: 5,
                  background: `var(--grad${i + 1})`,
                }}
              ></button>
            ))}
          </div>
        </div>
        {/* CHOOSE AVATAR */}
        <div
          className="w-full flex flex-col gap-y-1"
          style={{
            marginTop: 20,
          }}
        >
          <label className="label" htmlFor={"choose"}>
            {"Avatar"}
          </label>
          {avatar && (
            <ImageBox
              grad={grad}
              onClick={() => {
                setShowAvatar(true);
              }}
              contHeight={330}
              contWidth={330}
              style={{
                border: "none",
              }}
              className={"border-none w-fit p-0"}
              src={`/avatar${avatar}.png`}
              width={330}
              height={330}
            />
            // <Image
            //   src={`/avatar${avatar}.png`}
            //   alt={avatar}
            //   width={330}
            //   height={330}
            // />
          )}
          <button
            onClick={() => {
              setShowAvatar(true);
            }}
            className="chooseAvatarBtn "
            name="choose"
          >
            Choose Avatar
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
