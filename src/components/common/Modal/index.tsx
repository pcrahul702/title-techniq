import Modal from "react-modal";
// @ts-ignore
import { IoMdClose } from "react-icons/io";

// Modal.setAppElement('#modal-root');
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",

  },
};
interface ModalTypes {
  children: React.ReactChild | React.ReactChild[];
  closeModal: () => {} | void;
  isModalOpen: boolean;
  title?: string;
  modalClass?: string;
  headerClass?: string;
  bodyClass?: string;
  titleStyle?: string;
  header?: boolean;
  crossStyle?: string;
}
export default function Index({
  children,
  closeModal,
  isModalOpen,
  title,
  titleStyle,
  modalClass,
  headerClass,
  bodyClass,
  header = true,
  crossStyle,
}: ModalTypes) {
  return (
    <>
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        className={`p-0 absolute rounded-xl outline-none shadow-xl w-4/5   bg-white ${modalClass} overflow-y-auto overflow-x-auto `}
        overlayClassName="bg-[#000] fixed top-0 right-0 left-0 bottom-0 bg-opacity-50 z-20"
      >
        {header && (
          <div
            id="modal-header"
            className={`border-b-2 px-4 border-[#D4D4D4] py-3 relative ${headerClass} `}
          >
            <div
              className={`text-muted-muted-800 font-poppins font-semibold text-base leading-[125%] py-2  ${titleStyle}`}
            >
              {title}
            </div>
            <IoMdClose
              className={`absolute right-10 top-4 ${crossStyle} cursor-pointer`}
              size={30}
              onClick={closeModal}
            />
          </div>
        )}
        <div className={`md:px-4 py-2 ${bodyClass}`}>{children}</div>
        
      </Modal>

      <style jsx>{`
        .backcolor {
          background: #e5e5e5;
        }
        .assignbackground {
          background: #c4c4c4;
          margin-left: 22rem;
          margin-right: 2rem;
        }
        .btntextsize {
          font-size: 12px;
        }
      `}</style>
    </>
  );
}
