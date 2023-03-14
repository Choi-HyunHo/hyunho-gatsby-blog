import React from 'react';
import ReactRotatingText from 'react-rotating-text';
import IconButtonBar from '../icon-button-bar';
import Image from '../image';
import './style.scss';

function Bio({ author, language = 'ko' }) {
  if (!author) return null;
  const { bio, social, name } = author;
  return (
    <div className="bio">
      {language === 'ko' ? (
        <div className="introduction korean">
          <p className="title">
            안녕하세요.
            <br />
            <strong>
              <ReactRotatingText items={bio.description} />
            </strong>
            <br />
            {bio.role} <strong>{name}</strong>입니다.
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar links={social} />
          </div>

          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              marginTop: '12px',
            }}
          >
            <span style={{ fontSize: '12px' }}>Birth. 1997.08.15</span>
            <span style={{ fontSize: '12px', marginTop: '6px' }}>living in Seoul</span>
            <a aria-label="" style={{ pointerEvents: 'none' }} href="https://hits.seeyoufarm.com">
              <img
                alt=""
                src="https://hits.seeyoufarm.com/api/count/incr/badge.svg?url=https%3A%2F%2Fchoi-hyunho.com&count_bg=%23555555&title_bg=%23555555&icon=compropago.svg&icon_color=%23E7E7E7&title=Hits&edge_flat=false"
              />
            </a>
          </div>
        </div>
      ) : (
        <div className="introduction english">
          <p className="title">
            Hello,
            <br />
            my name is
            <br />
            <strong>{name}</strong>
            .<br />
          </p>
          <p className="description">
            I'm a {bio.role} <ReactRotatingText items={bio.description} />
            <br />
          </p>
          <div className="social-links">
            <IconButtonBar links={social} />
          </div>
        </div>
      )}
      <div className="thumbnail-wrapper">
        <Image style={{ width: 250, height: 250 }} src={bio.thumbnail} alt="thumbnail" />
      </div>
    </div>
  );
}

export default Bio;
