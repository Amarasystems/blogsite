

import { Media, Image } from "react-bootstrap";
import React, {useState} from "react";
import { getAllStories } from "@/lib/api";
import { getAllCategories } from "@/lib/api";

export default () => {
   const storyRender = async () => {
    var url = "https://monxansh.appspot.com/xansh.json?currency=USD|EUR|JPY|GBP|RUB|CNY|KRW"
    var response = await fetch(url);
    var data = await response.json();
    
    const allStories = [
      {
        id: 0,
        author: "Luna Belle",
        imageUrl: "https://cdn.sanity.io/images/68liq5mc/production/7c3d7f412663c0649a9a02a1f82a70d0ff9f4a1f-598x630.jpg?rect=2,101,596,388&h=800",
      },
    
      {
        id: 1,
        author: "Willow Grace",
        imageUrl: "https://cdn.sanity.io/images/68liq5mc/production/8a8540ac06d0908e22c2ac16810bf45a98b62eee-1920x1280.jpg?h=800",
      },
    
      {
        id: 2,
        author: "Emma Smith",
        imageUrl: "images/3.jpg",
      },
    
      {
        id: 3,
        author: "Ruby Skye",
        imageUrl: "images/4.jpg",
      },
    
      {
        id: 4,
        author: "Live Blogger",
        imageUrl: "images/5.jpg",
      },
    
      {
        id: 5,
        author: "Hazel Jade",
        imageUrl: "images/6.jpg",
      },
    
      {
        id: 6,
        author: "Eden Faith",
        imageUrl: "images/7.jpg",
      },
    
      {
        id: 7,
        author: "Flora Maeve",
        imageUrl: "images/8.jpg",
      },
    
      {
        id: 8,
        author: "Nathaniel Hayes",
        imageUrl: "images/9.jpg",
      },
    
      {
        id: 9,
        author: "Everett Lee",
        imageUrl: "images/10.jpg",
      },
    
      {
        id: 9,
        author: "Owen",
        imageUrl: "images/11.jpg",
      },
    
      {
        id: 9,
        author: "Caleb Knox",
        imageUrl: "images/12.jpg",
      },
    
      {
        id: 9,
        author: "Felix",
        imageUrl: "images/13.jpg",
      },
    ];
  const stories = document.querySelector(".stories");
  const storiesFullView = document.querySelector(".stories-full-view");
  const closeBtn = document.querySelector(".close-btn");
  const storyImageFull = document.querySelector(".stories-full-view .story img");
  const storyAuthorFull = document.querySelector(
    ".stories-full-view .story .author"
  );
  const nextBtn = document.querySelector(".stories-container .next-btn");
  const previousBtn = document.querySelector(".stories-container .previous-btn");
  const storiesContent = document.querySelector(".stories-container .content");
  const nextBtnFull = document.querySelector(".stories-full-view .next-btn");
  const previousBtnFull = document.querySelector(
    ".stories-full-view .previous-btn"
  );
  
  let currentActive = 0;
  
  const createStories = () => {
    allStories.forEach((s, i) => {
      const story = document.createElement("div");
      story.classList.add("story");
      const img = document.createElement("img");
      img.src = s.imageUrl;
      const author = document.createElement("div");
      author.classList.add("author");
      author.innerHTML = s.author;
      story.appendChild(img);
      story.appendChild(author);
  
      stories.appendChild(story);
  
      story.addEventListener("click", () => {
        showFullView(i);
      });
    });
  };
  
  createStories();
  
  const showFullView = (index) => {
    currentActive = index;
    updateFullView();
    storiesFullView.classList.add("active");
  };
  
  closeBtn.addEventListener("click", () => {
    storiesFullView.classList.remove("active");
  });
  
  const updateFullView = () => {
    storyImageFull.src = allStories[currentActive].imageUrl;
    storyAuthorFull.innerHTML = allStories[currentActive].author;
  };
  
  nextBtn.addEventListener("click", () => {
    storiesContent.scrollLeft += 300;
  });
  
  previousBtn.addEventListener("click", () => {
    storiesContent.scrollLeft -= 300;
  });
  
  storiesContent.addEventListener("scroll", () => {
    if (storiesContent.scrollLeft <= 24) {
      previousBtn.classList.remove("active");
    } else {
      previousBtn.classList.add("active");
    }
  
    let maxScrollValue =
      storiesContent.scrollWidth - storiesContent.clientWidth - 24;
  
    if (storiesContent.scrollLeft >= maxScrollValue) {
      nextBtn.classList.remove("active");
    } else {
      nextBtn.classList.add("active");
    }
  });
  
  nextBtnFull.addEventListener("click", () => {
    if (currentActive >= allStories.length - 1) {
      return;
    }
    currentActive++;
    updateFullView();
  });
  
  previousBtnFull.addEventListener("click", () => {
    if (currentActive <= 0) {
      return;
    }
    currentActive--;
    updateFullView();
  });
   }
///////////weather render///
   storyRender();
    return ( <div>
      <div class="stories-container">
      <div class="content">
        <div class="previous-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        <div class="stories"></div>

        <div class="next-btn active">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>

    <div class="stories-full-view">
      <div class="close-btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </div>

      <div class="content">
        <div class="previous-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </div>

        <div class="story">
          <img src="images/3.jpg" alt="" />
          <div class="author">Author</div>
        </div>

        <div class="next-btn">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </div>
   </div> 
    );
};