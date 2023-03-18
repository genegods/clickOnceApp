import React,{useState} from "react";

const MainPage = () => {
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        if(!clicked){
          setClicked(true)
          alert('Button Clicked')
        }
      };
  return (
    <React.Fragment>
      <main>
        <div className="centered h-screen">
          <button
          disabled={clicked}
          onClick={handleClick}
           className='bg-purple-500 py-2 px-4 rounded text-white font-bold uppercase'>
            {clicked? 'button clicked': 'click me once'}
            </button>
        </div>
      </main>
    </React.Fragment>
  );
};

export default MainPage;
