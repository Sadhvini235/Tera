import React from "react";
import "./UpcyclingPage.css";


const UpcyclingPage = () => {
  const shortVideoLinks = [
    "https://youtube.com/shorts/xIeK27sikb8?feature=shared",
    "https://youtube.com/shorts/e-pDWYl2CK8?feature=shared",
    "https://youtube.com/shorts/u3twHsNinbA?si=jGnorlJHkzKarbsW",
    "https://youtube.com/shorts/e8c6eSbCukI?feature=shared",
    "https://youtube.com/shorts/8c1BtgXJjHs?si=6tppnApQ_0EyToDO",
    "https://youtube.com/shorts/Q1dFVbjyVog?si=7oKPA5-pJrZtHmbw",
    "https://youtube.com/shorts/bVSuMnCAzS4?si=exWne_hK6wRkO8EC",
    "https://youtube.com/shorts/8BE2IDTRfh0?si=OoA4iEtZjGpNvZWg",
    "https://youtube.com/shorts/HjnpdUv897k?si=1sztTzmGKlTEDYvX"
  ];

  const fullVideoLinks = [
    {
      url: "https://youtu.be/sZwV7wKe6fY?si=j079dpCKcJgGc9b1",
      title: "DIY Upcycled Clothes: Creative Transformations"
    },
    {
      url: "https://youtu.be/dA-pZbsX12w?si=G0u3q_5OU0FT1zYi",
      title: "Upcycle T-Shirts into Stylish Outfits"
    },
    {
      url: "https://youtu.be/Ell2l7pFjbY?si=GLX6K-WglcK1te7r",
      title: "Sustainable Fashion Challenge"
    }
  ];

  const tutorialLinks = [
    {
      url: "https://upcyclemystuff.com/upcycling-clothes-the-ultimate-guide-for-beginners/",
      title: "Upcycling Clothes: The Ultimate Guide for Beginners"
    },
    {
      url: "https://lacreativemama.com/how-to-upcycle-old-clothes/",
      title: "How to Upcycle Old Clothes – La Creative Mama"
    },
    {
      url: "https://creativefashionblog.com/upcycling-fashion-tutorials/",
      title: "Upcycling Fashion Tutorials – Creative Fashion Blog"
    },
    {
      url: "https://upcyclemystuff.com/visible-mending-reverse-applique-patches-for-kids-jeans/",
      title: "Reverse Appliqué Patches for Kids’ Jeans"
    },
    {
      url: "https://www.sumoftheirstories.com/blog/mens-shirt-to-fitted-blouse-refashion",
      title: "Men’s Shirt to Fitted Blouse Refashion"
    },
    {
      url: "https://www.almostsupermom.com/diy-upcycled-t-shirt-dress-for-girls/",
      title: "DIY Upcycled T-Shirt Dress for Girls"
    },
    {
      url: "https://elisesewingstudio.com/sew-a-maxi-dress-into-a-skirt/",
      title: "Sew a Maxi Dress into a Skirt"
    },
    {
      url: "https://muumade.com/how-to-convert-a-skirt-into-a-pair-of-shorts/",
      title: "Convert a Skirt into Shorts"
    },
    {
      url: "https://seamwhisperer.com/heart-wallet-clutch/",
      title: "Heart Wallet Clutch Tutorial"
    }
  ];

  return (
    <div className="info-section">
      <h2>🎨 Upcycling Tutorials & Videos</h2>
      <blockquote className="quote">"Upcycle it all no matter how small"</blockquote>

      <div className="video-grid">
        {shortVideoLinks.map((link, index) => {
          const videoId = link.split("/shorts/")[1]?.split("?")[0];
          return (
            <iframe
              key={index}
              width="280"
              height="498"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={`Upcycling Short ${index + 1}`}
              frameBorder="0"
              allowFullScreen
              className="video-frame"
            ></iframe>
          );
        })}
      </div>

      <h3>📺 Full-Length Video Tutorials</h3>
      <div className="tutorials-list">
        {fullVideoLinks.map((video, index) => (
          <a
            key={index}
            href={video.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tutorial-card"
          >
            {video.title}
          </a>
        ))}
      </div>

      <h3>📚 Articles & Blog Guides</h3>
      <div className="tutorials-list">
        {tutorialLinks.map((item, index) => (
          <a
            key={index}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="tutorial-card"
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default UpcyclingPage;
