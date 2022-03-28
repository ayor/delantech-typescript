import { Button } from '../Button';
import { Link } from 'react-router-dom';
import ProductStyle from './index.module.css'; 
import className from 'classnames'; 

interface BannerProps{
    hasHeader?:boolean;
    bkgColor?:string;
    header?:string;
    subText?:string;
    link?:string;
    backgroundImage: string; 
}

export const Banner = (props:BannerProps):JSX.Element => {
    return (
        <section className="container my-5">
          <div className={className(ProductStyle.Container)}>
            <div className={`row mx-auto my-5 pt-5 ${className(ProductStyle.Banner)}`}>
              <div
                className={
               `col-md-7 d-flex rounded flex-column justify-content-center p-3  align-items-start text-dark 
                  ${className(ProductStyle.BannerText)}`
                }
                style={{ backgroundColor: props.bkgColor }}
              >
                {!props.hasHeader ? (
                  <h1 className="text-light">
                    <span>
                      <del className="text-muted">No Keys</del>
                    </span>
                    , <em>No Problem!!</em>
                  </h1>
                ) : (
                  <h1 className="d-block ">{props.header}</h1>
                )}
    
                <small
                  className={`my-3 d-block ${props.hasHeader ? 'text-light' : ''} lead`}
                >
                  {props.subText}
                  {props.hasHeader ? <i className="fas fa-microphone "></i> : null}
                </small>
                <Link to={props.link || ''}>
                    <Button title="Make An order" clickEvent={()=> console.log('clicked')} />
                </Link>
              </div>
              <div className={`col-md-5 p-0`} style={{
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                  height: '214px',
                  backgroundImage: props.backgroundImage
              }}></div>
            </div>
          </div>
        </section>
      );
}