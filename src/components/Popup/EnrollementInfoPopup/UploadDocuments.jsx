import { useEffect, useRef, useState } from "react";
import classes from "../../../styles/UploadDocumentsPopup.module.css";
import { IoIosAdd } from "react-icons/io";

export default function UploadDocuments({ fileImages, uploadFileHandler }) {
  const aadhaarInputRef = useRef();
  const panInputRef = useRef();
  const tcInputRef = useRef();
  const marksInputRef = useRef();
  const casteInputRef = useRef();
  const photoInputRef = useRef();

  //   const [fileImages, fileImages] = useState(fileNames);

  function handleFileChange(event, currFileName) {
    event.preventDefault();
    //get the file from the input
    const file = event.target.files[0];
    //read the file using FileReader
    const reader = new FileReader();
    //reading of file is async so below function is executed once file has been read.
    reader.onload = () => {
      //   //setting the src of image based on result of filereader.
      uploadFileHandler(currFileName, reader.result);
    };
    //getting the url of file.
    reader.readAsDataURL(file);
  }

  // Prevent default behavior when a file is dragged over
  const handleDragOver = (event) => {
    event.preventDefault();
  };

  // Handle the file drop
  const handleDrop = (event, currFileName) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      uploadFileHandler(currFileName, reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleDragLeave = (currentFileName) => {
    uploadFileHandler(currentFileName, "");
  };

  return (
    <form className={classes.payrollForm}>
      <div className={classes.documents}>
        <div className={classes.card}>
          <div
            className={classes.image}
            onClick={() => aadhaarInputRef.current.click()}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, "aadhaar")}
            onDragLeave={() => handleDragLeave("aadhaar")}
          >
            {fileImages.aadhaar && (
              <img
                src={fileImages.aadhaar}
                alt="aadhaar"
                style={{ width: "100%" }}
              />
            )}
            <input
              ref={aadhaarInputRef}
              accept="image/*"
              type="file"
              style={{ display: "none" }}
              onChange={(event) => handleFileChange(event, "aadhaar")}
            />
            {!fileImages.aadhaar && (
              <span>
                <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
              </span>
            )}
          </div>

          <p>Aadhaar Card</p>
        </div>
        <div className={classes.card}>
          <div
            className={classes.image}
            onClick={() => panInputRef.current.click()}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, "pan")}
            onDragLeave={() => handleDragLeave("pan")}
          >
            {fileImages.pan && (
              <img src={fileImages.pan} alt="pan" style={{ width: "100%" }} />
            )}
            <input
              ref={panInputRef}
              accept="image/*"
              type="file"
              style={{ display: "none" }}
              onChange={(event) => handleFileChange(event, "pan")}
            />
            {!fileImages.pan && (
              <span>
                <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
              </span>
            )}
          </div>
          <p>Pan Card</p>
        </div>
        <div className={classes.card}>
          <div
            className={classes.image}
            onClick={() => tcInputRef.current.click()}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, "tc")}
            onDragLeave={() => handleDragLeave("tc")}
          >
            {fileImages.tc && (
              <img src={fileImages.tc} alt="tc" style={{ width: "100%" }} />
            )}
            <input
              ref={tcInputRef}
              accept="image/*"
              type="file"
              style={{ display: "none" }}
              onChange={(event) => handleFileChange(event, "tc")}
            />
            {!fileImages.tc && (
              <span>
                <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
              </span>
            )}
          </div>
          <p>T.C.</p>
        </div>
      </div>
      <div className={classes.documents}>
        <div className={classes.card}>
          <div
            className={classes.image}
            onClick={() => marksInputRef.current.click()}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, "marks")}
            onDragLeave={() => handleDragLeave("marks")}
          >
            {fileImages.marks && (
              <img
                src={fileImages.marks}
                alt="marks"
                style={{ width: "100%" }}
              />
            )}
            <input
              ref={marksInputRef}
              accept="image/*"
              type="file"
              style={{ display: "none" }}
              onChange={(event) => handleFileChange(event, "marks")}
            />
            {!fileImages.marks && (
              <span>
                <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
              </span>
            )}
          </div>
          <p>Mark sheet</p>
        </div>
        <div className={classes.card}>
          <div
            className={classes.image}
            onClick={() => casteInputRef.current.click()}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, "caste")}
            onDragLeave={() => handleDragLeave("caste")}
          >
            {fileImages.caste && (
              <img
                src={fileImages.caste}
                alt="caste"
                style={{ width: "100%" }}
              />
            )}
            <input
              ref={casteInputRef}
              accept="image/*"
              type="file"
              style={{ display: "none" }}
              onChange={(event) => handleFileChange(event, "caste")}
            />
            {!fileImages.caste && (
              <span>
                <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
              </span>
            )}
          </div>
          <p>Cast Certificate</p>
        </div>
        <div className={classes.card}>
          <div
            className={classes.image}
            onClick={() => photoInputRef.current.click()}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, "photo")}
            onDragLeave={() => handleDragLeave("photo")}
          >
            {fileImages.photo && (
              <img
                src={fileImages.photo}
                alt="photo"
                style={{ width: "100%" }}
              />
            )}
            <input
              ref={photoInputRef}
              accept="image/*"
              type="file"
              style={{ display: "none" }}
              onChange={(event) => handleFileChange(event, "photo")}
            />
            {!fileImages.photo && (
              <span>
                <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
              </span>
            )}
          </div>
          <p>Passport size Photo</p>
        </div>
      </div>
    </form>
  );
}
