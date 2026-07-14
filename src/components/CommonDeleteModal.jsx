import api from "../api/axios.js";
function CommonDeleteModal({ show, onClose, selectedRecord, url, fetchRecords }) {
    if (!show) {
        return null;
    }

    const handleDelete = async () => {
        try {
            await api.delete(`${url}${selectedRecord._id}`);
            fetchRecords();
            onClose();
        } catch (error) {
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
                                Delete Record
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
                                Are you sure you want to delete this Record?
                            </p>



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

export default CommonDeleteModal;