// Created by Swati 
//made responsive by sravanthi
//updated functionality by gunjan
import { useRef } from "react";
import classes from "../../../../styles/UploadDocumentsPopup.module.css";
import { IoIosAdd } from "react-icons/io";

export default function EmployeeListDocuments({fileImages,uploadFileHandler}) {
  const aadhaarInputRef = useRef();
  const academicInputRef = useRef();
  const tcInputRef = useRef();
  const birthInputRef = useRef();
  const residentialInputRef = useRef();
  const photoInputRef = useRef();
  const domicileInputRef = useRef();
  const documentInputRef = useRef();

  

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
    <form className={`${classes.payrollForm} max-md:overflow-y-auto max-lg:overflow-y-auto max-md:h-[300px] max-lg:h-[300px] min-lg:h-[300px]`}>
      <div className={classes.documents}>
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
            onClick={() => academicInputRef.current.click()}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, "academic")}
            onDragLeave={() => handleDragLeave("academic")}
          >
            {fileImages.academic && (
              <img
                src={fileImages.academic}
                alt="academic"
                style={{ width: "100%" }}
              />
            )}
            <input
              ref={academicInputRef}
              accept="image/*"
              type="file"
              style={{ display: "none" }}
              onChange={(event) => handleFileChange(event, "academic")}
            />
            {!fileImages.academic && (
              <span>
                <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
              </span>
            )}
          </div>
          <p>PAN Card</p>
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
          <p>Resume</p>
        </div>
      </div>
      <div className={classes.documents}>
        <div className={classes.card}>
          <div
            className={classes.image}
            onClick={() => birthInputRef.current.click()}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, "birth")}
            onDragLeave={() => handleDragLeave("birth")}
          >
            {fileImages.birth && (
              <img
                src={fileImages.birth}
                alt="birth"
                style={{ width: "100%" }}
              />
            )}
            <input
              ref={birthInputRef}
              accept="image/*"
              type="file"
              style={{ display: "none" }}
              onChange={(event) => handleFileChange(event, "birth")}
            />
            {!fileImages.birth && (
              <span>
                <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
              </span>
            )}
          </div>
          <p>UG Certificate</p>
        </div>
        <div className={classes.card}>
          <div
            className={classes.image}
            onClick={() => residentialInputRef.current.click()}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, "residential")}
            onDragLeave={() => handleDragLeave("residential")}
          >
            {fileImages.residential && (
              <img
                src={fileImages.residential}
                alt="residential"
                style={{ width: "100%" }}
              />
            )}
            <input
              ref={residentialInputRef}
              accept="image/*"
              type="file"
              style={{ display: "none" }}
              onChange={(event) => handleFileChange(event, "residential")}
            />
            {!fileImages.residential && (
              <span>
                <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
              </span>
            )}
          </div>
          <p>PG Certificate</p>
        </div>
        <div className={classes.card}>
          <div
            className={classes.image}
            onClick={() => domicileInputRef.current.click()}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, "domicile")}
            onDragLeave={() => handleDragLeave("domicile")}
          >
            {fileImages.domicile && (
              <img
                src={fileImages.domicile}
                alt="domicile"
                style={{ width: "100%" }}
              />
            )}
            <input
              ref={domicileInputRef}
              accept="image/*"
              type="file"
              style={{ display: "none" }}
              onChange={(event) => handleFileChange(event, "domicile")}
            />
            {!fileImages.domicile && (
              <span>
                <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
              </span>
            )}
          </div>
          <p>CV</p>
        </div>
        <div className={classes.card}>
          <div
            className={classes.image}
            onClick={() => documentInputRef.current.click()}
            onDragOver={handleDragOver}
            onDrop={(event) => handleDrop(event, "document")}
            onDragLeave={() => handleDragLeave("document")}
          >
            {fileImages.document && (
              <img
                src={fileImages.document}
                alt="document"
                style={{ width: "100%" }}
              />
            )}
            <input
              ref={documentInputRef}
              accept="image/*"
              type="file"
              style={{ display: "none" }}
              onChange={(event) => handleFileChange(event, "document")}
            />
            {!fileImages.document && (
              <span>
                <IoIosAdd style={{ fontSize: "3.646vw", color: " #A6A6A6" }} />
              </span>
            )}
          </div>
          <p>Add Document</p>
        </div>
      </div>
    </form>
  );
}
