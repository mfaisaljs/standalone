import React from "react";

function Thumbnail({ id, item }) {
  return (
    <>
      <div className="flex flex-row flex-1 ">
        <div className="w-full relative ">
          <div className="w-full relative ">
            <div
              className="py-10 text-black"
              style={{
                background: "#f1f1f1",
                padding: "20px",
                marginBottom: "20px",
              }}
            >
              {item.value}
            </div>
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
