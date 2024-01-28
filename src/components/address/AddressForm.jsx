import React, { useState } from 'react'
import { CButton, CInput, CSelect } from "../commons";
import { Input, Modal, Spin } from "antd";
import districts from "../../utils/geo_bd/districts.json";
import upazila from "../../utils/geo_bd/upazila.json";
import { api } from '../../api/apiConfigaration';
import { notify } from '../../utils/notification';
import { address } from '../../api';


const AddressForm = ({fetchAddress}) => {

    const { TextArea } = Input;
    const [loadAddress, setLoadAdress] = useState(false);

    // Modals Methods
    const [isModalOpen, setIsModalOpen] = useState(false);
    const showModal = () => {
      setIsModalOpen(true);
    };
    const closeModal = () => {
      setIsModalOpen(false);
    };

    // Location State
    const [location, setLocation] = useState({
        name:"",
        phone:"",
        address: "",
    });

    //Filtered Upazilas State
    const [filteredUpazilas, setFilteredUpazilas] = useState([]);

    const onchange = (e)=>{
        const {name, value} = e.target;
        setLocation({...location, [name]:value})
    }

    //Save Adress
    const onSave=async()=>{
        setLoadAdress(true);
        try {
            const res = await api.post(address.createAddress, {address:location});
            notify(res);
            if(res){
                fetchAddress();
            }
        } catch (error) {
            console.log(error);
        }
        setLoadAdress(false);
    }

  return (
    <div className="ml-2">
        <CButton className="mx-auto my-auto" name="Add Address" onClick={showModal} />
          <Spin spinning={loadAddress} size='large'>
            <Modal
                title="Add Address"
                open={isModalOpen}
                onCancel={closeModal}
                footer={false}
            >

                <CInput label="Name" value={location.name} name="name" onChange={onchange} />
                <CInput label="Phone" value={location.phone} name="phone" onChange={onchange} />

                {/* Select District */}
                <div className="col-span-3 md:col-span-1 py-3">
                    <CSelect
                        label="District"
                        showSearch
                        placeholder="Select District"
                        options={districts.map((dst) => dst.name)}
                        onChange={(name) => {
                            setLocation({ ...location, district: name });
                            const { id } = districts.find((ds) => ds.name === name);
                            const filteredUpazilas = upazila.filter(
                            (up) => up.district_id === id
                            );
                            console.log(filteredUpazilas);
                            setFilteredUpazilas([...filteredUpazilas.map((upz) => upz.name)]);
                        }}
                        value={location.district}
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
                        setLocation({ ...location, upazila: upazila });
                    }}
                    value={location.upazila}
                    />
                </div>

                {/* Address */}
                <div className="col-span-3 md:col-span-1 pt-3 mb-5">
                    <h2 className="font-semibold">Address</h2>
                    <TextArea
                    rows={4}
                    size="large"
                    onChange={(e) =>
                        setLocation({ ...location, address: e.target.value })
                    }
                    value={location.address}
                    />
                </div>

                <CButton className="mt-3 text-center" name="Save Address" onClick={onSave} />
            </Modal>
          </Spin>
      </div>
  )
}

export default AddressForm