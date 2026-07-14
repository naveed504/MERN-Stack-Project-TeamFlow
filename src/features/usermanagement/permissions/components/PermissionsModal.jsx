import { useState, useEffect } from "react";
import api from "../../../../api/axios";

function PermissionsModal({
  show,
  onClose,
  mode,
  permission,
  fetchPermissions,
}) {
  const [formData, setFormData] = useState({
    subject: "",
    action: "",
  });

  // ============================
  // Load data when editing
  // ============================
  useEffect(() => {
    if (mode === "edit" && permission) {
      setFormData({
        subject: permission.subject,
        action: permission.action,
      });
    } else {
      setFormData({
        subject: "",
        action: "",
      });
    }
  }, [mode, permission]);

  // ============================
  // Handle Input Change
  // ============================
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // ============================
  // Save Button
  // ============================
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (mode === "create") {
        console.log("Create Permission");

        console.log(formData);

        
        await api.post("/permissions/create", formData);
        

      } else {
        console.log("Update Permission", permission);

        console.log(permission._id);

        console.log(formData);

        
        await api.put(
            `/permissions/update/${permission._id}`,
            formData
        );
        
      }

      // Refresh Table
      fetchPermissions();

      // Close Modal
      onClose();
    } catch (error) {
      console.log(error);
    }
  };

  // ============================
  // Hide Modal
  // ============================
  if (!show) {
    return null;
  }

  return (
    <>
      <div
        className="modal show d-block"
        tabIndex="-1"
        style={{ backgroundColor: "rgba(0,0,0,.5)" }}
      >
        <div className="modal-dialog">

          <div className="modal-content">

            {/* Header */}
            <div className="modal-header">

              <h5 className="modal-title">
                {mode === "create"
                  ? "Create Permission"
                  : "Edit Permission"}
              </h5>

              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>

            </div>

            {/* Form */}
            <form onSubmit={handleSubmit}>

              <div className="modal-body">

                {/* Subject */}
                <div className="mb-3">

                  <label className="form-label">
                    Subject
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Enter Subject"
                    required
                  />

                </div>

                {/* Action */}
                <div className="mb-3">

                  <label className="form-label">
                    Action
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    name="action"
                    value={formData.action}
                    onChange={handleChange}
                    placeholder="Enter Action"
                    required
                  />

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
                  {mode === "create"
                    ? "Create"
                    : "Update"}
                </button>

              </div>

            </form>

          </div>

        </div>
      </div>
    </>
  );
}

export default PermissionsModal;