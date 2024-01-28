import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import { Avatar, Card, Popconfirm } from 'antd';
import EditForm from './EditForm';
import { useState } from 'react';
import { address, api } from '../../api';
import { notify } from '../../utils/notification';
const { Meta } = Card;

const AddressCard = ({adata, fetchAddress}) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Delete Address
    const onDelete =async()=>{
        try {
            const res =await api.delete(address.deleteAddress, adata._id);
            notify(res);
            if(res.success){
                fetchAddress();
            }
        } catch (error) {
            console.log(error);
        }
    }

    const showModal = () => {
        setIsModalOpen(true);
      };

  return (
    <Card
    style={{
      width: 300,
      margin:10,
    }}
    actions={[
      <EditOutlined key="edit" onClick={showModal} style={{color: 'blue'}} />,
        <Popconfirm
            title="Delete The Address"
            description="Are you sure to delete this address?"
            okText="Yes"
            cancelText="No"
            okType="danger"
            onConfirm={onDelete}
        >
            <DeleteOutlined key="delete" style={{color: 'red'}} />
        </Popconfirm>,

    ]}
  >
    <Meta
      title={adata.name}
      description={adata.address}
    />
    <p>{adata.upazila}, {adata.district}, BD</p>
    <p><i className="fa-solid fa-phone"></i> {adata.phone}</p>

    {/* Edit Modal */}
    <EditForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} adata={adata} fetchAddress={fetchAddress} />
  </Card>
  )
}

export default AddressCard