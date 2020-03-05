import React from 'react';
import {Link} from 'react-router-dom';
import "../css/Navigation.css";

function Navigation(){
  return(
      <div className="Link">
      <span id="name">프로그라피 프론트 정지운</span>  
          <Link className="Link_link" to="/">투두리스트</Link>
            &nbsp;&nbsp;&nbsp;&nbsp;
          <Link className="Link_link" to="/movie">영화</Link>
      </div>
  )
}

export default Navigation;