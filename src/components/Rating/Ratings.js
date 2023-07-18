import { IoIosStar, IoMdStarHalf, IoMdStarOutline } from "react-icons/io";

function Ratings(props) {

  const MAX_RATING = 5;
  const fullStar = <IoIosStar className={props.className} />;
  const halfStar = <IoMdStarHalf className={props.className} />;
  const emptyStar = <IoMdStarOutline className={props.className} />;

  const icons = props?.value || 0


  const renderStars = () => {
    const stars = [];



    for (let i = 1; i <= MAX_RATING; i++) {
      if (i <= icons) {
        stars.push(<span key={i}>{fullStar}</span>);
      } else if (i - icons === 0.5) {
        stars.push(<span key={i}>{halfStar}</span>);
      } else {
        stars.push(<span key={i}>{emptyStar}</span>);
      }
    }

    return stars;
  };

  return <>{renderStars()}</>;
}

export default Ratings