import { useState } from "react";
import Modal from "./Modal";

const Form = () => {
    const [isModalVisible, setModalVisible] = useState(false);

    const onHandleClick = () => {
        setModalVisible(!isModalVisible);
    }

    const onDismissModal = () => {
        setModalVisible(false);
    }

    return (
        <div className="card">
            <div className="card-content">
                <h2>Validation Exercise</h2>
                <button onClick={onHandleClick} className="btn">Toggle Form</button>
            </div>
            {}
            {isModalVisible && <Modal dismissModal={onDismissModal}/>}
        </div>
    )
};

export default Form;