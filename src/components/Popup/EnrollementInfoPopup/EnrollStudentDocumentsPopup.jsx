import { useRef } from "react";
import classes from "../../../styles/UploadDocumentsPopup.module.css";
import { IoIosAdd } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
//Made by Abhishek Kumar

export default function EnrollStudentDocumentsPopup({ fileImages, uploadFileHandler }) {
  const aadhaarInputRef = useRef();
  const academicInputRef = useRef();
  const tcInputRef = useRef();
  const birthInputRef = useRef();
  const residentialInputRef = useRef();
  const photoInputRef = useRef();
  const domicileInputRef = useRef();
  const documentInputRef = useRef();

  function handleFileChange(event, currFileName) {
    event.preventDefault();
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      uploadFileHandler(currFileName, reader.result);
    };
    reader.readAsDataURL(file);
  }

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDrop = (event, currFileName) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      uploadFileHandler(currFileName, reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveImage = (currFileName) => {
    uploadFileHandler(currFileName, null);
  };

  const documentTypes = [
    { name: "photo", label: "Passport size Photo", ref: photoInputRef },
    { name: "aadhaar", label: "Aadhaar Card", ref: aadhaarInputRef },
    { name: "academic", label: "Academic Transcript", ref: academicInputRef },
    { name: "tc", label: "T.C.", ref: tcInputRef },
    { name: "birth", label: "Birth Certificate", ref: birthInputRef },
    { name: "residential", label: "Residential Certificate", ref: residentialInputRef },
    { name: "domicile", label: "Domicile Certificate", ref: domicileInputRef },
    { name: "document", label: "Add Document", ref: documentInputRef },
  ];

  return (
    <form className="p-4 w-[750px] lg:w-[900px] h-[420px] overflow-y-auto lg:overflow-hidden" style={{}}>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 object-contain">
        {documentTypes.map(({ name, label, ref }) => (
          <div key={name} className="border rounded-xl p-4 relative">
            <div
              className="flex justify-center items-center rounded-lg shadow-primary h-32 cursor-pointer relative object-contain"
              onClick={() => ref.current.click()}
              onDragOver={handleDragOver}
              onDrop={(event) => handleDrop(event, name)}
            >
              {fileImages[name] ? (
                <div className="relative w-full h-full">
                  <img src={fileImages[name]} alt={name} className="object-cover w-full h-full" />
                  <button
                    type="button"
                    className="absolute top-1 right-1 bg-red-600 text-white rounded-full p-1"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleRemoveImage(name);
                    }}
                  >
                      <IoMdClose className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                <>
                  <input
                    ref={ref}
                    accept="image/*"
                    type="file"
                    className="hidden"
                    onChange={(event) => handleFileChange(event, name)}
                  />
                  <IoIosAdd className="text-4xl text-gray-400" />
                </>
              )}
            </div>
            <p className="text-center mt-2">{label}</p>
          </div>
        ))}
      </div>
    </form>
  );
}
