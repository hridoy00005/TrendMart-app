export const OrderAddress = ({addressData, title}) => (
  <div className="border rounded-lg shadow p-3">
    <h2 className="text-xl font-semibold">{title}</h2>
    <div>{addressData?.name}</div>
    <div>{addressData?.address}</div>
    <div>
      {addressData?.upazila},{" "}
      {addressData?.district}
    </div>
    {addressData?.phone && (
      <div>phone: {addressData?.phone}</div>
    )}
    <div>email: {addressData?.email}</div>
  </div>
);
