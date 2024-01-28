import React, { useEffect, useState } from 'react'
import { CButton, CInput, CSelect } from "../commons";
import { Input, Modal, Spin } from "antd";
import districts from "../../utils/geo_bd/districts.json";
import upazila from "../../utils/geo_bd/upazila.json";
import { api } from '../../api/apiConfigaration';
import { notify } from '../../utils/notification';
import { address } from '../../api';

const EditForm = ({isModalOpen, setIsModalOpen, adata, fetchAddress}) => {
    
    const { TextArea } = Input;
    const [loadAddress, setLoadAdress] = useState(false);
    const [updateData, setUpdateData] = useState({
        name:adata.name,
        phone:adata.phone,
        upazila:adata.upazila,
        district:adata.district,
        address:adata.address,
    })

    // Modals Methods
    const closeModal = () => {
      setIsModalOpen(false);
    };

    //Filtered Upazilas State
    const [filteredUpazilas, setFilteredUpazilas] = useState([]);

    // Select Dristrict and filtered Upazillas
    const selectDistrict =(name) => {
        setUpdateData({ ...updateData, district: name });
        const { id } = districts.find((ds) => ds.name === name);
        const filteredUpazilas = upazila.filter(
        (up) => up.district_id === id
        );
        console.log(filteredUpazilas);
        setFilteredUpazilas([...filteredUpazilas.map((upz) => upz.name)]);
    }

    const onchange = (e)=>{
        const {name, value} = e.target;
        setUpdateData({...updateData, [name]:value})
    }

    //Save Adress
    const onSave=async()=>{
        setLoadAdress(true);
        try {
            const res = await api.put(address.editAddress, adata?._id, {address:updateData});
            notify(res);
            if(res.success){
                closeModal();
                fetchAddress();
            }
        } catch (error) {
            console.log(error);
        }
        setLoadAdress(false);
    }

    useEffect(()=>{return selectDistrict(adata.district)},[]);

    const disabled = !updateData.name || !updateData.phone ||!updateData.address || (updateData.name == adata.name && updateData.phone === adata.phone && updateData.district === adata.district && updateData.upazila === adata.upazila && updateData.address === adata.address)
    
  return (
    <Spin spinning={loadAddress} size='large'>
            <Modal
                title="Add Address"
                open={isModalOpen}
                onCancel={closeModal}
                footer={false}
            >

                <CInput label="Name" value={updateData.name} name="name" onChange={onchange} />
                <CInput label="Phone" value={updateData.phone} name="phone" onChange={onchange} />

                {/* Select District */}
                <div className="col-span-3 md:col-span-1 py-3">
                    <CSelect
                        label="District"
                        showSearch
                        placeholder="Select District"
                        options={districts.map((dst) => dst.name)}
                        onChange={selectDistrict}
                        value={updateData.district}
                    />
                </div>

                {/* Select Upazila */}
                <div className="col-span-3 md:col-span-1 py-3">
                    <CSelect
                    label="Upazila"
                    showSearch
                    placeholder="Select Upazila"
                    options={filteredUpazilas}
                    onChange={(upazila) => {
                        setUpdateData({ ...updateData, upazila: upazila });
                    }}
                    value={updateData.upazila}
                    />
                </div>

                {/* Address */}
                <div className="col-span-3 md:col-span-1 pt-3 mb-5">
                    <h2 className="font-semibold">Address</h2>
                    <TextArea
                    rows={4}
                    size="large"
                    onChange={(e) =>
                        setUpdateData({ ...updateData, address: e.target.value })
                    }
                    value={updateData.address}
                    />
                </div>

                <CButton className="mt-3 text-center" name="Update Address" onClick={onSave} disabled={disabled} />
            </Modal>
          </Spin>
  )
}

export default EditForm