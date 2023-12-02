import {useState} from 'react';
import "./styles.css";

function HomeWork21() {
    const [likes, setLike] = useState<number>(0);

  const like = (): void => {
    setLike((prevValue: number) => prevValue + 1);
  };

  const dislike = (): void => {
    setLike((prevValue: number) => prevValue - 1);
  };

  let emptyContainer: null = null;

  interface IconProps {
    onClick: () => void;
    src: string;
  }
  
  const Icon = ({ onClick, src }: IconProps) => {
    return (
      <img className='icon-button'
        src={src} 
        onClick={onClick} 
        alt="Иконка" 
      />
    );
  };
  

    return <div className='homework21-wrapper'>
        <Icon onClick={like} src='https://cdn-0.emojis.wiki/emoji-pics/whatsapp/thumbs-up-whatsapp.png' />
        <p className='counter'>{likes}</p>
        <Icon onClick={dislike} src='https://smile-emoji.ru/wp-content/uploads/site-images/simvol-vk/v33svuzr.png' />
        <p className='counter'>{likes}</p>

    </div>
}

export default HomeWork21;