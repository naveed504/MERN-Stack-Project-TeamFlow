import { useState, useEffect } from "react";
import api from "../../../../api/axios";
import { BiEditAlt, BiSolidTrashAlt } from "react-icons/bi";

import DeleteModal from "../../../../components/DeleteModal";
import CommonDeleteModal from "../../../../components/CommonDeleteModal";
import UsersModal from "../components/usersModal";

function UsersIndex() {

  const [users, setUsers] = useState([]);

  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  
  
  const [formMode, setFormMode]= useState("create");
  const [openCloseUserModal, setOpenCloseUserModal]= useState(false);


  const handleCreateUser = ()=>{
   setFormMode("create");
   setOpenCloseUserModal(true);
   setSelectedUser(null);

  }






  const fetchUsers = async () => {
    try {
      const response = await api.get('/users/get-all-users');
      if (response.status === 200) {
        setUsers(response.data.users);
      }
    } catch (error) {
      console.log(error);
    }
  }


  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <>
      <div className="body flex-grow-1">
        <div className="container-lg px-4">
          <div className="card mb-4">
            <div className="card-header">
              <strong>Users</strong>

              <button
                className="btn btn-primary float-end"
                onClick={handleCreateUser}

              >
                Create User
              </button>
            </div>

            <div className="card-body">
              <table className="table table-hover">

                <thead className="table-light">

                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Status</th>
                    <th width="120">Actions</th>
                  </tr>

                </thead>

                <tbody>

                  {users.length > 0 ? (

                    users.map((user, index) => (

                      <tr key={user._id}>

                        <td>{index + 1}</td>

                        <td>{user.name}</td>

                        <td>{user.email}</td>

                        <td>{user.role.name}</td>
                        <td>{user.isActive === true ? "Active" : "Inactive"}</td>

                        <td>

                          <BiEditAlt
                            size={22}
                            style={{
                              cursor: "pointer",
                              marginRight: "10px",
                            }}

                          />

                          <BiSolidTrashAlt
                            size={22}
                            style={{ cursor: "pointer" }}
                            onClick={() => {
                              setOpenDeleteModal(true);
                              setSelectedUser(user);
                            }}

                          />

                        </td>

                      </tr>

                    ))

                  ) : (

                    <tr>

                      <td colSpan="4" className="text-center">

                        No Users Found

                      </td>

                    </tr>

                  )}

                </tbody>

              </table>
              <CommonDeleteModal
                show={openDeleteModal}
                onClose={() => { setOpenDeleteModal(false); }}
                selectedRecord={selectedUser}
                url="/users/delete/"
                fetchRecords={fetchUsers}
              />

              <UsersModal show={openCloseUserModal} onClose={() => { setOpenCloseUserModal(false); }}  formMode={formMode} selectedRecord={selectedUser}   fetchRecords={fetchUsers}/>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default UsersIndex;