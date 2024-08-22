import React from "react";
import { SizeGuideTable } from "../components/sizeGuide/SizeGuideTable";
import {
  kidPants,
  kidShoes,
  kidTshirt,
  menPants,
  menShoes,
  menTshirt,
  pantsColumns,
  shoesColumns,
  tshirtColumns,
  womenPants,
  womenShoes,
  womenTshirt,
} from "../components/sizeGuide/tableInfo";

export const SizeGuide = () => {
  return (
    <div className="bg-[url('/img/sizeguidebg.jpg')] bg-cover min-h-screen bg-fixed rounded-lg">
      <div className="w-full h-full p-2 md:p-5 xl:p-5">
        <div className="text-center text-xl md:text-3xl xl:4xl font-bold text-white">
          Size Guide
        </div>

        {/* Shoe guide */}
        <div className="mb-5">
          <div className="text-yellow-400 text-xl xl:text-2xl font-bold border-b-2 mb-2">
            Shoe Guide
          </div>
          <div className="grid grid-cols md:grid-cols-3 gap-2 md:gap-5 xl:gap-5">
            <SizeGuideTable
              title="Kid's Shoe Size Chart"
              columns={shoesColumns}
              datas={kidShoes}
            />
            <SizeGuideTable
              title="Women's Shoe Size Chart"
              columns={shoesColumns}
              datas={womenShoes}
            />
            <SizeGuideTable
              title="Men's Shoe Size Chart"
              columns={shoesColumns}
              datas={menShoes}
            />
          </div>
        </div>

        {/* T-Shirt guide */}
        <div className="mb-5">
          <div className="text-yellow-400 text-xl xl:text-2xl font-bold border-b-2 mb-2">
            T-Shirt Guide
          </div>
          <div className="grid grid-cols md:grid-cols-3 gap-2 md:gap-5 xl:gap-5">
            <SizeGuideTable
              title="Kid's T-Shirt Size Chart"
              columns={tshirtColumns}
              datas={kidTshirt}
            />
            <SizeGuideTable
              title="Women's T-Shirt Size Chart"
              columns={tshirtColumns}
              datas={womenTshirt}
            />
            <SizeGuideTable
              title="Men's T-Shirt Size Chart"
              columns={tshirtColumns}
              datas={menTshirt}
            />
          </div>
        </div>

        {/* Pants guide */}
        <div className="mb-5">
          <div className="text-yellow-400 text-xl xl:text-2xl font-bold border-b-2 mb-2">
            Pants Guide
          </div>
          <div className="grid grid-cols md:grid-cols-3 gap-2 md:gap-5 xl:gap-5">
            <SizeGuideTable
              title="Kid's Pants Size Chart"
              columns={pantsColumns}
              datas={kidPants}
            />
            <SizeGuideTable
              title="Women's Pants Size Chart"
              columns={pantsColumns}
              datas={womenPants}
            />
            <SizeGuideTable
              title="Men's Pants Size Chart"
              columns={pantsColumns}
              datas={menPants}
            />
          </div>
        </div>

        {/* Three Pieces guide */}
        <div className="mb-5">
          <div className="text-yellow-400 text-xl xl:text-2xl font-bold border-b-2 mb-2">
          Three Piece Guide
          </div>
          <div className="grid grid-cols md:grid-cols-3 gap-2 md:gap-5 xl:gap-5">
            <SizeGuideTable
              title="Kid's Shoe Size Chart"
              columns={shoesColumns}
              datas={kidShoes}
            />
            <SizeGuideTable
              title="Women's Shoe Size Chart"
              columns={shoesColumns}
              datas={womenShoes}
            />
            <SizeGuideTable
              title="Men's Shoe Size Chart"
              columns={shoesColumns}
              datas={menShoes}
            />
          </div>
        </div>

        {/* Women Dress guide */}
        <div className="mb-5">
          <div className="text-yellow-400 text-xl xl:text-2xl font-bold border-b-2 mb-2">
            Women Dress Guide
          </div>
          <div className="grid grid-cols md:grid-cols-3 gap-2 md:gap-5 xl:gap-5">
            <SizeGuideTable
              title="Kid's Shoe Size Chart"
              columns={shoesColumns}
              datas={kidShoes}
            />
            <SizeGuideTable
              title="Women's Shoe Size Chart"
              columns={shoesColumns}
              datas={womenShoes}
            />
            <SizeGuideTable
              title="Men's Shoe Size Chart"
              columns={shoesColumns}
              datas={menShoes}
            />
          </div>
        </div>

        {/* Panjabi guide */}
        <div className="mb-5">
          <div className="text-yellow-400 text-xl xl:text-2xl font-bold border-b-2 mb-2">
            Panjabi Guide
          </div>
          <div className="grid grid-cols md:grid-cols-3 gap-2 md:gap-5 xl:gap-5">
            <SizeGuideTable
              title="Kid's Shoe Size Chart"
              columns={shoesColumns}
              datas={kidShoes}
            />
            <SizeGuideTable
              title="Women's Shoe Size Chart"
              columns={shoesColumns}
              datas={womenShoes}
            />
            <SizeGuideTable
              title="Men's Shoe Size Chart"
              columns={shoesColumns}
              datas={menShoes}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
