import React from "react";

export const SizeGuideTable = ( {title, columns, datas }) => {
  return (
    <div>
        <div className="font-semibold text-white text-base xl:text-xl mb-1">{title}</div>
      <table className="border p-5">
        <thead>
          <tr className="">
            {columns?.map((column, idx) => (
              <th className="border text-sm xl:text-lg p-1 xl:p-2 text-white text-center font-semibold" key={idx}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {datas?.map((data, idx) => (
            <tr key={idx}>
              {data?.map((singledt, idy) => (
                <td key={idy} className="border text-sm xl:text-lg text-center text-white">{singledt}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
