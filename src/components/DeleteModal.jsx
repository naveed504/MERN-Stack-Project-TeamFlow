import api from "../api/axios";

function DeleteModal({
  show,
  permission,
  onClose,
  fetchPermissions,
}) {

  if (!show) {
    return null;
  }

  const handleDelete = async () => {
    try {

      await api.delete(`/permissions/delete/${permission._id}`);

      // Refresh Permissions Table
      fetchPermissions();

      // Close Modal
      onClose();

    } catch (error) {

      console.log(error);

    }
  };

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
                Delete Permission
              </h5>

              <button
                type="button"
                className="btn-close"
                onClick={onClose}
              ></button>

            </div>

            {/* Body */}
            <div className="modal-body">

              <p>
                Are you sure you want to delete this permission?
              </p>

              <table className="table table-bordered">

                <tbody>

                  <tr>
                    <th width="120">Subject</th>
                    <td>{permission?.subject}</td>
                  </tr>

                  <tr>
                    <th>Action</th>
                    <td>{permission?.action}</td>
                  </tr>

                </tbody>

              </table>

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
                type="button"
                className="btn btn-danger"
                onClick={handleDelete}
              >
                Delete
              </button>

            </div>

          </div>

        </div>
      </div>
    </>
  );
}

export default DeleteModal;