import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { Image } from "react-bootstrap";
import { fetchBanner } from "../../Redux/actions";

import "./style/Banner.scss";
import Container from "react-bootstrap/Container";

const CatGrid = () => {

  const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchBanner());
    }, [dispatch]);

    const data = useSelector(state => state.banner);

  return (
    <div className="cat-grid mr-auto ml-auto">
      <Container>
        {
          data.map(item => {
            return(
              <div className={item.class} key={item.id}>
                <Image className={item.classtitle} src={item.img} />
                <a href=" ">{item.titleName}</a>
              </div>
            )
          })
        }
      </Container>
    </div>
  );
};

export default CatGrid;