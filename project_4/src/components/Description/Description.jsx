import React from 'react';
import Navbar from '../Navbar/Navbar';
import styles from './Description.module.css';
import Button from '../Button/Button';
import { CgMoreVerticalR } from "react-icons/cg";

const Description = () => {
  return (
    <div>
      <Navbar />

      <div className="slider">
        <div className="list">
          <div className="item">
            <img src="/images/aboutUs.jpg" alt="About Us" />
            <div className="content">
              <div className="title">MAGIC SLIDER</div>
              <div className="type">FLOWER</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src="/images/aboutFood.jpg" alt="Nature" />
            <div className="content">
              <div className="title">MAGIC SLIDER</div>
              <div className="type">NATURE</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src="/images/aboutFood.jpg" alt="Plant" />
            <div className="content">
              <div className="title">MAGIC SLIDER</div>
              <div className="type">PLANT</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>

          <div className="item">
            <img src="/images/aboutFood.jpg" alt="Nature" />
            <div className="content">
              <div className="title">MAGIC SLIDER</div>
              <div className="type">NATURE</div>
              <div className="description">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti temporibus quis eum consequuntur voluptate quae doloribus distinctio. Possimus, sed recusandae. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, aut.
              </div>
              <div className="button">
                <button>SEE MORE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="thumbnail">
          <div className="item">
            <img src="/images/aboutUs.jpg" alt="Thumbnail 1" />
          </div>
          <div className="item">
            <img src="/images/aboutFood.jpg" alt="Thumbnail 2" />
          </div>
          <div className="item">
            <img src="/images/aboutDining.jpg" alt="Thumbnail 3" />
          </div>
        </div>

        <div className="nextPrevArrows">
          <button className="prev"> &lt; </button>
          <button className="next"> &gt; </button>
        </div>
      </div>
    </div>
  );
}

export default Description;
