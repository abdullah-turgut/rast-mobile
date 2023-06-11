//Styles
import './newentry.css';
//Icons
import { HiPlus } from 'react-icons/hi';

export default function NewEntry() {
  //function to open modal form
  function openModal() {
    document.getElementById('modal').style.display = 'flex';
  }
  return (
    <button className="add-btn" onClick={openModal}>
      <HiPlus size={20} />
      <p>Yeni Hesap Ekle</p>
    </button>
  );
}
