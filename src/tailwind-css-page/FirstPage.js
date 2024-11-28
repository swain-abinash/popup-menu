import React from "react";
import Cards from "./Cards";
import ProfileCard from "./ProfileCard";

const FirstPage = () => {
  return (
    <div className="flex mx-auto  flex-col  text-black bg-slate-100">
      <div className="grid md:grid-cols-2 grid-cols-1">
        <div className=" py-4 px-4 flex items-center">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <img
          className="py-4 px-4 w-[200%]"
          src="https://t3.ftcdn.net/jpg/05/71/06/76/360_F_571067620_JS5T5TkDtu3gf8Wqm78KoJRF1vobPvo6.jpg"
          alt="HD Image Example"
        />
      </div>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
        <div className=" py-4 px-4 ">
          1 t of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the 1500s, when an unknown
          printer took a galley of type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages, and more recently with desktop
          publishing software like Aldus PageMaker including versions of Lorem
          Ipsum.
        </div>
        <div className=" py-4 px-4 ">
          2 Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
      <div className="flex justify-center  py-4 px-4 bg-gray-300">
        <div className="w-full max-w-4xl">
          3 Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3  ">
        <Cards />
        <Cards />
        <Cards />
        <Cards />
      </div>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 m-10 gap-5 grid-cols-1">
        <ProfileCard />
      </div>
    </div>
  );
};

export default FirstPage;
