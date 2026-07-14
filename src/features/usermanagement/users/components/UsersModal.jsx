import { useState, useEffect } from "react";
import api from "../../../../api/axios";

function UsersModal({ show, onClose, formMode ,selectedRecord, fetchRecords}) {
    if (!show) {
        return null;
    }

    const [userRoles, setUserRoles] = useState([]);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role: ""
    });


    const fetchRoles = async () => {
        try {
            const response =await  api.get("/roles/get-all-roles");
            if (response.status === 200) {
                setUserRoles(response.data.roles);
            }
            console.log("Roles fetched successfully:", response.data.roles);
           
        } catch (error) {
            console.error('Error fetching roles:', error);
        }
    };

 
    useEffect(() => {
        fetchRoles();
    }, []);

const handleChange=(e)=>{
    const { name, value } = e.target;
    setFormData({...formData, [name]: value})
}

    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            console.log("Form Data: ", formData);
           const response = await api.post("/users/create", formData);

            fetchRecords();
            onClose();

        }catch(error){
            console.log(error);
        }   
    }
   
    return (
        <>
            <div
                className="modal show d-block"
                tabIndex="-1"
                style={{ backgroundColor: "rgba(0,0,0,0.5)" }}
            >
                <div className="modal-dialog">

                    <div className="modal-content">

                        {/* Header */}
                        <div className="modal-header">

                            <h5 className="modal-title">
                            {formMode === "create" ? "Create User" : "Edit User"}
                            </h5>

                            <button
                                type="button"
                                className="btn-close"
                                onClick={onClose}
                            ></button>

                        </div>

                        {/* Body */}
                        <div className="modal-body">

                             <form onSubmit={handleSubmit}>

              <div className="modal-body">

                {/* Subject */}
                <div className="mb-3">

                  <label className="form-label">
                    Name
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    
                    placeholder="Enter Name"
                    required
                  />

                </div>

                {/* Action */}
                <div className="mb-3">
                  <label className="form-label">
                    Email
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label">
                    Password
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="Enter Email"
                    required
                  />
                </div>
              

                <div className="mb-3">

    <label className="form-label">
        Role
    </label>

    <select
        className="form-select"
        name="role"
        value={formData.role}
        onChange={handleChange}
    >

        <option value="">
            Select Role
        </option>

        {userRoles.map((role) => (

            <option
                key={role._id}
                value={role._id}
            >
                {role.name}
            </option>

        ))}

    </select>

</div>

              </div>

              {/* Footer */}
              <div className="modal-footer">

                <button
                  type="button"
                  className="btn btn-secondary"
                  onClick={onClose}
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="btn btn-primary"
                >
                  {formMode === "create"
                    ? "Create"
                    : "Update"}
                </button>

              </div>

            </form>



                        </div>

                      

                    </div>

                </div>
            </div>
        </>
    );

}

export default UsersModal;