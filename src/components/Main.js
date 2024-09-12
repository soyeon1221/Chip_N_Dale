
export default function Main() {
  return (
    <>
      <div className="main">
        <div className="main_wrap">
          <ul className="main_box">
            <li className="main_items">
              <img src={process.env.PUBLIC_URL + '/images/호랑이 인형.jpg'} />
              <div>인형</div>
            </li>
            <li className="main_items">
              <img src={process.env.PUBLIC_URL + '/images/하얀망토 인형.jpg'} />
              <div>인형</div>
            </li>
            <li className="main_items">
              <img src={process.env.PUBLIC_URL + '/images/티슈보관 인형.jpg'} />
              <div>인형</div>
            </li>
          </ul>
          <ul className="main_box">
            <li className="main_items">
              <img src={process.env.PUBLIC_URL + '/images/수원역 피규어.jpg'} />
              <div>피규어</div>
            </li>
            <li className="main_items">
              <img src={process.env.PUBLIC_URL + '/images/하겐다즈.jpg'} />
              <div>피규어</div>
            </li>
            <li className="main_items">
              <img src={process.env.PUBLIC_URL + '/images/훌라후프 피규어.jpg'} />
              <div>피규어</div>
            </li>
          </ul>
          <ul className="main_box">
            <li className="main_items">
              <img src={process.env.PUBLIC_URL + '/images/팝마트 피규어.jpg'} />
              <div>피규어</div>
            </li>
            <li className="main_items">
              <img src={process.env.PUBLIC_URL + '/images/팝마트 피규어2.jpg'} />
              <div>피규어</div>
            </li>
            <li className="main_items">
              <img src={process.env.PUBLIC_URL + '/images/팝마트 피규어3.jpg'} />
              <div>피규어</div>
            </li>
          </ul>
          <ul className="main_box">
            <li className="main_items">
              <img src={process.env.PUBLIC_URL + '/images/팝마트 피규어4.jpg'} />
              <div>피규어</div>
            </li>
            <li className="main_items">
              <img src={process.env.PUBLIC_URL + '/images/팝마트 피규어5.jpg'} />
              <div>피규어</div>
            </li>
            <li className="main_items">
              <img src={process.env.PUBLIC_URL + '/images/팝마트 피규어6.jpg'} />
              <div>피규어</div>
            </li>
          </ul>
          <ul className="main_box">
            <li className="main_items">
              <img src={process.env.PUBLIC_URL + '/images/팝마트 피규어7.jpg'} />
              <div>피규어</div>
            </li>
            <li className="main_items">
              <img src={process.env.PUBLIC_URL + '/images/동전 지갑.jpg'} />
              <div>지갑</div>
            </li>
            <li className="main_items">
              {/* <img src={process.env.PUBLIC_URL + '/images/팝마트 피규어6.jpg'} /> */}
              <div></div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}