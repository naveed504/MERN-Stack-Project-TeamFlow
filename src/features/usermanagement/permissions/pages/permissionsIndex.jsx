import { useState, useEffect } from "react";
import api from "../../../../api/axios";
import { BiEditAlt, BiSolidTrashAlt } from "react-icons/bi";

import DeleteModal from "../../../../components/DeleteModal";
import PermissionsModal from "../components/PermissionsModal";

function PermissionsIndex() {
  const [permissions, setPermissions] = useState([]);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [mode, setMode] = useState("create");
  const [selectedPermission, setSelectedPermission] = useState(null);
  const [permissionsModal, setPermissionsModal] = useState(false);

  const fetchPermissions = async () => {
    try {
      const response = await api.get("/permissions/get-all-permissions");

      setPermissions(response.data.permissions);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPermissions();
  }, []);

  const handleCreatePermission = () => {
    setMode("create");
    setSelectedPermission(null);
    setPermissionsModal(true);
  };

  const handleEditPermission = (permission) => {
    setMode("edit");
    setSelectedPermission(permission);
    setPermissionsModal(true);
  };

  return (
    <>
      <div className="body flex-grow-1">
        <div className="container-lg px-4">
          <div className="card mb-4">
            <div className="card-header">
              <strong>Permissions</strong>

              <button
                className="btn btn-primary float-end"
                onClick={handleCreatePermission}
              >
                Create Permission
              </button>
            </div>

            <div className="card-body">
              <table className="table table-hover">

                <thead className="table-light">

                  <tr>
                    <th>#</th>
                    <th>Subject</th>
                    <th>Action</th>
                    <th width="120">Actions</th>
                  </tr>

                </thead>

                <tbody>

                  {permissions.length > 0 ? (

                    permissions.map((permission, index) => (

                      <tr key={permission._id}>

                        <td>{index + 1}</td>

                        <td>{permission.subject}</td>

                        <td>{permission.action}</td>

                        <td>

                          <BiEditAlt
                            size={22}
                            style={{
                              cursor: "pointer",
                              marginRight: "10px",
                            }}
                            onClick={() =>
                              handleEditPermission(permission)
                            }
                          />

                          <BiSolidTrashAlt
    size={22}
    style={{ cursor: "pointer" }}
    onClick={() => {
        setSelectedPermission(permission);
        setShowDeleteModal(true);
    }}
/>

                        </td>

                      </tr>

                    ))

                  ) : (

                    <tr>

                      <td colSpan="4" className="text-center">

                        No Permissions Found

                      </td>

                    </tr>

                  )}

                </tbody>

              </table>
            </div>
          </div>
        </div>
      </div>

      <DeleteModal
    show={showDeleteModal}
    permission={selectedPermission}
    onClose={() => setShowDeleteModal(false)}
    fetchPermissions={fetchPermissions}
/>

      <PermissionsModal
        show={permissionsModal}
        onClose={() => setPermissionsModal(false)}
        mode={mode}
        permission={selectedPermission}
        fetchPermissions={fetchPermissions}
      />
    </>
  );
}

export default PermissionsIndex;