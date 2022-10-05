import "./Modal.css";

const Modal = ({ children , button }) => {
    return (
        <div className="modalBackground">
            <div className="modalContainer">{children}</div>
            
        </div>
    );
};

export default Modal;
