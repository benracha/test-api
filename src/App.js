import React ,{ useState } from 'react';
import './App.css';
import searchImage from './api';

function App() {

  const [term, setTerm] = useState('')
  const [image, setImage] = useState([])

  //แก้ปัญหาการโหลดซ้ำหน้าเว็บที่เกิดจากformส่งคำขอมา และตรวจจับพฤติกรรมของผู้ใช้
  function handleFormSubmit(event) {
    event.preventDefault();

    handleSubmit(term)
  };

  //การเข้าถึงข้อมูลภายในinputทุกครั้งเมื่อผู้ใช้พิมพ์ 
  const handleChange = (event) => {
    setTerm(event.target.value);
  };

  //ใช้async กับ await เพื่อลัดเวลาในการส่งคำขอ เราไม่ต้องการรออีกแล้ววว 
  const handleSubmit = async (term) => {
    const result = await searchImage(term);

    setImage(result);
  };

  return (
    <div>
      {/* เมื่อใช้formครอบinputไว้ผู้ใช้สามารถกดปุ่มenterค้นหาได้โดยที่ไม่ต้องกดที่ปุ่มที่เราสร้างไว้ */}
      <form onSubmit={handleFormSubmit}>
        <input value={term} onChange={handleChange} />
        <button>Search</button>
      </form>
      <div>
        {image.map(images => {
          return (
              <div className='image-list' key={images.id}>
                <img src={images.urls.small} alt={images.alt_description} />
              </div>)
        })
        }
      </div>
    </div>
  );
}

export default App;
