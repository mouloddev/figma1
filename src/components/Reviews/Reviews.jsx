import React from "react";
import styled from "styled-components";

import {
  Container,
  SectionDescription,
  SectionTitle,
} from "../../GlobalStyles/globalStyles";

import reviewsData from "../../constants/reviews";
import starFilled from "../../images/reviews/star-filled.svg";
import startUnfilled from "../../images/reviews/star-unfilled.svg";

const Reviews = () => {
  return (
    <Wrapper>
      <Container>
        <ReviewsContainer>
          <SectionTitle xlarge>what clients say</SectionTitle>
          <SectionDescription center margin>
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics : Newtonian mechanics
          </SectionDescription>

          <ReviewsCards>
            {reviewsData.map((rootItem, index) => {
              return (
                <ReviewCard key={index}>
                  <div className="rate">
                    {Array.from(Array(5).keys()).map((item, index2) => {
                      item++;
                      return item <= rootItem.rate ? (
                        <img key={index2} src={starFilled} alt="rate" />
                      ) : (
                        <img key={index2} src={startUnfilled} alt="rate" />
                      );
                    })}
                  </div>

                  <SectionDescription small sbold light>
                    {rootItem.review}
                  </SectionDescription>
                  <div className="avatar">
                    <img src={rootItem.img} alt={rootItem.person} />
                    <div className="avatar-info">
                      <p className="avatar-name">{rootItem.person}</p>
                      <p className="avatar-profession">{rootItem.profession}</p>
                    </div>
                  </div>
                </ReviewCard>
              );
            })}
          </ReviewsCards>
        </ReviewsContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: var(--light-bg-color);
`;
const ReviewsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6rem 0 4rem;
`;

const ReviewsCards = styled.div`
  display: flex;

  @media screen and (max-width: 920px) {
    & {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
`;

const ReviewCard = styled.div`
  margin: 1rem;
  width: 300px;
  height: 270px;
  background-color: white;
  border: 1px solid var(--border-muted-color);
  border-radius: 6px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .avatar {
    display: flex;
    align-items: center;

    img {
      margin: 0 1rem;
      width: 70px;
    }

    .avatar-name {
      font-weight: bold;
      color: var(--primary-color);
    }
    .avatar-profession {
      font-weight: 600;
    }
  }
`;

export default Reviews;
