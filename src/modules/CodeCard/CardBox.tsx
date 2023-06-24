import './Code.css';

interface Props {
  github: string;
  title: string;
  lang: string[];
  message: string;
}

export const CardBox:React.FC<Props> = (props) => {
  const GithubURL = `https://github.com/d4niz/${props.github}`

  return (
    <div className="cartbox">
        <div className="cartbox-header">
          <h1>{props.title}</h1>
          <div className='cartbox-header-lang'>
            {props.lang.map((lang, index) => (<img key={index} src={lang} alt='lang' />))}
          </div>
          <div className='cartbox-header-body'>
            <text>{props.message}</text>
            <a href={GithubURL}>
              <button>Github</button>
            </a>
          </div>
        </div>
        <div className="card__content"></div>
    </div>
  );
};