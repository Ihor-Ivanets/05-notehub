import css from "./NoteForm.module.css";

function NoteForm() {
  return (
    <form className={css.form}>
      <div className={css.formGroup}>
        <label htmlFor="title">Title</label>
        <input id="title" type="text" name="title" className={css.input} />
        <span name="title" className={css.error} />
      </div>

      <div className={css.formGroup}>
        <label htmlFor="content">Content</label>
        <textarea
          id="content"
          name="content"
          rows={8}
          className={css.textarea}
        ></textarea>
        <span name="tag" className={css.error} />
      </div>

      <div className={css.actions}>
        <button type="button" className={css.cancelButton}>
          Cancel
        </button>
        <button type="submit" className={css.submitButton} disabled>
          {/* disabled=false */}
          Create note
        </button>
      </div>
    </form>
  );
}

export default NoteForm;
