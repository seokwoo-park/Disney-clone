import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { selectUserName } from "../../features/user/userSlice";
import {
  AddList,
  Background,
  ContentMeta,
  Controls,
  Description,
  GroupWatch,
  ImageTitle,
  Player,
  StyledDetail,
  SubTitle,
  Trailer,
} from "./Detail.styled";

function Detail() {
  const { type, id } = useParams();
  const [detailData, setDetailData] = useState([]);
  const navigate = useNavigate();

  const userName = useSelector(selectUserName);
  const movieList = useSelector((state) => state.movie);
  console.log(movieList.new);

  useEffect(() => {
    if (userName) {
      setDetailData(movieList[type][id]);
    } else {
      navigate("/");
    }
  }, [type, id, userName]);

  return (
    <StyledDetail>
      <Background>
        <img alt={detailData.title} src={detailData.backgroundImg} />
      </Background>

      <ImageTitle>
        <img alt={detailData.title} src={detailData.titleImg} />
      </ImageTitle>
      <ContentMeta>
        <Controls>
          <Player>
            <img src="/images/play-icon-black.png" alt="" />
            <span>Play</span>
          </Player>
          <Trailer>
            <img src="/images/play-icon-white.png" alt="" />
            <span>Trailer</span>
          </Trailer>
          <AddList>
            <span />
            <span />
          </AddList>
          <GroupWatch>
            <div>
              <img src="/images/group-icon.png" alt="" />
            </div>
          </GroupWatch>
        </Controls>
        <SubTitle>{detailData.subTitle}</SubTitle>
        <Description>{detailData.description}</Description>
      </ContentMeta>
    </StyledDetail>
  );
}

export default Detail;
