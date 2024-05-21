import classes from "../../../styles/EnrollmentPopup.module.css"; // Importing CSS module for styling
import UploadDocuments from "./UploadDocuments";
import { useState, useEffect } from "react";
import Modal from "../../Modal/Modal";
import { RiDeleteBin5Line } from "react-icons/ri";
import Pagination from "../../../ui/Pagination";

// Functional component TimeSettingModal
export default function EnrollSteps({ handleClose }) {
  const [step, setStep] = useState(3);
  const [showModal, setShowModal] = useState(true);
  const [documents, setDocuments] = useState([]);
  const fileNames = {
    aadhaar: "",
    pan: "",
    tc: "",
    marks: "",
    caste: "",
    photo: "",
  };
  const [fileImages, setFileImages] = useState(fileNames);
  const [selectedDocuments, setSelectedDocuments] = useState({
    aadhaar: false,
    pan: false,
    tc: false,
    marks: false,
    caste: false,
    photo: false,
  });

  useEffect(() => {
    async function getDocuments() {
      try {
        const response = await fetch(
          "http://localhost:4000/StudentEnrollDetails"
        );
        const documents = await response.json();
        setDocuments(documents);
      } catch (err) {
        console.log(err);
      }
    }
    getDocuments();
  }, []);

  const closeModal = () => {
    setShowModal(false);
  };

  const submitHandler = async () => {
    console.log(fileImages);
    const updatedDocuments = [...documents];
    updatedDocuments[0].documents = fileImages;
    console.log(updatedDocuments[0].documents);
    const response = await fetch("http://localhost:4000/StudentEnrollDetails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedDocuments),
    });
  };

  //Handle deleting all documents
  const deleteHandler = () => {
    setFileImages(fileNames);
  };

  const handlePrevious = () => {
    if (step === 3 || step === 1) {
      console.log("Cancel");
      handleClose();
    } else {
      setStep(step - 1);
    }
  };

  //Handle uploading documents
  const uploadFileHandler = (fileName, imageUrl) => {
    setFileImages((prevState) => ({
      ...prevState,
      [fileName]: imageUrl,
    }));
  };

  return (
    <Modal handleClose={closeModal} isOpen={showModal}>
      <div className={classes.container}>
        <div className={classes.header}>
          {/* <h4>Upload documents</h4> */}
          <Pagination setStep={setStep} step={step} />
          <div className={classes.trash}>
            <RiDeleteBin5Line
              className={classes.trashIcon}
              onClick={deleteHandler}
            />
          </div>
        </div>
        {step === 3 && (
          <UploadDocuments
            step={2}
            currentStep={step}
            fileImages={fileImages}
            uploadFileHandler={uploadFileHandler}
          />
        )}
        {/* <span className={classes.parentbutton}>
          <button
            className={classes.previousbutton}
            onClick={handlePrevious}
            disabled={step === 1}
          >
            <span>Cancel</span>
          </button>

          <button className={classes.submitbutton} onClick={submitHandler}>
            <span> Save</span>
          </button>
        </span> */}
      </div>
    </Modal>
  );
}
