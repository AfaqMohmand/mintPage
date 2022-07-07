import React from "react";
import "./mint-page.css";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import Button from "./Button";
import Parag from "./Parag";
import Icons from "./Icons";
export const MintPage = () => {
  return (
    <>
      <div className="mint-container-first">
        <h2 className="mint-container-first__h2">BUILD YOUR FOREST</h2>
        <Parag
          nextParag="Node Tree is a passive income NFT Project with 1,700 unique NFT's.
          Node Trees takes the fund raised by the sale of NFTs and stakes them
          in validator Nodes to provide you with a reward rate of above 15X."
        />
        <button className="Btn-container-second">
          <Button text="Enter Node Tree" />
          <button type="button" className="Btn-container-second__third">
            Read White Paper
          </button>
          {/* <p className="Btn-container-second_third">Follow us</p>
          <BsTwitter className="Btn-container-second_fourth" />
          <BsFacebook className="Btn-container-second_fourth" /> */}
        </button>
        <Icons />
      </div>
      <div className="mint-container-third">
        <div className="containerOne">
          <h5 className="containerOne__first">MINT NFT</h5>
          <p className="containerOne__second">1700 NFTs</p>
          <div className="form-container">
            <p className="form-containerTwo__text">Amount</p>
            <span className="first-span form-containerTwo__text__span">-</span>
            <span className="second-span form-containerTwo__text__span">2</span>
            <span className="third-span form-containerTwo__text__span">+</span>
            <button className="AddBtn">MAX</button>
          </div>
          <hr className="underline" />
          <div className="form-containerTwo">
            <p className="form-containerTwo__text__second">TOTAL</p>
            <p className="form-containerTwo__text__third">2200/1700</p>
          </div>
          <hr className="underline" />
          <div className="form-containerTwo">
            <p className="form-containerTwo__text__second">SOLD</p>
            <p className="form-containerTwo__text__third">0.0 AVAX</p>
          </div>
          <hr className="underline" />
          <button className="Btn-container-last font-face-gm">Mint</button>
          <p className="underline-Btn">
            Fair sale with <span className="redColor"> 150 whitelisted </span>
            and <span className="redColor"> 50 for giveaways</span>
          </p>
          <p className="underline-Btn-second">
            whitelisted price: <span className="redColor"> 2.5 AVAX </span>
          </p>
          <p className="underline-Btn-second">
            price: <span className="redColor">3.5 AVAX</span>
          </p>
          <p className="underline-Btn-second">
            Total Supply: <span className="redColor"> 1700 </span>
          </p>
          <p className="underline-Btn-second">
            Airdroped returns on the validator node investments
          </p>
        </div>
        <div className="containerSecond box">
          <p className="mint-container-third__first">DETAILS</p>
          <Parag
            parag="Plant your first tree in the crypto world with a Node Tree and see
            the fruits of your labor manifest. When you mint a Node Tree you can
            expect to see a return of ethereum in your wallet once a week/month.
            These returns on your nft come from taking your cost of minting and
            pooling it with funds from other owners of nfts and creating
            validator nodes on networks that offer a reward for validating."
          />
          <Parag
            parag=" These returns are like the fruit growing on a tree. The returns
            start small and slowly ramp up as we adjust payout vs restaking
            percentages. The first couple months you can expect a smaller return
            but when the payout percentage is increased you will start to see
            that making passive income is truly possible. You might ask why
            buying our nft is worth 0.1 eth and why you shouldn't just take that
            0.1 and stake it on your own."
          />
          <Parag
            parag="  You totally could if you want to pay 5 to 8% fees and take the time
            out of your day and research about it. If that's you then this isn't
            the nft for you, but if you are looking to park your ethereum in a
            project that takes care of the research and fees of running a node
            then you are in the right place."
          />
        </div>
      </div>
    </>
  );
};
