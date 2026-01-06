import css from "./Modal.module.css";

function Modal() {
  return (
    <div className={css.backdrop} role="dialog" arial-modal="true">
      <div className={css.modal}></div>
    </div>
  );
}

export default Modal;
