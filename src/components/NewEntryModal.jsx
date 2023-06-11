import { useForm } from 'react-hook-form';
export default function NewEntryModal() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <div className="modal">
      <div className="modal-overlay"></div>
      <form onSubmit={handleSubmit(onSubmit)} className="modal-form">
        <div className="form-inputs">
          <label>Sosyal Medya Linki</label>
          <input
            type="text"
            {...register('link', {
              required: 'Soyal Medya Linki alanı boş bırakılamaz',
              pattern: {
                value: /^(https:\/\/)/i,
                message: 'Link "https://" ile başlamalıdır',
              },
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
      </form>
    </div>
  );
}
