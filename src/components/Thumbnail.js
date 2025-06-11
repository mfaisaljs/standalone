import React, { useContext, useState, useEffect } from "react";
import { GlobalContext } from "../context/global";
import { useStyles } from "../helper/hooks";
function Thumbnail({ id, item }) {
  const context = useContext(GlobalContext);
  const [presetValue, setPresetValue] = useState("");
  useEffect(() => {
    setPresetValue(item.preset);
  }, [item]);
  console.log(context.productData);
  const containerClass = useStyles(
    context.productData.settings?.presets[presetValue] || {},
    id
  );
  const titleClass = useStyles(
    context.productData.settings?.presets[presetValue]?.title || {},
    id
  );
  return (
    <>
      <div className={`flex flex-row flex-1 ${containerClass} `}>
        <div className="w-full relative ">
          <div className="w-full relative ">
            <div className={`${titleClass}`}>{item.value}</div>
            <div className="flex flex-row gap-20">
              {item.options.map((f) => {
                return (
                  <div key={f.id}>
                    <div>
                      <img className="max-w-[100px] " src={f.image} />
                      <div className="max-w-[100px] text-center center">
                        {f.label}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Thumbnail;
