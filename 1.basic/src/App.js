import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  //함수형에는 render 필요 없이 바로 return
  render() {
    return (
      //jsx이기 때문에 class=classname으로 사용
      <div className='contaniner'>
        <h1 className='title'>예산 계산기</h1>
        <div className='block'>
          <div className='menuItem'>
            <div>
              <p className='menuList'>지출 항목
              </p>
              <input className='menuInput' type='text'></input>
            </div>
            <div>
              <p className='menuList'>비용
              </p>
              <input className='menuInput' type='text'></input>
            </div>
          </div>
          <button id='submitBtn'>제출</button>
        </div>


      </div>
    )
  }
}