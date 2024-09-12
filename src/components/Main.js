import tiger from './img/doll_tiger.jpg';
import haagendazs from './img/props_haagendazs.jpg';

export default function Main() {
  return (
    <>
      <div className="main">
        <div className="main_wrap">
          <ul className="main_box">
            <li className="main_items">
              <img src={tiger} />
              <div>인형</div>
            </li>
            <li className="main_items">
              <img src={tiger} />
              <div>인형</div>
            </li>
            <li className="main_items">
              <img src={tiger} />
              <div>인형</div>
            </li>
          </ul>
          <ul className="main_box">
            <li className="main_items">
              <img src={haagendazs} />
              <div>하겐다즈</div>
            </li>
            <li className="main_items">
              <img src={haagendazs} />
              <div>하겐다즈</div>
            </li>
            <li className="main_items">
              <img src={haagendazs} />
              <div>하겐다즈</div>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}