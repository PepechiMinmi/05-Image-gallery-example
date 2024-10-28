import { useState } from "react";

export default function App() {

    //画像配列
    const images=['pic1.jpg','pic2.jpg','pic3.jpg','pic4.jpg','pic5.jpg'];

    //alt配列
    const alts={
        'pic1.jpg' : 'Closeup of a human eye',
        'pic2.jpg' : 'Rock that looks like a wave',
        'pic3.jpg' : 'Purple and white pansies',
        'pic4.jpg' : 'Section of wall from a pharoah\'s tomb',
        'pic5.jpg' : 'Large moth on a leaf'
    };

    //5-3:サムネイルクリックイベント
    const [displayedImage,setDispalyedImage]=useState('pic1.jpg');
    //サムネイルハンドラ
    const handleThunmbBarCick=(image)=>{
        setDispalyedImage(image);
    };

    //5-4:画像を暗くするイベント、トグルで
    const [isDarken,setIsDarken]=useState('true');

    const handleDarkenToggle=()=>{
        setIsDarken((prev)=>!prev);
    };

    return (
      <>
        <h1>Image gallery example</h1>
        <div className="full-img">
          <img
            className="displayed-img"
            src={`images/${displayedImage}`}//変更
            alt={alts[displayedImage]}//変更
          />
          <div 
            className="overlay"
            style={{//追加
                backgroundColor:isDarken ? 'rgba(0,0,0,0)': 'rgba(0,0,0,0.5)',
            }}
          ></div>
          <button className="dark" onClick={handleDarkenToggle}>
            {isDarken ? 'Darken':'Lighten'}
          </button>
        </div>
        <div className="thumb-bar">
            {images.map((image)=>(
                <img
                    key={image}
                    src={`images/${image}`}
                    alt={alts[image]}
                    className="thumb-img"
                    onClick={()=>handleThunmbBarCick(image)}//サムネイルハンドラ
                />
            ))}
        </div>
      </>
    );
  }