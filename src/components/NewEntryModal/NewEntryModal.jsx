//Styles
import './newentrymodal.css';
//Hooks
import { useForm } from 'react-hook-form';
//Icons
import { MdClose } from 'react-icons/md';

//Libraries
import { nanoid } from 'nanoid';
export default function NewEntryModal({ setRawData, setUpdateData }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    //get data from local storage
    const localData = JSON.parse(localStorage.getItem('localData'));

    if (localData !== null) {
      //check if data exist, otherwise create new key
      localStorage.setItem(
        'localData',
        JSON.stringify([...localData, { ...data, id: nanoid() }])
      );
    } else {
      localStorage.setItem(
        'localData',
        JSON.stringify([{ ...data, id: nanoid() }])
      );
    }

    //to reset form inputs after save
    reset();
    //to close form after save
    document.getElementById('modal').style.display = 'none';

    //to update rawData after new entry
    setRawData(JSON.parse(localStorage.getItem('localData')));
    setUpdateData((preval) => preval + 1);
  };

  //function to close modal form
  function closeModal(e) {
    e.preventDefault();
    document.getElementById('modal').style.display = 'none';
    reset();
  }

  return (
    <div className="modal" id="modal">
      <form onSubmit={handleSubmit(onSubmit)} className="modal-form">
        <MdClose size={24} className="modal-close-btn" onClick={closeModal} />
        <div className="form-container">
          <div className="form-inputs">
            <label>Sosyal Medya Linki</label>
            <input
              type="text"
              {...register('link', {
                required: 'Soyal Medya Linki alanı boş bırakılamaz',
              })}
            />
            {errors.link && <p>{errors.link.message}</p>}
          </div>
          <div className="form-inputs">
            <label>Sosyal Medya Adı</label>
            <input
              type="text"
              {...register('name', {
                required: 'Soyal Medya Adı alanı boş bırakılamaz',
              })}
            />
            {errors.name && <p>{errors.name.message}</p>}
          </div>
          <div className="form-inputs">
            <label>Açıklama</label>
            <input
              type="text"
              {...register('description', {
                required: 'Açıklama alanı boş bırakılamaz',
              })}
            />
            {errors.description && <p>{errors.description.message}</p>}
          </div>
        </div>
        <div className="form-btn-groups">
          <button className="decline-btn" onClick={(e) => closeModal(e)}>
            Vazgeç
          </button>
          <button className="save-btn" type="submit">
            Kaydet
          </button>
        </div>
      </form>
    </div>
  );
}
