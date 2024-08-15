import React from "react";
import { SizeGuideTable } from "../components/sizeGuide/SizeGuideTable";
import { shoesColumns, womenShoes } from "../components/sizeGuide/tableInfo";

export const SizeGuide = () => {
  return (
    <div className="bg-[url('/img/sizeguidebg.jpg')] bg-cover min-h-screen bg-fixed rounded-lg">
      <div className="w-full h-full backdrop-blur-sm rounded-lg p-2 md:p-5 xl:p-5">
        <div className="text-center text-xl md:text-3xl xl:4xl font-bold text-white">Size Guide</div>
        <div className="text-white text-xl xl:text-2xl font-bold border-b-2">Shoes Guide</div>
        <div className="grid grid-cols md:grid-cols-3 gap-2 md:gap-5 xl:gap-5">
          <SizeGuideTable title="Bangladeshi Women's Shoe Size Chart" columns={shoesColumns} datas={womenShoes} />
          <SizeGuideTable title="Bangladeshi Women's Shoe Size Chart" columns={shoesColumns} datas={womenShoes} />
          <SizeGuideTable title="Bangladeshi Women's Shoe Size Chart" columns={shoesColumns} datas={womenShoes} />
        </div>
      </div>
    </div>
  );
};
