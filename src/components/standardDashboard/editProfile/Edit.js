import React, {useState} from "react";

const Edit = (props) => {
    const [edit , setEdit] = useState(false)
  const { title, text, margin } = props;
  return (
    <div className="grid grid-cols-2 pt-8  border-b-2">
      <main className="">
        <h1 className="font-bold text-[24px] leading-[36px]">{title}</h1>
        <p className="text-[20px]  leading-3">{text}</p>
      </main>
      <button className= {`w-[148px]  h-[58px] ml-[220px] ${margin}`}>Edit</button>
    </div>
  );
};

export default Edit;
