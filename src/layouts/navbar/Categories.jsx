import React, { useEffect, useState } from "react";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import { categories } from "./menu";
import { api } from "../../api/apiConfigaration";
import { category } from "../../api/endpoints";

const Categories = () => {
  const [menus, setMenus] = useState([]);
  const [loder, setLoader] = useState(false);
  const getSubcategory = (subcategories = []) => {
    const sub = subcategories.map(({ _id, iconClass, title }) => ({
      key: _id,
      label: (
        <Link to={`/subcategory/${_id}`} className="hover:bg-gray-600 w-full">
          {title}
        </Link>
      ),
      icon: <img className="w-6" src={iconClass} alt="" />,
      // children: children ? getChildren(children) : undefined,
      style:{width:"200px", fontSize:"18px" },
    }));
    return sub;
  };

  // Category Fetching
  const fetchCategories = async()=>{
    setLoader(true)
    try {
      const res = await api.get(category.getMenu);
      if(res.success){setMenus(res.result)}
    } catch (error) {
      console.log(error)
    }
    setLoader(false)
  }

  // console.log(menus);
  useEffect(()=>{fetchCategories()}, []);
  return (
    <div className="flex my-auto">
      {menus.map((menu) => (
        <Dropdown
          key={menu._id}
          menu={{ items: getSubcategory(menu?.subcategories) }}
          placement="bottomLeft"
          arrow
          className="mr-1 sm:mr-3 md:mr-5"
        >
          <Link
            to={`/categories/${menu?._id}`}
            className="text-white sm:text-base md:text-lg font-semibold hover:underline"
          >
            <img src={menu.iconClass} alt="" /> {menu?.title}
          </Link>
        </Dropdown>
      ))}
    </div>
  );
};

export default Categories;
