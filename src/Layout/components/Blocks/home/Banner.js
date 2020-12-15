import React, { useEffect, useState } from "react";
import { Image } from "react-bootstrap";
import firebase from "../../../../Firebase/config.js";

import "../style/Banner.scss";
import Container from "react-bootstrap/Container";

export default () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    firebase.database().ref('banner').once('value').then(response => {
      let banner = [];
      response.forEach(item => {
        banner.push(item.val());
      });
      setItems(banner);
    }).catch((err) => console.log(err));
  }, []);

  return (
    <div className="cat-grid mr-auto ml-auto">
      <Container>
        {
          items.map(item => {
            return(
              <div className={item.class} key={item.id}>
                <Image className={item.classtitle} src={item.img} />
                <div className={item.className}>
                  {item.h2 ? <h2>{item.h2}</h2> : null}
                  {item.p ? <p>{item.p}</p> : null}
                  {item.titleName ? <a href=" ">{item.titleName}</a> : null}
                </div>
              </div>
            )
          })
        }
      </Container>
    </div>
  );
};
