import React, { useEffect, useState } from "react";
import { Dropdown, Spin } from "antd";
import { Link } from "react-router-dom";
import { api } from "../../api/apiConfigaration";
import { category } from "../../api/endpoints";

const NavMenu = () => {
  const [menus, setMenus] = useState([]);
  const [loder, setLoader] = useState(false);
  const getSubcategory = (subcategories = []) => {
    const sub = subcategories.map(({ _id, iconClass, title }) => ({
      key: _id,
      label: (
        <Link
          to={`/subcategory/${_id}`}
          className="p-2 font-semibold text-sm md:text-[0.8rem] w-full"
        >
          {title}
        </Link>
      ),
      // icon: <img className="w-6" src={iconClass} alt="" />,
      // children: children ? getChildren(children) : undefined,
      style: { width: "200px" },
    }));
    return sub;
  };

  // Category Fetching
  const fetchCategories = async () => {
    setLoader(true);
    try {
      const res = await api.get(category.getMenu);
      if (res.success) {
        setMenus(res.result);
      }
    } catch (error) {
      console.log(error);
    }
    setLoader(false);
  };

  // console.log(menus);
  useEffect(() => {
    fetchCategories();
  }, []);
  return (
      <Spin spinning={loder}>
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
              className="font-semibold hover:underline"
            >
              <img src={menu.iconClass} alt="" /> {menu?.title}
            </Link>
          </Dropdown>
      ))}
    </div>
      </Spin>
  );
};

export default NavMenu;
