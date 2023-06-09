import { HiPlus } from 'react-icons/hi';

export default function NewEntry() {
  return (
    <button className="add-btn">
      <HiPlus size={20} />
      <p>Yeni Hesap Ekle</p>
    </button>
  );
}
