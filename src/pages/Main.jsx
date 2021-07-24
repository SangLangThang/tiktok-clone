import React, { useEffect, useState } from "react";
import listVideoApi from "../api/listVideoApi";
import Videos from "../components/Videos/Videos";
import Waiting from "./Waiting";
function Main() {
  const [fetchFinish, setFetchFinish] = useState(false);
  const [lists, setLists] = useState([]);

  useEffect(() => {
    const fetchListVideo = () => {
      const response = listVideoApi.getAll();
      setLists(response);
    };
    fetchListVideo();
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFetchFinish(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app__videos">
      {!fetchFinish && <Waiting />}
      {fetchFinish &&
        lists.map((list) =>
          list.videos.map((video) => (
            <Videos
              key={list.name + video.name}
              avatar={list.avatar}
              user={list.name}
              src={video.src}
              like={video.like}
              share={video.share}
              comment={video.comment}
              nameMusic={video.name}
            ></Videos>
          ))
        )}
    </div>
  );
}

export default Main;

/*  const listUser = [];
  const userUrl = [];
  const fetchUser = () => {
    let urlRef = storage.ref();
    urlRef.listAll().then((res) => {
      res.prefixes.forEach((folderRef) => {
       
        
        listUser.push(folderRef.name);
      });
      fetchUserData(listUser);
    });
  };
  const fetchUserData = (list) => {
    console.log("userdata");
    list.map((e) => {
      let userRef = storage.ref(e);
      userRef.listAll().then((res) => {
        res.items.forEach((itemRef) => {
          console.log(itemRef.name);
          itemRef.getDownloadURL().then((url) => {});
        });
      });
    });
  };
  fetchUser();
   */
