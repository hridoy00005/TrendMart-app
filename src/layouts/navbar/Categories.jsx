import React from "react";
import { Dropdown } from "antd";
import { Link } from "react-router-dom";
import { categories } from "./menu";

const Categories = () => {
  const getSubcategory = (subcategory = []) => {
    const sub = subcategory.map(({ _id, icon, children, name }) => ({
      key: _id,
      label: (
        <Link to={`/subcategory/${_id}`}>
          {name}
        </Link>
      ),
      icon: <img className="w-6" src={icon} alt="" />,
      children: children ? getChildren(children) : undefined,
      style:{width:"180px"},
    }));
    return sub;
  };

  // make children format
  const getChildren = (children) => {
    const ch = children.map(({ _id, iconClass, name }) => ({
      key: _id,
      label: (
        <Link to={`/children/${_id}`}>
          {/* <span className="mr-1">
            <i className={iconClass}></i>
          </span>{" "} */}
          {name}
        </Link>
      ),
      icon: <i className={iconClass}></i>,
      style:{width:"180px"}
    }));
    return ch;
  };

  return (
    <div className="flex my-auto">
      {categories.map((ct) => (
        <Dropdown
          key={ct._id}
          menu={{ items: getSubcategory(ct?.subcategory) }}
          placement="bottomLeft"
          arrow
          className="mr-1 sm:mr-3 md:mr-5"
        >
          <Link
            to={`/categories/${ct?._id}`}
            className="text-white sm:text-base md:text-lg font-semibold hover:underline"
          >
            <img src={ct.icon} alt="" /> {ct?.name}
          </Link>
        </Dropdown>
      ))}
    </div>
  );
};

export default Categories;
