import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HeadlessLayout from "components/layouts/HeadlessLayout";
import Footer from "components/commons/Footer";

const Counter = () => {
  const navigate = useNavigate();
  const shoot = () => {
    alert("잘했어!");
  }
  const [num, setNum] = useState(0);

  const increase = () => setNum((prev) => prev + 1);

  return (
    <HeadlessLayout>
      <div>
      <div>카운터페이지</div>
      <button onClick={shoot}>눌러봐.</button>
      <form>
      <label>이름:
        <input type="text" />
      </label>
    </form>
      <div>클릭수 {num}</div>
      
      <div>
        <button onClick={increase}>클릭</button>
        
      </div>
      
      {/* <Link to-{"/"}> 메인으로 이동하는 페이지*/ }
      <button onClick={() => navigate("/")}>메인으로 이동</button>
      <Footer />
    </div>
    </HeadlessLayout>
  );
};

export default Counter;
