import React, { useContext, useState } from 'react';
import UserModal from './UserModal';
import Vieworder from './Vieworder';
import { Product_Context } from '../../Context/ProductContext';

function Users() {
  const { User, remove_user } = useContext(Product_Context);

  const [isModal, setModal] = useState(false);
  const [selectedUser, setUser] = useState(null);
  const [selectuserorder, setSelectUserOrder] = useState(null);
  const [viewModal, setView] = useState(false);

  const handleCart = (user) => {
    setModal(true);
    setUser(user);
  };

  const handleOrder = (user) => {
    setView(true);
    setSelectUserOrder(user);
  };

  return (
    <div className='flex flex-col justify-center items-center mt-8 max-w-7xl mx-auto p-6'>
      <h1 className='font-bold text-2xl underline mb-6'>Users</h1>
      <div className='overflow-x-auto w-full'>
        <table className='min-w-full border-collapse block md:table'>
          <thead className='block md:table-header-group'>
            <tr className='border border-gray-300 md:table-row flex md:flex-none flex-col md:flex-row'>
              <th className='border p-3 text-left md:table-cell'>ID</th>
              <th className='border p-3 text-left md:table-cell'>Name</th>
              <th className='border p-3 text-left md:table-cell'>Email</th>
              <th className='border p-3 text-left md:table-cell'>Orders</th>
              <th className='border p-3 text-left md:table-cell'>Cart</th>
              <th className='border p-3 text-left md:table-cell'>Remove Users</th>
            </tr>
          </thead>
          <tbody className='block md:table-row-group'>
            {User.map((user) => (
              <tr className='border border-gray-300 md:table-row flex md:flex-none flex-col md:flex-row' key={user.id}>
                <td className='border p-3 md:table-cell'>{user.id}</td>
                <td className='border p-3 md:table-cell'>{user.name}</td>
                <td className='border p-3 md:table-cell'>{user.email}</td>
                <td className='border p-3 md:table-cell'>
                  <button
                    className="bg-gray-600 hover:bg-slate-300 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleOrder(user)}
                  >
                    View Order
                  </button>
                </td>
                <td className='border p-3 md:table-cell'>
                  <button
                    className="bg-gray-600 hover:bg-slate-300 text-white font-bold py-2 px-4 rounded"
                    onClick={() => handleCart(user)}
                  >
                    View Cart
                  </button>
                </td>
                <td className='border p-3 md:table-cell'>
                  <button
                    className="bg-red-600 hover:bg-red-400 text-white font-bold py-2 px-4 rounded"
                    onClick={() => remove_user(user.id)}
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {viewModal && <Vieworder selectuserorder={selectuserorder} setView={setView} />}
      {isModal && <UserModal selectedUser={selectedUser} setModal={setModal} />}
    </div>
  );
}

export default Users;
